import { AuthService } from './auth.service';
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  reister() {
    return 'register route';
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() SignInDto: Record<string, string>) {
    return this.authService.authenticate(
      SignInDto.username,
      SignInDto.password,
    );
  }
}
