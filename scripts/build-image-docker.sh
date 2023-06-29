docker build -t api-gateway-service -f ./apps/api-gateway/Dockerfile --target production  .
docker build -t auths-service -f ./apps/auths/Dockerfile --target production  .
docker build -t users-service -f ./apps/users/Dockerfile --target production  .