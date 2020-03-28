import { Controller, Get, Res , HttpStatus} from '@nestjs/common';
import { User } from '../../interfaces/user.interface';
import { Response } from 'express';

@Controller('users')
export class UsersController {
    @Get('/index')
    async findAl(): Promise<User[]> {

        return [{
            id: 1,
            name: '小明',
            age: 18,
        }];
    }
    @Get('/test')
    test(@Res() res: Response) {
        // tslint:disable-next-line:quotemark
        res.setHeader("X-Powered-By", "Tongans");
        res.status(HttpStatus.OK).json([]);
    }
}
