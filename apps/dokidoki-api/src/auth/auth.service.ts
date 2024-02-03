import { Injectable, UnauthorizedException } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UsersService } from 'src/users/users.service';
import { compare, hash } from 'bcrypt';
import { User } from 'src/users/schemas';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(
    loginUserDto: LoginUserDto,
  ): Promise<Omit<User, 'password'>> {
    const user = await this.usersService.findOneByEmail(loginUserDto.email);
    if (!user || !(await compare(loginUserDto.password, user.password))) {
      throw new UnauthorizedException('Incorrect email or password LOL');
    }
    const { password, ...publicUserInfo } = user;
    return publicUserInfo;
  }

  async registerUser(user: RegisterUserDto): Promise<Omit<User, 'password'>> {
    const existingUser = await this.usersService.findOneByEmail(user.email);
    if (existingUser) {
      throw new UnauthorizedException('User already exists');
    }
    const registeredUser = await this.usersService.create({
      ...user,
      password: await hash(user.password, 12),
    });
    registeredUser.password = undefined; // TODO: figure out how to do this in a better way (remove password from response)
    return registeredUser;
  }

  async findById(id: string): Promise<Omit<User, 'password'>> {
    const user = await this.usersService.findOne(id);
    if (!user) {
      throw new UnauthorizedException(`User not found with id ${id}`);
    }
    const { password, ...publicUserInfo } = user;
    return publicUserInfo;
  }
}
