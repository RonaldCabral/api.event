import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { TokenService } from '../jwt/token.service';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private tokenService: TokenService,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1];

    if (!token) {
      console.log('No token provided');
      throw new ForbiddenException('No token provided');
    }

    try {
      const user = this.tokenService.validateToken(token);
      console.log('Decoded User:', user);
      request.user = user;

      if (user.isItAdmin) {
        console.log('Access granted for admin user');
        return true;
      } else {
        console.log('Access denied. User is not an admin');
        throw new ForbiddenException('User is not an admin');
      }
    } catch (error) {
      console.log('Token validation failed:', error.message);
      throw new ForbiddenException('Invalid or expired token');
    }
  }
}
