import { Sequelize } from 'sequelize-typescript';
import * as path from 'path';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '111111',
                database: 'db2',
                // modelPaths: [path.join(__dirname, '../**/*.entity.ts')],
                modelMatch: (filename, member) => {
                    // return filename.substring(0, filename.indexOf('.entity')) === member.toLowerCase();
                    return true;
                },
                timezone: '+08:00',
                define: {
                    timestamps: true,
                    underscored: false,
                },
            });
            const entityPath = path.join(__dirname, '../entity/**/*.entity.js');

            sequelize.addModels([entityPath]);

            await sequelize.sync();
            return sequelize;
        },
    },
];
