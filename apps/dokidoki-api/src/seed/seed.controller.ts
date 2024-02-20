import { Controller, Get } from '@nestjs/common';
import { User } from 'src/users/schemas';
import { UsersService } from 'src/users/users.service';

@Controller('seed')
export class SeedController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async seed(): Promise<User[]> {
    console.log('a');
    let users = [];
    for (let i = 0; i < 1000; i++) {
      users.push(
        await this.userService.create({
          email: `email${i}`,
          password: `password${i}`,
        }),
      );
    }
    return users;
  }
}
