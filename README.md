NodeJS Dockerify Example
=========================

## 前提
安装 [node-dockerify-cli](https://github.com/leeqiang/node-dockerify-cli)

```
npm i -g node-dockerify-cli
```

## 初始化 / 打包 / 发布镜像
```
// -p 指定端口，根据实际情况进行指定
ndc init -a example -m "example <example@example.com>" -p 30194

// 打包
ndc b -a example

// 发布镜像到开发环境 registry(别忘记指定环境变量)
ndc p -a example -e dev

// 发布镜像到生产环境 registry(别忘记指定环境变量)
ndc p -a example -e prod

// 部署到开发环境的 k8s
ndc d -a example
```
