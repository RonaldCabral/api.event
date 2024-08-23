import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { EventEntity } from './events.entity';
import { MulterConfigModule } from 'src/common/multer.config';
import { JwtCustomModule } from 'src/jwt/jwt.module';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Module({
  imports: [TypeOrmModule.forFeature([EventEntity]), MulterConfigModule, JwtCustomModule],
  controllers: [EventsController],
  providers: [EventsService, JwtAuthGuard],
})
export class EventsModule {}
