import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { GetUsersParamDto } from './dtos/get-users-param.dto';

/**
 * class to handle user related operations
 */
@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  /**
   * method to fetch all users
   */
  public findAll(
    getUsersParamDto: GetUsersParamDto,
    limit: number,
    page: number,
  ) {
    console.log(getUsersParamDto);
    console.log(limit);
    console.log(page);
    const isAuth = this.authService.isAuth();
    if (!isAuth) throw new Error('Unauthorized');
    console.log(isAuth);

    return [
      {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@gmail.com',
      },
      {
        id: 2,
        name: 'Jane Doe',
        email: 'jane.doe@gmail.com',
      },
    ];
  }

  /**
   * finds a single user by id
   */
  public findOneById(id: string) {
    console.log(id);

    return {
      id: 2,
      name: 'Jane Doe',
      email: 'jane.doe@gmail.com',
    };
  }
}
