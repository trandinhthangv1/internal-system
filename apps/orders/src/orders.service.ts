import { Injectable } from '@nestjs/common';
import { DateTimeService } from '@libs/date-time';

@Injectable()
export class OrdersService {
  getHello(): string {
    console.log(DateTimeService);
    return 'Hello World!';
  }
}
