import { IsString, Length } from 'class-validator';

export class LoginRequestDto {
  @IsString()
  @Length(3, 255)
  email: string;

  @IsString()
  @Length(8, 255)
  password: string;
}
