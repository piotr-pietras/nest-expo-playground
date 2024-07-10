import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { AuthModule } from 'src/auth/auth.modules';
@Module({
  controllers: [UserController],
  providers: [PrismaService, UserService],
  imports: [AuthModule],
})
export class UserModule {}
