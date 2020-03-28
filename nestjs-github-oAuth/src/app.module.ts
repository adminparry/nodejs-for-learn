import { Module, NestModule, Inject, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OauthModule } from './oauth/oauth.module';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { EntityModule } from './entity/entity.module';
import * as cookieParser from 'cookie-parser';

@Module({
  imports: [
    OauthModule,
    DatabaseModule,
    UserModule,
    EntityModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {

  configure(consumer: MiddlewareConsumer) {
    // tslint:disable-next-line:no-console
    console.log('=======AppModule=======');
    consumer.apply(cookieParser()).forRoutes('*');
  }
}
