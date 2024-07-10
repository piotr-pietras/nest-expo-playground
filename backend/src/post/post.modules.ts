import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PrismaService } from '../prisma.service';
import { PostService } from './post.service';
import { AuthModule } from 'src/auth/auth.modules';

@Module({
  controllers: [PostController],
  providers: [PrismaService, PostService],
  imports: [AuthModule],
})
export class PostModule {}
