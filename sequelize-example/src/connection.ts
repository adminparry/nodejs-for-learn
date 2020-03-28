import { Sequelize } from 'sequelize-typescript';
import { SequelizeConfig } from 'sequelize-typescript/lib/types/SequelizeConfig';
import { Person } from './model/Person';
export const datasourceFactory = async () => {
    const config = {
        dialect: 'mysql',
        database: 'db',
        host: "localhost",
        define: {
            // generated createAt updateAt
            timestamps: true,
            underscored: false,
        },
        username: 'root',
        password: '111111',
        // east eight area time
        timezone: "+08:00"

    } as SequelizeConfig;
    const sequelizeInstance = new Sequelize(config);
    sequelizeInstance.addModels([Person]);   

    await sequelizeInstance.sync({
        // force: true,
    });

    return sequelizeInstance
}
