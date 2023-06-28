import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AuthsModule } from './auths.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AuthsModule,
    {
      transport: Transport.TCP,
      options: {
        port: 3001,
        retryAttempts: 5,
        retryDelay: 3000,
      },
    },
  );
  await app.listen();
}
bootstrap();
