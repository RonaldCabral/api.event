import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TokenService } from './token.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET') || 'defaultSecret',
        signOptions: { expiresIn: '60m' },
      }),
      inject: [ConfigService],
    }),
    ConfigModule,
  ],
  providers: [TokenService],
  exports: [JwtModule, TokenService],  
})

export class JwtCustomModule {}
