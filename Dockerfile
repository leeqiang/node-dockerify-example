FROM mhart/alpine-node:8 as example-builder
LABEL maintainer="liqiang <leesumiir@gmail.com>"

# RUN apt-get update && apt-get install libssl-dev -y
WORKDIR /app
COPY ./dummy/package* /app/
COPY ./dummy/yarn* /app/

RUN yarn install

FROM mhart/alpine-node:8
LABEL maintainer="liqiang <leesumiir@gmail.com>"

RUN mkdir -p /app
WORKDIR /app

COPY --from=example-builder /app/node_modules /app/node_modules
COPY . /app

EXPOSE 3000
CMD [ "npm", "start" ]
