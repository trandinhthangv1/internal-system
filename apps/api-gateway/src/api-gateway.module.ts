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
          options: { host: 'auths-service', port: 3002 },
        },
        {
          name: 'USER_SERVICE',
          transport: Transport.TCP,
          options: { host: 'users-service', port: 3003 },
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
