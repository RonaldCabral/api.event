import { ApiProperty } from '@nestjs/swagger';

export class CreateEventAnswerDto {
    @ApiProperty()
    eventId: number;

    @ApiProperty()
    question: string;
}