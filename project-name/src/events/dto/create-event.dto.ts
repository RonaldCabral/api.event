import { ApiProperty } from '@nestjs/swagger';

export class CreateEventDto {
    @ApiProperty()
    title: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    location: string;

    @ApiProperty()
    date: Date;

    @ApiProperty()
    start_time: string;

    @ApiProperty()
    end_time: string;

    @ApiProperty()
    organizer_name: string;
}