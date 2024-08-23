import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { EventsModule } from './events/events.module';
import { JwtCustomModule } from './jwt/jwt.module';
import { ConfigModule } from '@nestjs/config';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    AuthModule,
    JwtCustomModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Don't use this in production
    }),
    EventsModule,
    ConfigModule.forRoot({
      isGlobal: true,  // ConfigModule disponible globalmente
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
