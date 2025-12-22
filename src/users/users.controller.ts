import {
  Body,
  Controller,
  Get,
  Headers,
  Ip,
  Param,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/:id')
  public getUsers(@Param('id') id: string, @Query('name') name: string) {
    console.log(id);
    console.log(name);

    return 'response from the get users endpoint';
  }

  @Post()
  public createUser(@Body() body: any, @Headers() headers: any, @Ip() ip: any) {
    console.log(ip);
    return 'response from the post user endpoint';
  }
}
