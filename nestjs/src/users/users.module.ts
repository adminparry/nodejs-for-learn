import { Module, RequestMethod } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { MiddlewareConsumer } from '@nestjs/common/interfaces/middleware';
import { AuthMiddleware } from './auth.middleware';

@Module({

})
export class UsersModule {
    public configure(consumer: MiddlewareConsumer) {
        consumer.apply(AuthMiddleware).forRoutes(
            { path: '/users', method: RequestMethod.GET },
            { path: '/users/:id', method: RequestMethod.GET },
            { path: '/users/:id', method: RequestMethod.PUT },
            { path: '/users/:id', method: RequestMethod.DELETE },

        );
    }
}
