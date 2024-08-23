import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/users/user.entity';
import { TokenService } from '../jwt/token.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { JwtCustomModule } from 'src/jwt/jwt.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UsersModule, TypeOrmModule.forFeature([UserEntity]), JwtCustomModule, ConfigModule],
  controllers: [AuthController],
  providers: [AuthService, TokenService, JwtAuthGuard],
  exports: [AuthService, JwtAuthGuard],
})
export class AuthModule {}
