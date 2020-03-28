import { ArgumentsHost, ExceptionFilter, HttpException, Catch, NotFoundException } from '@nestjs/common';
import { UniqueException } from './common/error/UniqueException';
import { ValidationError, UniqueConstraintError } from 'sequelize';
@Catch(ValidationError)
export class GlobalFilterFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    // tslint:disable-next-line:no-console
    console.log('9090909090909090909', exception);
    // Error.captureStackTrace(this, this.constructor);

    switch (exception.constructor) {
      case UniqueConstraintError:
        const { errors } = exception as unknown as ValidationError;
        response.json({
          msg: errors[0].message,
          code: 871,
        });
        break;
      default:
        response
          // .status(status)
          .json(exception);
    }

  }
}
