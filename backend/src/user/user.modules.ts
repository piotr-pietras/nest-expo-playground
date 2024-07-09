import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { AuthService } from '../auth/auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [UserController],
  providers: [PrismaService, UserService, AuthService],
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      // TODO set correct expiretion
      signOptions: { expiresIn: '99999999s' },
    }),
  ],
})
export class UserModule {}
