import { ApiProperty } from '@nestjs/swagger';

export class CreateEventDto {
    @ApiProperty()
    title: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    date?: Date;

    @ApiProperty()
    start_time?: string;

    @ApiProperty()
    image: Buffer;

    @ApiProperty()
    agenda?: Buffer;

    @ApiProperty()
    location: string;

    @ApiProperty()
    modality: string;

    @ApiProperty()
    isPaid: boolean;

    @ApiProperty()
    isActive: boolean;
}