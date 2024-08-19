import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Put,
  Param,
  NotFoundException,
  InternalServerErrorException,
  Get,
  Delete,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { EventEntity } from './events.entity';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) { }

  @Get('events')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get all events' })
  @ApiResponse({
    status: 200,
    description: 'Return all events.',
    type: EventEntity
  })
  async getAllEvents() {
    try {
      return await this.eventsService.findAllEvents();
    } catch (error) {
      console.error('Error during fetching events:', error);
      throw new InternalServerErrorException('Internal server error');
    }
  }

  @Get('event/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get event by id' })
  @ApiResponse({
    status: 200,
    description: 'Return event by id.',
    type: EventEntity
  })
  async getEventById(@Param('id') id: string) {
    try {
      const event = await this.eventsService.findOneEvent(id);
      if (!event) {
        throw new NotFoundException('Event not found');
      }
      return event;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException('Event not found');
      }
      console.error('Error during fetching event:', error);
      throw new InternalServerErrorException('Internal server error');
    }
  }

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new event' })
  @ApiResponse({
    status: 201,
    description: 'The event has been successfully created.',
    type: EventEntity,
  })
  async createEvent(@Body() createEventDto: CreateEventDto): Promise<EventEntity> {
    try {
      return await this.eventsService.createEvent(createEventDto);
    } catch (error) {
      console.error('Error during event creation:', error);
      throw new InternalServerErrorException('Internal server error');
    }
  }

  @Put('edit/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Edit an existing event' })
  @ApiResponse({
    status: 200,
    description: 'The event has been successfully updated.',
    type: EventEntity,
  })
  async updateEvent(
    @Param('id') id: string,
    @Body() updateEventDto: UpdateEventDto,
  ) {
    try {
      const event = await this.eventsService.updateEvent(id, updateEventDto);
      if (!event) {
        throw new NotFoundException('Event not found');
      }
      return event;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException('Event not found');
      }
      console.error('Error during event update:', error);
      throw new InternalServerErrorException('Internal server error');
    }
  }

  @Delete('delete/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete an existing event' })
  @ApiResponse({
    status: 200,
    description: 'The event has been successfully deleted.',
    type: EventEntity,
  })
  async deleteEvent(@Param('id') id: string) {
    try {
      const event = await this.eventsService.deleteEvent(id);
      if (!event) {
        throw new NotFoundException('Event not found');
      }
      return event;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException('Event not found');
      }
      console.error('Error during event deletion:', error);
      throw new InternalServerErrorException('Internal server error');
    }

  }
}