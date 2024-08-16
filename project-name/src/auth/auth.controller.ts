import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { Public } from 'src/common/decorators/public.decorator';
import { BaseUserDto } from 'src/users/dto/base-user.dto';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: LoginDto) {
    try {
      return await this.authService.login(loginDto);
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw new UnauthorizedException('Invalid credentials');
      }
      console.error('Error during login:', error);
      throw new Error('Internal server error');
    }
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'User registration' })
  @ApiResponse({
    status: 200,
    description: 'The record found',
    type: [BaseUserDto],
  })
  @Post('signup')
  async signUp(@Body() signUpDto: SignUpDto) {
    try {
      const payload = {
        ...signUpDto,
        createdAt: new Date(),
        updatedAt: new Date(),
        isItAdmin: false,
      };
      return await this.authService.signUp(payload);
    } catch (error) {
      console.error('Error during sign up:', error);
      throw new Error('Internal server error');
    }
  }
}
