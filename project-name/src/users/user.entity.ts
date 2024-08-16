/* eslint-disable prettier/prettier */
import { CreateDateColumn } from 'typeorm';
import { UpdateDateColumn } from 'typeorm';
import {
  BeforeInsert,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column()
  company?: string;

  @Column()
  phoneNumber: string;

  @Column()
  department?: string;

  @Column()
  position?: string;

  @Column({ default: false })
  isItAdmin: boolean;

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  generateId() {
    this.id = uuidv4();
  }
}
