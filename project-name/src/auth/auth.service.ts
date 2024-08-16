import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserEntity } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';
import { SignUpDto } from './dto/signup.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private usersService: UsersService,
  ) {}

  async login(loginDto: LoginDto): Promise<UserEntity> {
    const { email, password } = loginDto;
    const user = await this.userRepository.findOne({ where: { email } });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    if (password !== user.password) {
      throw new UnauthorizedException('Invalid credentials');
    }

    user.updatedAt = new Date(); // Update the updatedAt field
    await this.userRepository.save(user); // Save the updated user entity

    return user;
  }

  async signUp(signUpDto: SignUpDto): Promise<UserEntity> {
    const user = this.userRepository.create(signUpDto);
    user.createdAt = new Date();
    user.updatedAt = new Date();
    return await this.userRepository.save(user);
  }
}
