import { Model, Column, Table } from 'sequelize-typescript';

@Table({
    tableName: 'github_user',
})
export class GithubUser extends Model<GithubUser> {
    @Column({
        primaryKey: true,
        autoIncrement: true,
    })
    id: number;
    @Column
    // tslint:disable-next-line:variable-name
    gh_id: number;
    @Column
    name: string;
}
