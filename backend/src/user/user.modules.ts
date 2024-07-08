import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { AuthService } from './auth.service';

@Module({
  controllers: [UserController],
  providers: [PrismaService, UserService, AuthService],
  imports: [],
})
export class UserModule {}
