FROM node:10

WORKDIR /app

RUN yarn global add serve

COPY build /app

CMD serve -s app -l 80

EXPOSE 80