import { User } from './entity/user';

export const userProviders = [
    {
        provide: 'UserRepository',
        useValue: User,
    },
];
