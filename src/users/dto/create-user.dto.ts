import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'user@mail.ua', description: 'Email' })
  @IsString({ message: 'Should be string' })
  @IsEmail({}, { message: 'Uncorrect email' })
  readonly email: string;
  @ApiProperty({ example: '12345password', description: 'Password' })
  @IsString({ message: 'Should be string' })
  @Length(4, 16, { message: 'Should be grater then 4 and less then 16' })
  readonly password: string;
}
