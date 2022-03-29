import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Despesa{

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    description: string;
    @Column()
    data: string;
    @Column()
    valor: string;
}