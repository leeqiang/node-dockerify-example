NodeJS Dockerify Example
=========================

## 前提
安装 [node-dockerify-cli](https://github.com/leeqiang/node-dockerify-cli)

```
npm i -g node-dockerify-cli
```

## 初始化 / 打包 / 发布镜像
```
ndc init -a example -m "example <example@example.com>" -p 30194

// 打包
ndc b -a example

// 发布到开发环境 registry 及部署到开发环境的 k8s
ndc d -a example -e dev

// 发布到生产环境 registry
ndc d -a example -e prod
```
