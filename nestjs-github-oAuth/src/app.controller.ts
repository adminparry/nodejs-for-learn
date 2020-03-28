import { Controller, Get, UseGuards, Req, Res, Query, Session } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { GithubService } from './oauth/github/github.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) { }

  @Get()
  // @UseGuards(AuthGuard())
  async getHello(@Req() req: Request, @Res() res: Response, @Session() session: any) {

    res.sendfile('src/html/index.html');

  }
  @Get('test')
  test() {
    return { statusCode: 200, msg: 'success'};
  }
  @Get('home')
  async home(@Req() req: Request, @Res() res: Response) {

    const hello = this.appService.getHello();
    res.send(hello);
  }

}
