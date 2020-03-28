import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersController } from './controllers/users/users.controller';
import { AboutController } from './controllers/about/about.controller';
import { TestResolver, PubSubFactory } from './test/test.resolver';
import { OtherResolver } from './graphql/other/other.resolver';
import { OtherService } from './graphql/other/other.service';
import { DatabaseModule } from './database/database.module';
import { UserRepository } from './graphql/other/user-repository';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      // debug: false,
      // playground: false,
    }),
    DatabaseModule,
  ],
  controllers: [AppController, UsersController, AboutController],
  providers: [...UserRepository, AppService, PubSubFactory,  TestResolver, OtherService, OtherResolver],
})
export class AppModule {}
