import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { EventEntity } from './events.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EventEntity])],
  controllers: [EventsController],
  providers: [EventsService],
})
export class EventsModule {}
