import { JwtService } from '@nestjs/jwt';
import { UsersService } from './../../modules/user/users.service';
import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AccessToken } from './types/access-token';
import { SignUpDto } from './dto/sign-up.dto';
import { UserDto } from './dto/user.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async authenticate(email: string, password: string): Promise<AccessToken> {
    const user = await this.userService.findByEmail(email);

    if (!user) {
      throw new BadRequestException("User doesn't exist");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new BadRequestException('Invalid credentials');
    }

    const payload = {
      sub: user.id,
      username: user.username,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
      userId: user.id,
      username: user.username,
    };
  }

  async login(user: UserDto): Promise<AccessToken> {
    const payload = { email: user.email, id: user.id };
    return {
      access_token: await this.jwtService.signAsync(payload),
      userId: user.id,
      username: user.username,
    };
  }

  async register(user: SignUpDto): Promise<AccessToken> {
    const existingUser = await this.userService.findByEmail(user.email);

    if (existingUser) {
      throw new BadRequestException('user already exists');
    }

    const hashedPassword = await bcrypt.hash(user.password, 10);
    const newUser = { ...user, password: hashedPassword };
    await this.userService.create(newUser);
    return this.login(newUser);
  }
}
