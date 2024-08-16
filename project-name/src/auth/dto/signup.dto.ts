/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SignUpDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  password: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  phoneNumber: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  company: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  department: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  position: string;
}