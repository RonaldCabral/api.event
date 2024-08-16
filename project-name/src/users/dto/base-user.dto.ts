/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class BaseUserDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  company?: string;

  @ApiProperty()
  phoneNumber: string;

  @ApiProperty()
  department?: string;

  @ApiProperty()
  position?: string;

  @ApiProperty()
  isItAdmin: boolean;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
