import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserEntity } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';
import { SignUpDto } from './dto/signup.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginDto } from './dto/login.dto';
import { TokenService } from 'src/jwt/token.service';

interface AuthResponse {
  user: UserEntity;
  accessToken: string;
}

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private usersService: UsersService,
    private tokenService: TokenService
  ) {}

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;
    const user = await this.userRepository.findOne({ where: { email } });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    if (password !== user.password) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const accessToken = this.tokenService.generateToken(user);  // <-- Genera el token  // <-- Devuelve el token al cliente

    user.updatedAt = new Date(); // Update the updatedAt field
    await this.userRepository.save(user); // Save the updated user entity

    return { user, accessToken};
  }

  async signUp(signUpDto: SignUpDto) {
    const user = this.userRepository.create(signUpDto);
    user.createdAt = new Date();
    user.updatedAt = new Date();
    await this.userRepository.save(user);

    const accessToken = this.tokenService.generateToken(user);

    return { user, accessToken};
  }
}
