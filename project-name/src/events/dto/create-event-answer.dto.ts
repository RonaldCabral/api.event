import { ApiProperty } from '@nestjs/swagger';

export class CreateEventAnswerDto {
    @ApiProperty()
    questionId: number;

    @ApiProperty()
    eventUserId: number;

    @ApiProperty()
    answer: string;
}