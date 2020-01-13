FROM node:12

WORKDIR /app

COPY package.json /app

RUN npm i --production

COPY ./ /app

CMD npm start
