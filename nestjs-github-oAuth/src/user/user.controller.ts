import { Controller, Get, Session } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get()
    info(@Session() session) {
        return session.user;
    }
}
