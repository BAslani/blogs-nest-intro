import {
  Body,
  Controller,
  Get,
  Headers,
  Ip,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/{:id}')
  public getUsers(
    @Param('id', ParseIntPipe) id: number | undefined,
    @Query('limit') limit: any,
  ) {
    console.log(typeof id);
    console.log(id);
    console.log(limit);

    return 'response from the get users endpoint';
  }

  @Post()
  public createUser(@Body() body: any, @Headers() headers: any, @Ip() ip: any) {
    console.log(ip);
    return 'response from the post user endpoint';
  }
}
