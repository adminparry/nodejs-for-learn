import {Permission} from './entity/permission';
import {TreeUtil} from 'src/utils/treeUtil';

export const permissionProviders = [
    {
        provide: 'permissionRepository',
        useValue: Permission,
    },
    // {
    //     provide: 'util',
    //     useFactory: TreeUtil,
    // },
];
