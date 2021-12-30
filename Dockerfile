FROM node:10.19.0-alpine
WORKDIR /core
ENV PATH="/core/node_modules/.bin:$PATH"

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . ./
