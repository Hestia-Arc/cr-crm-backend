import { Controller, Get } from '@nestjs/common';

@Controller('users')
// @UseGuards(AuthGuard)
export class UserController {
  @Get('me')
  getProfile() {
    return 'me';
  }
}
