import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AuthsModule } from './auths.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AuthsModule,
    {
      transport: Transport.TCP,
      options: {
        host: 'auths-service',
        port: 3002,
        retryAttempts: 5,
        retryDelay: 3000,
      },
    },
  );
  await app.listen();
}
bootstrap();
