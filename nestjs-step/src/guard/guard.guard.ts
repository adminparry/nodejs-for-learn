import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { step } from '../constants/count';

@Injectable()
export class GuardGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // tslint:disable-next-line:no-console
    console.log(step.count++, '初始化调用guard');
    return true;
  }
}
