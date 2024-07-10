import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}

  async signUp(email: string, password: string) {
    const user = await this.prisma.user.create({
      data: { email, password },
      include: { posts: { select: { id: true } } },
    });
    const payload = { sub: user.id, email: user.email };
    return { access_token: await this.jwt.signAsync(payload) };
  }

  async signIn(email: string, password: string) {
    const user = await this.prisma.user.findFirst({
      where: { email: { equals: email }, password: { equals: password } },
    });
    if (!user) {
      throw new BadRequestException('Given credantials are incorrect');
    }
    const payload = { sub: user.id, email: user.email };
    return { access_token: await this.jwt.signAsync(payload) };
  }
}
