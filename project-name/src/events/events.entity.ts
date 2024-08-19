import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class EventEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column()
  location: string;

  @Column('date')
  date: Date;

  @Column('timestamp')
  start_time: string;

  @Column('timestamp')
  end_time: string;

  @Column()
  organizer_name: string;

  @BeforeInsert()
  generateId() {
    this.id = uuidv4();
  }
}
