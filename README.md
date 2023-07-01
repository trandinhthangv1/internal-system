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

### Deploy Stage 1 (Fake to test)

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

### Deploy Stage 2 (Fake to test service per EC2 instance)

- Create three EC2 instance to deploy service: Api gateway, auth, user

## NOTE

- **In source code level, add `host` is IP (using IP not http://ip) in  `ClientsModule.register` in `api-gateway`**


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
