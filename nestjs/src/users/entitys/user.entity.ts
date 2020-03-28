import {
    Table,
    Model,
    Column,
    DataType,
    BeforeCreate,
    AllowNull,
    CreatedAt,
    UpdatedAt,
    DeletedAt,
    BeforeValidate,
} from 'sequelize-typescript';
import { IDefineOptions } from 'sequelize-typescript/lib/interfaces/IDefineOptions';

const tableOptions: IDefineOptions = { timestamps: true, tableName: "users" } as IDefineOptions;

@Table(tableOptions)
export class User extends Model<User> {
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
    })
    public firstName: string;
    @CreatedAt
    public createdAt: Date;

    @UpdatedAt
    public updatedAt: Date;

    @DeletedAt
    public deletedAt: Date;

    @BeforeValidate
    public static validate(user: User, option: any){
        if(!option.transaction) throw new Error('missing transaction.');

    }
}
