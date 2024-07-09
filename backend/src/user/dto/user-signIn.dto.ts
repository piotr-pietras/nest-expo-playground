import { IsNotEmpty, IsEmail } from 'class-validator';

export class UserSignInDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}
