import { Controller, Get, Inject } from '@nestjs/common';
import { PermissionService } from './permission.service';

@Controller('permission')
export class PermissionController {
    constructor(
        private readonly permissionService: PermissionService,
    ) { }
    @Get()
    getTree() {
        return this.permissionService.findAll();
    }
}
