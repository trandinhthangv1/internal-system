import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern('user.verify')
  async verify(data: { username: string; password: string }): Promise<boolean> {
    return await this.usersService.verify(data.username, data.password);
  }
}
