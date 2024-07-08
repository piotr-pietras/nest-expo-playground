import { Body, Controller, Post } from '@nestjs/common';
import { UserSignUpDto } from './dto/user-signUp.dto';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  //   @Post('signIn')
  //   signIn(@Body() signInDto: Record<string, any>) {
  //     return this.authService.signIn(signInDto.username, signInDto.password);
  //   }

  @Post('signUp')
  async signUp(@Body() signUpDto: UserSignUpDto) {
    this.userService.validateIsEmailUnique(signUpDto.email);
    return this.authService.signUp(signUpDto.email, signUpDto.password);
  }
}
