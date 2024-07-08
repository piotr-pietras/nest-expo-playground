import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.modules';

@Module({
  imports: [UserModule, ConfigModule.forRoot()],
})
export class AppModule {}
