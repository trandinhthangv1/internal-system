import { Injectable } from '@nestjs/common';
import { DateTimeService } from '@libs/date-time';

@Injectable()
export class AuthsService {
  constructor(private readonly dateTimeService: DateTimeService) {}

  async createJwtToken(username: string): Promise<string> {
    return `Token-${username} ${this.dateTimeService.getCurrentDay()}`;
  }
}
