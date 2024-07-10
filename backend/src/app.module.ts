import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.modules';
import { PostModule } from './post/post.modules';

@Module({
  imports: [UserModule, PostModule, ConfigModule.forRoot({ isGlobal: true })],
})
export class AppModule {}
