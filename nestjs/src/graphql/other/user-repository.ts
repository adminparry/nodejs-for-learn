
import { UserEntity } from './user-entity';

export const UserRepository = [{
    provide: 'UserRepository',
    useValue: UserEntity,
},
];
