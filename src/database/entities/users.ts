import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({tableName: "users"})
export class User extends Model {
    @Column
    first_name: string;
    @Column
    last_name: string;
    @Column
    email: string;
    @Column
    password: string;
    @Column
    amount_of_urls: string;

    @Column({ type: DataType.DATE, allowNull: true, field: 'created_at' })
    declare createdAt?: Date;

    @Column({ type: DataType.DATE, allowNull: true, field: 'updated_at' })
    declare updatedAt?: Date;

}