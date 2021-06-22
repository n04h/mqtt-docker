FROM node:16.3.0-alpine

WORKDIR /app

COPY ./client ./
RUN npm i

ENTRYPOINT node index
