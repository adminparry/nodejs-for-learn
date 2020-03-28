import { Controller, Get, Res, Query, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) { }
    @Get('/all')
    a() {
        return this.userService.findAll();
    }
    @Get('/add')
    d(@Query() query) {
        const { author, name, isbn } = query;
        return this.userService.create(query);

    }
    @Get(':id')
    b(@Param() param: { id: number }) {
        const { id } = param;
        return this.userService.findById(id);
    }
    @Get()
    c(@Query() query) {
        const { id } = query;
        if (!id) {
            return this.userService.findAll();
        }
        return this.userService.findById(id);
    }
    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    UploadedFile(@UploadedFile() file) {

        return {
            name: 'asdf42far23rf2',
        };
    }
}
