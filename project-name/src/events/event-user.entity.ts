import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, OneToMany } from 'typeorm';
import { UserEntity } from 'src/users/user.entity';
import { EventEntity } from './events.entity';
import { EventAnswer } from './event-answer.entity';

@Entity()
export class EventUser {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => UserEntity)
    eventUser: UserEntity;

    @ManyToOne(() => EventEntity, event => event.eventUsers)
    event: Event;

    @OneToMany(() => EventAnswer, answer => answer.question)
    answers: EventAnswer[];

    @Column({
        type: 'enum',
        enum: ['sponsor', 'spectator'],
    })
    guestType: string;

    @Column('decimal', { precision: 10, scale: 2 })
    fee: number;

    @Column({ default: false})
    paid: boolean;

    @Column({ type: 'bytea', nullable: true })
    paymentProof: Buffer;
}
