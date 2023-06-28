import { Module } from '@nestjs/common';
import { AuthsController } from './auths.controller';
import { AuthsService } from './auths.service';
import { DateTimeModule } from '@libs/date-time';

@Module({
  imports: [DateTimeModule],
  controllers: [AuthsController],
  providers: [AuthsService],
})
export class AuthsModule {}
