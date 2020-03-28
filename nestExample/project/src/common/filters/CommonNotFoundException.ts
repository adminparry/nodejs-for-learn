import { NotFoundException, Catch, ExceptionFilter, ArgumentsHost, HttpException } from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter<T> implements ExceptionFilter {
    catch(exception: T, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        // const request = ctx.getRequest();
        // const he = exception as unknown as HttpException;
        // const status = he.getStatus();
        // const res = he.getResponse();
        switch (exception.constructor) {
            case NotFoundException:
                response.json({
                    msg: 'not found',
                    code: 404,
                });
                break;
            default:
                response.json({
                    msg: 'unknown',
                    code: 897,
                });
        }

    }
}
