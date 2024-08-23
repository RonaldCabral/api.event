import { IsIn } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, OneToMany, ManyToMany } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { EventQuestion } from './event-question.entity';
import { EventAnswer } from './event-answer.entity';
import { EventUser } from './event-user.entity';

@Entity()
export class EventEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column({ type: 'date' })
  date?: Date;

  @Column({ type: 'time' })
  start_time?: string;

  @Column({ type: 'bytea', nullable: true })
  image: Buffer;

  @Column({ type: 'bytea', nullable: true })
  agenda?: Buffer;

  @Column()
  location: string;

  @IsIn(['online', 'offline'])
  modality: string;

  @Column({ default: false })
  isPaid: boolean;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => EventQuestion, question => question.event)
  questions: EventQuestion[];

  @OneToMany(() => EventUser, eventUser => eventUser.event)
  eventUsers: EventUser[];

  @BeforeInsert()
  generateId() {
    this.id = uuidv4();
  }
}
