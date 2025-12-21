import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/:id')
  public getUsers(@Param() params: any, @Query() query: any) {
    console.log(query);

    return 'response from the get users endpoint';
  }

  @Post()
  public createUser(@Body() body: any) {
    console.log(body);
    return 'response from the post user endpoint';
  }
}
