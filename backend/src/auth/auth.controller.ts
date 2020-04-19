import { Controller, Get, Req, UseGuards, Res } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  @UseGuards(AuthGuard('facebook-token'))
  @Get('facebook')
  async getTokenFacebook(@Req() { user = {} }, @Res() res) {
    return res.json(user);
  }

  @Get('refresh-token')
  async refershToken() {

  }
}

