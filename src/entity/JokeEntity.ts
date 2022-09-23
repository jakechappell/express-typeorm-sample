import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Jokes {
    @PrimaryColumn()
    jokeId!: number

    @Column()
    jokeQuestion!: string

    @Column()
    jokeAnswer!: string
}