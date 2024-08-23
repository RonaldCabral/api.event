/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class BaseUserDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  phoneNumber: string;

  @ApiProperty()
  position?: string;

  @ApiProperty()
  company?: string;

  @ApiProperty()
  company_address?: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  isItAdmin: boolean;
}
