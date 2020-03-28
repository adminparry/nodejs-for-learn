import { Injectable, NestMiddleware } from '@nestjs/common';
import {step} from '../constants/count';
@Injectable()
export class MiddlewareMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    // tslint:disable-next-line:no-console
    console.log(step.count++, '初始化调用middleware');
    next();
  }
}
