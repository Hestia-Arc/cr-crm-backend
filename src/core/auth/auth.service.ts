import { JwtService } from '@nestjs/jwt';
import { User, UsersService } from './../../modules/user/users.service';
import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async authenticate(
    username: string,
    password: string,
  ): Promise<{ access_token: string; userId: number; username: string }> {
    const user = await this.userService.findByUsername(username);

    if (user?.password !== password) {
      throw new UnauthorizedException();
    }

    const payload = {
      sub: user.userId,
      username: user.username,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
      userId: user.userId,
      username: user.username,
    };
  }

  async register(user: User): Promise<'yea'> {
    const existingUser = await this.userService.findByUsername();

    if (existingUser) {
      throw new BadRequestException('user already exists');
    }

    const hashPassword = await bcrypt.hash(user.password, 10);
    const newUser: User = { ...user, password: hashedPassword };
    await this.usersService.create(newUser);
    return this.login(newUser);
  }

  login() {
    return 'create';
  }
}
