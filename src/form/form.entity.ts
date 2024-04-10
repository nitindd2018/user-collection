import { UUID } from "crypto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('forms')
export class Form {
    @PrimaryGeneratedColumn()
    uniqueId: UUID;

    @Column()
    title: string;

    @Column()
    name: string;

    @Column({unique:true})
    email: string;

    @Column()
    phonenumber: number;

    @Column()
    isGraduate: boolean;
}