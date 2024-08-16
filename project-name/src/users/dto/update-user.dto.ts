import { ApiProduces, ApiProperty } from "@nestjs/swagger";
import { BaseUserDto } from "./base-user.dto";
export class UpdateUserDto extends BaseUserDto {
  @ApiProperty()
  updatedAt: Date;
}