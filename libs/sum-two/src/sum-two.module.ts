import { Module } from '@nestjs/common';
import { SumTwoService } from './sum-two.service';

@Module({
  providers: [SumTwoService],
  exports: [SumTwoService],
})
export class SumTwoModule {}
