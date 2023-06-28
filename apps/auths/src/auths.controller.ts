import { Controller } from '@nestjs/common';
import { AuthsService } from './auths.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AuthsController {
  constructor(private readonly authsService: AuthsService) {}

  @MessagePattern('auth.createJwtToken')
  async createJwtToken(data: { username: string }): Promise<string> {
    return this.authsService.createJwtToken(data.username);
  }
}
