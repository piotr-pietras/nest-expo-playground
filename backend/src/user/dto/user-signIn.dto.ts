import { IsNotEmpty, IsEmail, IsStrongPassword } from 'class-validator';

export class UserSignInDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsStrongPassword({ minLength: 6 })
  @IsNotEmpty()
  password: string;
}
