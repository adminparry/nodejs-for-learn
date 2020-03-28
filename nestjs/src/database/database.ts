import { Sequelize } from 'sequelize-typescript';
import { UserEntity } from 'src/graphql/other/user-entity';

export const databaseProvider = [
    {
        provide: 'SequlizeToken',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '111111',
                database: 'test',
            });
            sequelize.addModels([UserEntity]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
