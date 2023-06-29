# Build NestJS + Microservice

## Setup

### Docker

_NOTE:_

- _If same host (server), container cannot request to container if not same network_
- _In microservice, need provide host for each service. Ex: `https://service-1.com` if server/cloud or name of container `service-1` if docker_

1. Build image

```bash
sh scripts/build-image-docker.sh
```

2. Create network

```bash
docker network create internal-system
```

3. Start services as containers

```bash

docker run -p 3001:3001 --network internal-system --name api-gateway-service api-gateway-service
docker run -p 3002:3002 --network internal-system --name auths-service auths-service
docker run -p 3003:3003 --network internal-system --name users-service users-service
```

## Technologies

| Tech          |
| ------------- |
| NestJS        |
| MongoDB       |
| Microservice  |
| Docker        |
| Github Action |
| AWS           |
