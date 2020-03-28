import { Module } from '@nestjs/common';
import {permissionProviders} from './permission.providers';
import { PermissionService } from './permission.service';
import { PermissionController } from './permission.controller';

@Module({
  providers: [...permissionProviders, PermissionService],
  controllers: [PermissionController],
})
export class PermissionModule { }
