import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { EventEntity } from './events.entity';
import { EventAnswer } from './event-answer.entity';

@Entity()
export class EventQuestion {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    question: string;

    @ManyToOne(() => EventEntity, event => event.questions)
    event: EventEntity;

    @OneToMany(() => EventAnswer, answer => answer.question)
    answers: EventAnswer[];
}