import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventEntity } from './events.entity';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(EventEntity)
    private readonly eventRepository: Repository<EventEntity>,
  ) {}

  async findOneEvent(id: string) {
    return this.eventRepository.findOne({ where: { id: id } });
  } //TODO : ADD RELATIONS TO QUERY PARAMS

  async findAllEvents() {
    return this.eventRepository.find();
  }

  async createEvent(createEventDto: CreateEventDto) {
    const event = this.eventRepository.create(createEventDto);
    return this.eventRepository.save(event);
  }

  async updateEvent(id: string,updateEventDto: UpdateEventDto) {
    const event = await this.eventRepository.update(id, updateEventDto);
    return event;
  }

  async deleteEvent(id: string) {
    const event = await this.findOneEvent(id);
    return this.eventRepository.remove(event);
  }

  async handleImageUpload(file: Express.Multer.File) {
    const event = new EventEntity();
    event.image = file.buffer;

    return this.eventRepository.save(event);
  }

  async handlePdfUpload(file: Express.Multer.File) {
    const event = new EventEntity();
    event.agenda = file.buffer;

    return this.eventRepository.save(event);
  }
}
