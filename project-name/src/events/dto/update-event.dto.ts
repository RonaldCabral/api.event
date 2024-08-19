import { ApiProduces, ApiProperty } from "@nestjs/swagger";
import { CreateEventDto } from "./create-event.dto";
export class UpdateEventDto extends CreateEventDto {
  @ApiProperty()
  updatedAt: Date;
}