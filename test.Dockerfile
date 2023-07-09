FROM node:20 AS test

WORKDIR /usr/internal-system

COPY package*.json .

RUN npm i

COPY . .

CMD ["sh", "./scripts/run-test.sh"]