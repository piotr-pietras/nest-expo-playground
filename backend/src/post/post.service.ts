import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { PostAddDto } from './dto/post-add.dto';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    try {
      const posts = await this.prisma.post.findMany();
      return posts;
    } catch (error) {
      throw new HttpException(
        'Internal error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        { cause: error },
      );
    }
  }

  async addOne(post: PostAddDto, userId: string) {
    try {
      const postSaved = await this.prisma.post.create({
        data: { ...post, author: userId },
      });
      return postSaved;
    } catch (error) {
      throw new HttpException(
        'Internal error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        { cause: error },
      );
    }
  }
}
