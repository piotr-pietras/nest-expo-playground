import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async validateIsEmailUnique(email: string) {
    const user = await this.prisma.user.count({
      where: { email: { equals: email } },
    });
    if (!!user) {
      throw new BadRequestException('Email is already in use');
    }
  }

  async getUser(userId: string) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...user } = await this.prisma.user.findFirstOrThrow({
        where: { id: { equals: userId } },
      });
      return user;
    } catch (error) {
      throw new HttpException(
        'Internal error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        { cause: error },
      );
    }
  }
}
