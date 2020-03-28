import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { EntityModule } from '../entity/entity.module';
@Module({
  providers: databaseProviders,
  exports: databaseProviders,
})
export class DatabaseModule { }
