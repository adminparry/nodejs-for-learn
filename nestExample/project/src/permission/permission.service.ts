import { Injectable, Inject } from '@nestjs/common';
import { Permission } from './entity/permission';
import { TreeUtil } from 'src/utils/treeUtil';
export interface PermissionEntity {
    id: number;
    pid: number;
    name: string;
    detail: string;
    code: string;
    children: PermissionEntity[] | null;
}
@Injectable()
export class PermissionService {
    constructor(
        // private readonly util: TreeUtil,
        @Inject('permissionRepository') private readonly permissionRepository: typeof Permission,
    ) { }
    // select all
    async findAll(): Promise<any> {
        const all = await this.permissionRepository.findAll<Permission<PermissionEntity>>();
        const cloneAll = JSON.parse(JSON.stringify(all));
        // tslint:disable-next-line:no-unused-expression

        const a = new TreeUtil().data(cloneAll);

        console.log('问题出在JSON.stringify 会剔除自引用', a);
        return a;
        // return this.util.data(all);
    }
    // insert entity
    // async create(ps: Permission): Promise<Permission> {
    //     return await this.permissionRepository.create<Permission>(ps);
    // }
    // update entity
    // async update(ps: Permission): Promise<Permission> {
    //     return await this.permissionRepository.update<Permission>(ps);
    //     this.permissionRepository.
    // }
}
