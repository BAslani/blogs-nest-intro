import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('/:userId')
  public getUserPosts(@Param('userId') userId: string) {
    return this.postsService.findUserPosts(userId);
  }
}
