import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Headers,
} from '@nestjs/common';
import { PostAddDto } from './dto/post-add.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { PostService } from './post.service';

@UseGuards(AuthGuard)
@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  async get() {
    return await this.postService.getAll();
  }

  @Post('add')
  async add(@Body() body: PostAddDto, @Headers('user-id') userId: string) {
    return await this.postService.addOne(body, userId);
  }
}
