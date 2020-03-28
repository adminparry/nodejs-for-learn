import { Module } from '@nestjs/common';
import { databaseProvider } from './database';

@Module({
  providers: [...databaseProvider],
  exports: [...databaseProvider],
})
export class DatabaseModule { }
