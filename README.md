# Build NestJS + Microservice

## Setup To Dev

### Docker

1. Build image

```sh
sh scripts/build-image-docker.sh
```

2. Create network

```sh
docker network create internal-system
```

3. Start services as containers

```sh
docker run -p 3001:3001 --network internal-system --name api-gateway-service api-gateway-service
docker run -p 3002:3002 --network internal-system --name auths-service auths-service
docker run -p 3003:3003 --network internal-system --name users-service users-service
```

## Setup to Prod

### Deploy Stage 1 (Create manual only one EC2 instance)

1. Create EC2 instance

2. Install Docker in EC2

- [Link install docker in ubuntu](https://docs.docker.com/engine/install/ubuntu/)
- Require: Manage Docker as a non-root user, [this link](https://docs.docker.com/engine/install/linux-postinstall/)

3. Compress source

```sh
zip -r internal-system.zip .
```

4. Copy to EC2

```sh
scp -i path/to/file ./internal-system.zip user@host:/path/to/folder
```

5. Build image

- In EC2, unzip

```sh
sudo apt install unzip && unzip internal-system.zip
```

- Build image with run

```sh
sh ./scripts/build-image-docker
```

6. Create network

```sh
docker network create internal-system
```

7.  Run container

```sh
docker run -p 3001:3001 --network internal-system --name api-gateway-service api-gateway-service
docker run -p 3002:3002 --network internal-system --name auths-service auths-service
docker run -p 3003:3003 --network internal-system --name users-service users-service
```

## NOTE

- **In image and container level, create network and assign containers to network**
- **In source code level, add `host` in `createMicroservice` for all services and `ClientsModule.register` in `api-gateway`**
- **In EC2 level, need open port 3001 in inbound (security group)**

🎉🎉🎉 **Done**

### Deploy Stage 2 (Create manual 3 services per 3 EC2 instances)

- Create three EC2 instance to deploy service: Api gateway, auth, user

## NOTE

- **In source code level, add `host` is IP (using IP not http://ip) in `ClientsModule.register` in `api-gateway`**

### Deploy Stage 3 (Setup complete in development and production)

- Create NATs ✅

  - `docker pull nats`
  - `docker run -d --name nats-main -p 4222:4222 -p 6222:6222 -p 8222:8222 nats`
  - Update microservices, example:

  ```javascript
  {
    transport: Transport.NATS,
    options: {
      servers: ['nats://localhost:4222'],
    },
  }
  ```

  - Update client, example:

  ```javascript
  {
    name: 'AUTH_SERVICE',
    transport: Transport.NATS,
    options: {
      servers: ['nats://localhost:4222'],
    },
  }
  ```

- Create MongoDB ✅

  - `docker pull mongo`
  - `docker run -p 27017:27017 --name mongo -d mongo`
  - To test: `docker exec -it mongo bash`

- Create testing (Jest) ✅
- Separate stage and create docker-compose

### Deploy Stage 4 (Integrate Github Action)

### Deploy Stage 5 (Integrate K8S)

### Deploy Stage 6 (Complete CI/CD)

- Update Github Action to auto build & deploy project

## Technologies

| Tech          |
| ------------- |
| NestJS        |
| MongoDB       |
| Microservice  |
| NATs          |
| Redis Cache   |
| JestJS        |
| Docker        |
| Github Action |
| K8S           |
| AWS           |
