import { Injectable, Inject } from '@nestjs/common';
import * as https from 'https';
import { GithubUser } from '../../entity/githubUser.entity';

@Injectable()
export class GithubService {
    constructor(
        @Inject('GITHUB_USER_REPOSITORY') private readonly GITHUB_USER_REPOSITORY: typeof GithubUser,
    ) { }
    async getToken(id: string, secret: string, token: string): Promise<any> {

        return new Promise((resolve, reject) => {
            const accessToken = https.request({
                hostname: 'github.com',
                method: 'GET',
                path: `/login/oauth/access_token?client_id=${id}&client_secret=${secret}&code=${token}`,
                headers: {
                    accept: 'application/json',
                },
            }, res => {
                let rawData = '';
                res.on('data', (chunk) => { rawData += chunk; });
                res.on('end', () => {
                    // console.log(rawData, '================getToken=========');
                    resolve(JSON.parse(rawData).access_token);
                });
            });
            accessToken.on('error', err => {
                reject(err);
            });
            accessToken.end();
        });
    }
    async getInfo(accessToken: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const info = https.request({
                hostname: 'api.github.com',
                method: 'GET',
                path: `/user?access_token=${accessToken}`,
                headers: {
                    'accept': 'application/json',
                    'authorization': `token ${accessToken}`,
                    // 这个地方必须要传个userAgent
                    'user-agent': 'zhongwen baocuo',
                },
            }, res => {
                let rawData = '';
                res.on('data', (chunk) => { rawData += chunk; });
                res.on('end', () => {
                    // console.log(rawData, '==============getInfo=============');findOrcreate
                    const json = JSON.parse(rawData);
                    resolve(json);

                });
            });
            info.on('error', err => {
                reject(err);
            });
            info.end();
        });
    }
    async findOrCreate(id: number, name: string) {
        const user = await this.GITHUB_USER_REPOSITORY.findOne({
            where: {
                gh_id: id,
            },
        });
        if (user) {
            return await this.GITHUB_USER_REPOSITORY.update({ name }, { where: { id: user.id } });
        } else {
            return await this.GITHUB_USER_REPOSITORY.create({ gh_id: id, name });
        }
    }
    async validateUser(token: string): Promise<any> {
        // Validate if token passed along with HTTP request
        // is associated with any registered account in the database
        // return await this.usersService.findOneByToken(token);
        const id: string = '4b4cb5fb589adb60eae7';
        const secret = '0bea0ee874054f90d6998b4903d82e60ed7496eb';
        // 获取标识
        // https://github.com/login/oauth/access_token?client_id=&client_secret=&code=
        const code = await this.getToken(id, secret, token);
        // 获取用户信息
        // https://api.github.com/user?access_token=
        // const info = await this.getInfo(code);

        return code;
    }
    async validateUser2(token: string): Promise<any> {

        return true;
    }

}
