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
  email: string;
  
  @Column()
  phoneNumber: string;

  @Column()
  position?: string;

  @Column()
  company?: string;

  @Column()
  company_address?: string;
  
  @Column()
  password: string;

  @Column({ default: true })
  isItAdmin: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  generateId() {
    this.id = uuidv4();
  }
}
