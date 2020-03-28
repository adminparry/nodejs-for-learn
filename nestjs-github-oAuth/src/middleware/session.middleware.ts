import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class SessionMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    // tslint:disable-next-line:no-console
    console.log('===============SessionMiddleware==================');
    const { session } = req;

    // get session.user pass by set session.user
    if (!session.user) {
      // res.redirect('/');
      res.send({ stausCode: 200, msg: '请先登录' });
    } else {
      next();
    }

  }
}
