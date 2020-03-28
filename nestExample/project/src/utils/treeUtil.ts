import { Permission } from '../permission/entity/permission';
import { PermissionEntity } from 'src/permission/permission.service';

export class TreeUtil {

    data(ps) {
        const arr = [];
        for (const item of ps) {
            if (item.pid === 0) {
                arr.push(item);
            }
        }
        for (const child of arr) {

            const childNode = this.getChildNode(child.id, ps);

            child.children = childNode;

        }

        return arr;

    }
    getChildNode(id, ps) {
        const arr = [];
        for (const item of ps) {

            if (item.pid === id) {
                item.constructor = Permission;
                arr.push(item);
            }
        }
        for (const children of arr) {
            children.children = this.getChildNode(children.id, ps);
        }
        if (arr.length === 0) {
            return null;
        }
        return arr;
    }
}
