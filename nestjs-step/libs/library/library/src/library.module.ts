import { Module } from '@nestjs/common';
import { LibraryService } from './library.service';

@Module({
  providers: [LibraryService],
  exports: [LibraryService],
})
export class LibraryModule {}
