import {
  Body,
  Controller,
  Post,
  Get,
  UseGuards,
  Headers,
} from '@nestjs/common';
import { UserSignUpDto } from './dto/user-signUp.dto';
import { AuthService } from '../auth/auth.service';
import { UserService } from './user.service';
import { AuthGuard } from '../auth/auth.guard';
import { UserSignInDto } from './dto/user-signIn.dto';

@Controller('user')
export class UserController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @UseGuards(AuthGuard)
  @Get('')
  async user(@Headers('user-id') userId: string) {
    return await this.userService.getUser(userId);
  }

  @Post('signUp')
  async signUp(@Body() signUpDto: UserSignUpDto) {
    await this.userService.validateIsEmailUnique(signUpDto.email);
    return await this.authService.signUp(signUpDto.email, signUpDto.password);
  }

  @Post('signIn')
  async signIn(@Body() signInDto: UserSignInDto) {
    return await this.authService.signIn(signInDto.email, signInDto.password);
  }
}
