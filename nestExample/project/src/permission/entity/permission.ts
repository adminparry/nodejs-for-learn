import { Model, Column, Table, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';

@Table({
    tableName: 'permission',
    timestamps: true,
})
export class Permission<T> extends Model<T> {
    children: T;
    @Column({
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    })

    id: number;

    @Column({
        allowNull: false,
    })
    pid: number;
    @Column({
        allowNull: true,
    })
    code: string;
    @Column({
        allowNull: false,
    })
    name: string;
    @Column({
        allowNull: false,
    })
    detail: string;

    @CreatedAt
    createdAt: Date;

    @UpdatedAt
    updatedAt: Date;

    @DeletedAt
    deletedAt: Date;

}
