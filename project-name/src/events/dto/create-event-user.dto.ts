import { ApiProperty } from '@nestjs/swagger';

export class CreateEventAnswerDto {
    @ApiProperty()
    userId: number;

    @ApiProperty()
    eventId: number;

    @ApiProperty()
    questType: string;

    @ApiProperty()
    fee: number;

    @ApiProperty()
    paid: boolean;

    @ApiProperty()
    paymentProof: Buffer;
}