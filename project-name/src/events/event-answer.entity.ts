import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { EventQuestion } from './event-question.entity';
import { EventUser } from './event-user.entity';

@Entity()
export class EventAnswer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    answer: string;

    @ManyToOne(() => EventQuestion, question => question.answers)
    question: EventQuestion;

    @ManyToOne(() => EventUser, eventUser => eventUser.answers)
    eventUser: EventUser;
}
