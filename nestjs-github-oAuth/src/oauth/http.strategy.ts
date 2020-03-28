import { Strategy } from 'passport-http-bearer';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { GithubService } from './github/github.service';
import * as http from 'http';

@Injectable()
export class HttpStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly github: GithubService) {
        super();
    }

    async validate(token: any) {

        const user = await this.github.validateUser2(token);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}
