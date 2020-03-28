import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { step } from '../constants/count';

@Injectable()
export class PipePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    // tslint:disable-next-line:no-console
    console.log(step.count++, '初始化调用pipe');
    return value;
  }
}
