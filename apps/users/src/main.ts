import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { UsersModule } from './users.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UsersModule,
    {
      transport: Transport.TCP,
      options: {
        host: 'users-service',
        port: 3003,
        retryAttempts: 5,
        retryDelay: 3000,
      },
    },
  );
  await app.listen();
}
bootstrap();
