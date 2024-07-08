import { BadRequestException, Injectable } from '@nestjs/common';
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
    return true;
  }
}
