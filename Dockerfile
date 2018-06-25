#第一层image用作prebuild
FROM mhart/alpine-node:8 as builder
LABEL maintainer="example <example@example.com>"

WORKDIR /app

#将package.json放入第一层镜像中
COPY ./package-lock.json /app
COPY ./package.json /app
#进行依赖安装
RUN yarn install

#第二层镜像，作为真实运行应用的镜像
FROM mhart/alpine-node:8
LABEL maintainer="example <example@example.com>"

WORKDIR /app

#在第二层stage中将第一层stage中安装的依赖复制进来，
COPY --from=builder /app/node_modules /app/node_modules

#将当前文件夹的文件复制进/app
COPY . /app

EXPOSE 3000
CMD [ "npm", "start" ]