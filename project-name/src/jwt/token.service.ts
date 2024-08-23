import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UserEntity } from 'src/users/user.entity';

@Injectable()
export class TokenService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) { }

  generateToken(user: UserEntity): string {
    const payload = {
      sub: user.id,  // Identificador del usuario
      email: user.email,  // Email del usuario
      isItAdmin: user.isItAdmin,  // Rol del usuario
    };
    return this.jwtService.sign(payload);
  }

  validateToken(token: string): any {
    return this.jwtService.verify(token);
  }

  generateRefreshToken(user: UserEntity): string {
    const payload = {
      sub: user.id,
      email: user.email,
      isItAdmin: user.isItAdmin,
    };
    return this.jwtService.sign(payload, {
      secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
      expiresIn: this.configService.get<string>('JWT_REFRESH_EXPIRATION_TIME'),
    });
  }

  validateRefreshToken(token: string): any {
    return this.jwtService.verify(token, {
      secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
    });
  }
}