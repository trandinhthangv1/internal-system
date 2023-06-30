# Build NestJS + Microservice

## Setup To Dev

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

## Setup to Prod

### Deploy Stage 1 (Fake to test)

1. Create EC2 instance
   Notice: Setup inbound (security group) to open port 3001
2. Install Docker in EC2

- [Link install docker in ubuntu](https://docs.docker.com/engine/install/ubuntu/)
- Require: Manage Docker as a non-root user, [this link](https://docs.docker.com/engine/install/linux-postinstall/)

3. Compress source

```sh
zip -r internal-system.zip .
```

4. Copy to ec2

```sh
scp -i path/to/file ./internal-system.zip user@host:/path/to/folder
```

5. Build image
6. Create network
7. Run container
8. Done

## Technologies

| Tech          |
| ------------- |
| NestJS        |
| MongoDB       |
| Microservice  |
| NATs          |
| Docker        |
| Github Action |
| AWS           |
