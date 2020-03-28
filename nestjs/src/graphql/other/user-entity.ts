import * as crypto from 'crypto';
import { Table, Model, Column, DataType, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';
import { IDefineOptions } from 'sequelize-typescript/lib/interfaces/IDefineOptions';

const tableOptions: IDefineOptions = { timestamps: true, tableName: 'user' };

@Table(tableOptions)
export class UserEntity extends Model<UserEntity> {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
    })
    public id: number;

    @Column({
        type: DataType.CHAR(30),
        allowNull: false,
        validate: {
            isEmail: true,
            isUnique: async (val: string, next: any): Promise<any> => {
                const isExist = UserEntity.findOne({ where: { author: val } });
                if (isExist) {
                    next('author is exist');
                }
                next();
            },
        },
    })
    public author: string;

    @Column({
        type: DataType.CHAR(30),
        allowNull: false,
    })
    public isbn: string;

    @Column({
        type: DataType.CHAR(30),
        allowNull: false,
    })
    public name: string;

    @CreatedAt
    public createdAt: Date;

    @UpdatedAt
    public updatedAt: Date;

    @DeletedAt
    public deletedAt: Date;
}
