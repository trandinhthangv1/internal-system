import { Injectable } from '@nestjs/common';

@Injectable()
export class SumTwoService {
  sumTwo(a: number, b: number) {
    return a + b;
  }
}
