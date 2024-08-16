import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async findOneBy(email: string) {
    return await this.userRepository.findOne({ where: { email: email } });
  }

  async create(createUserDto: CreateUserDto) {
    return this.userRepository.save({
      ...createUserDto,
      createdAt: new Date(),
    });
  }
}
