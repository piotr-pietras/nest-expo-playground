import {
  Body,
  Controller,
  Post,
  Get,
  UseGuards,
  Headers,
} from '@nestjs/common';
import { UserSignUpDto } from './dto/user-signUp.dto';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { AuthGuard } from './auth.guard';

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
    return this.authService.signUp(signUpDto.email, signUpDto.password);
  }
}
