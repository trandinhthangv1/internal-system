import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AuthsModule } from './auths.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AuthsModule,
    {
      transport: Transport.NATS,
      options: {
        servers: ['nats://localhost:4222'],
        // servers: ['nats://auths-service:4222'],
      },
    },
  );
  await app.listen();
}
bootstrap();
