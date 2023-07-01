import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { AuthsModule } from './auths/auths.module';

@Module({
  imports: [
    ClientsModule.register({
      clients: [
        {
          name: 'AUTH_SERVICE',
          transport: Transport.TCP,
          // options: { host: 'auths-service', port: 3002 },
          options: { host: '52.23.158.237', port: 3002 },
        },
        {
          name: 'USER_SERVICE',
          transport: Transport.TCP,
          // options: { host: 'users-service', port: 3003 },
          options: { host: '54.210.79.36', port: 3003 },
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
