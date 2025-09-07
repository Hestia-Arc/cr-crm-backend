import { AuthService } from './auth.service';
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body() userInfo: SignUpDto) {
    return this.authService.register(userInfo);
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() SignInDto: SignInDto) {
    return this.authService.authenticate(
      SignInDto.username,
      SignInDto.password,
    );
  }
}
