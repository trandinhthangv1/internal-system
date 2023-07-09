import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { AuthsModule } from './auths/auths.module';

@Module({
  imports: [
    ClientsModule.register({
      clients: [
        {
          name: 'AUTH_SERVICE',
          transport: Transport.NATS,
          options: {
            servers: ['nats://localhost:4222'],
            // servers: ['nats://auths-service:4222'],
            // servers: ['nats://3.80.152.125:4222'],
          },
        },
        {
          name: 'USER_SERVICE',
          transport: Transport.NATS,
          options: {
            servers: ['nats://localhost:4222'],
            // servers: ['nats://users-service:4222'],
            // servers: ['nats://3.91.232.167:4222'],
          },
        },
      ],
      isGlobal: true,
    }),
    AuthsModule,
  ],
  controllers: [],
  providers: [],
})
export class ApiGatewayModule {}
