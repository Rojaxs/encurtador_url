import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({tableName: "url"})
export class Url extends Model {
    @Column
    url: string;
    @Column
    short_url: string;
    @Column
    user_id: number;
    @Column
    amount_of_access: number;

    @Column({ type: DataType.DATE, allowNull: true, field: 'createdAt' })
    declare createdAt?: Date;



}