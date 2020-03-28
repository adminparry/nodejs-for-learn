import { Module } from '@nestjs/common';
import { entityProviders } from './entity.providers';

@Module({
    providers: entityProviders,
    exports: entityProviders,
})
export class EntityModule { }
