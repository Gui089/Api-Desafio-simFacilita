FROM node:20-alpine

COPY package.json /app/

WORKDIR /app

RUN npm install

CMD [ "noide", "server.ts" ]