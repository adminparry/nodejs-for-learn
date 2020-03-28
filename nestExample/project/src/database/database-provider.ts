import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/user/entity/user';
import { Permission } from 'src/permission/entity/permission';

export const DatabaseProvider = [
    {
        provide: 'SequlizeInstance',
        useFactory: async () => {
            const sequlize = new Sequelize({
                dialect: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '111111',
                database: 'test',
            });
            sequlize.addModels([User]);
            sequlize.addModels([Permission]);

            await sequlize.sync();
            return sequlize;
        },
    },
];
