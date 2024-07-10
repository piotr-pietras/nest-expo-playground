import { IsNotEmpty, MinLength } from 'class-validator';

export class PostAddDto {
  @IsNotEmpty()
  @MinLength(6)
  title: string;

  @IsNotEmpty()
  body: string;
}
