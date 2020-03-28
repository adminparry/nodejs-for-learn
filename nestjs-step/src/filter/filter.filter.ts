import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class FilterFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {}
}
