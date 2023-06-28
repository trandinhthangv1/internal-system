import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

import { AuthsService } from './auths.service';

@Controller('auths')
export class AuthsController {
  constructor(private readonly authsService: AuthsService) {}

  @Post('/login')
  async login(
    @Body() body: { username: string; password: string },
    @Res() res: Response,
  ) {
    const { username, password } = body;
    const token = await this.authsService.login(username, password);

    if (token) {
      return res
        .status(HttpStatus.OK)
        .json({ message: 'Login Success', data: { token } });
    }

    return res.status(HttpStatus.UNAUTHORIZED).json({
      message: 'Username or password not found',
      data: null,
    });
  }
}
