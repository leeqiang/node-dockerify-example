NodeJS Dockerify Example
=========================

## 前提
- docker 版本 7.0.15以上

## Dockerfile参考说明
- 首先选取合适的alpine镜像，这里选取的是按照了node8的alpine镜像
- 将对应的package.json放入第一层中进行pre build系列操作
- 在第二层容器中将第一层安装的以来放入，并定义启动方式

```
#第一层容器用作prebuild
FROM mhart/alpine-node:8 as builder
LABEL maintainer="example <example@example.com>"

WORKDIR /app

#将package.json放入第一层容器中
COPY ./package-lock.json /app
COPY ./package.json /app
#进行依赖安装
RUN yarn install

#第二层容器，作为真实运行应用的容器
FROM mhart/alpine-node:8
LABEL maintainer="example <example@example.com>"

WORKDIR /app

#在第二层stage中将第一层stage中安装的依赖复制进来，
COPY --from=builder /app/node_modules /app/node_modules

#将当前文件夹的文件复制进/app
COPY . /app

EXPOSE 3000
CMD [ "npm", "start" ]
```

## docker-compose.yml参考说明

- 假设服务名为tbexample
- 镜像指定为Dockerfile生成的镜像
- 将容器内的3000端口映射到本机13000端口
- 将环境变量传递给容器内部（通过该方式进行配置文件传递），注意此处进行最小化处理，无需变动配置不应出现在这。
```
 version: '2'
 services:
  tbexample:
    image: 'docker-registry.example.com/example/tbexample:latest'
    network_mode: host
    restart: always
    ports:
      - '13000:3000'
    environment:
      CLIENT_ID: 'i am a client_id'
      CLIENT_SECRET: 'i am a client_secret'
      MONGO_URL: 'mongodb://user:password@127.0.0.1/databasename?authSource=admin'
      API_URL: 'https://www.google.com'
```



## 全过程示例
```
// 假设项目名是tbexample
// docker registry是docker-registry.example.com
// team为example
// tag是latest
// 开始构建镜像
 docker build -t docker-registry.example.com/example/tbexample:latest .

// docker-compose启动查看效果
docker-compose up -d
docker-compose logs -f --tail 100
```
