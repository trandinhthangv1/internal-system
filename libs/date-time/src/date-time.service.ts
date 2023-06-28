import { Injectable } from '@nestjs/common';

@Injectable()
export class DateTimeService {
  getCurrentDay() {
    return new Date();
  }
}
