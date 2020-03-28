import { Module, NestModule, MiddlewareConsumer, RequestMethod, Inject } from '@nestjs/common';
import { GithubService } from './github/github.service';
import { PassportModule } from '@nestjs/passport';
import { HttpStrategy } from './http.strategy';
import { SessionMiddleware } from '../middleware/session.middleware';
import { DatabaseModule } from '../database/database.module';
import { GithubController } from './github/github.controller';

import * as expressSession from 'express-session';
import * as passport from 'passport';

import css = require('connect-session-sequelize');
import { UserController } from '../user/user.controller';
import { EntityModule } from '../entity/entity.module';

const SequelizeStore = css(expressSession.Store);

@Module({
  imports: [
    PassportModule.register({ session: true }),
    DatabaseModule,
    EntityModule,
  ],
  providers: [GithubService, HttpStrategy],
  exports: [GithubService],
  controllers: [GithubController],
})
export class OauthModule implements NestModule {
  @Inject('SEQUELIZE') private sequelize: any;
  configure(consumer: MiddlewareConsumer) {
    // tslint:disable-next-line:no-console
    console.log('=======OauthModule=======');

    const myStore = new SequelizeStore({
      checkExpirationInterval: 15 * 60 * 1000, // The interval at which to cleanup expired sessions in milliseconds.
      expiration: 60 * 15 * 1000, // (24 hour)The maximum age (in milliseconds) of a valid session.
      db: this.sequelize,
      disableTouch: false,
    });
    myStore.sync();
    // all path manage session

    consumer.apply(
      expressSession({
      secret: 'keyboard cat',
      saveUninitialized: true,
      store: myStore,
      resave: false, // we support the touch method so per the express-session docs this should be set to false
      proxy: true, // if you do SSL outside of node.
      cookie: {
        maxAge: 15 * 60 * 1000,
      },
    }),
    // how to use passport is a problem
    // passport.initialize(),
    // passport.session(),
    // passport.authenticate('local', { failureRedirect: '/login' }),
    ).forRoutes('*');
    // first set session after through get
    consumer.apply(SessionMiddleware).exclude(
      'github/*',
    ).forRoutes('/home', UserController);
  }
}
