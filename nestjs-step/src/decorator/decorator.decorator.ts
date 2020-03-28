import { ReflectMetadata } from '@nestjs/common';

export const Decorator = (...args: string[]) => ReflectMetadata('decorator', args);
