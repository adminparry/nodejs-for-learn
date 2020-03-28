import { Controller, Get, Query, Res, Session } from '@nestjs/common';
import { GithubService } from './github.service';
import { Request, Response } from 'express';

@Controller('github')
export class GithubController {
    constructor(
        private readonly githubService: GithubService,
    ) {}
    @Get()
    test(@Res() res: Response) {
        res.redirect(301, 'https://github.com/login/oauth/authorize?client_id=4b4cb5fb589adb60eae7');
    }

    @Get('callback')
    async github(@Query() query: any, @Res() res: Response, @Session() session) {

        const { code } = query;
        const token = await this.githubService.validateUser(code);

        if (token) {
            const userInfo = await this.githubService.getInfo(token);
            session.user = userInfo;
            const ret = await this.githubService.findOrCreate(userInfo.id, userInfo.name);
            session.type = ret;
            // res.redirect(301, '/home');
            res.send({ statusCode: 200, msg: '登录成功'});
        } else {
            // res.redirect(301, '/error');
            res.send({ statusCode: 400, msg: '登录失败'});
        }
    }
}
