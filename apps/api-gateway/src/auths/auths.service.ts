import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthsService {
  constructor(
    @Inject('USER_SERVICE') private readonly userClient: ClientProxy,
    @Inject('AUTH_SERVICE') private readonly authClient: ClientProxy,
  ) {}

  async login(username: string, password: string): Promise<string | undefined> {
    const isVerify = await firstValueFrom(
      this.userClient.send<boolean>('user.verify', { username, password }),
    );

    if (isVerify) {
      const token = await firstValueFrom(
        this.authClient.send<string>('auth.createJwtToken', { username }),
      );

      return token;
    }
  }
}
