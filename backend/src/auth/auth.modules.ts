import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [AuthService, PrismaService, AuthGuard],
  exports: [AuthService, AuthGuard, JwtModule],
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      // TODO set correct expiretion
      signOptions: { expiresIn: '99999999s' },
    }),
  ],
})
export class AuthModule {}
