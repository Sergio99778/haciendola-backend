import { IsString, Length } from 'class-validator';

export class RegisterRequestDto {
  @IsString()
  @Length(3, 255)
  firstName: string;

  @IsString()
  @Length(3, 255)
  lastName: string;

  @IsString()
  @Length(3, 255)
  email: string;

  @IsString()
  @Length(8, 255)
  password: string;
}
