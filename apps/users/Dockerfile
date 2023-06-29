FROM node:20 AS development

WORKDIR /usr/internal-system

COPY package*.json .

RUN npm i

COPY . .

RUN npm run build:users

FROM node:20-alpine AS production

WORKDIR /usr/internal-system

COPY package*.json .

RUN npm i --omit=dev

COPY . .

COPY --from=development /usr/internal-system/dist ./dist

CMD ["npm", "run", "start:prod:users"]
