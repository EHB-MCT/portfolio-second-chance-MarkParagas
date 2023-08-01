FROM node:latest

WORKDIR /usr/src/app/src

COPY package*.json ../

RUN npm install

COPY . ../

EXPOSE 3000

CMD [ "node", "index.js" ]