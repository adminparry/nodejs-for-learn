import { Table, Column, Model, CreatedAt, DeletedAt, UpdatedAt, BeforeValidate, Validate } from 'sequelize-typescript';
import { UniqueException } from 'src/common/error/UniqueException';

@Table({
    tableName: 'name_user',
})
export class User extends Model<User> {
    @Column({
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    })
    id: number;

    @Column({
        allowNull: false,
    })
    author: string;

    @Column({
        allowNull: false,
    })
    isbn: string;

    @Column({
        allowNull: false,
        unique: true,
    })
    name: string;

    @CreatedAt
    createdAt: Date;

    @UpdatedAt
    updatedAt: Date;

    @DeletedAt
    deletedAt: Date;

    @BeforeValidate
    public static bfValidate(user: User, options: any) {
        // console.log(user);
        // console.log("===============================")
        // console.log(options)
    }
}
