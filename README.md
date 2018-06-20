Koa1 事例
========

Teambition 建议的 Nodejs 项目的「目录结构」及「第三方库」使用建议.

(`当前以koa1为例`)

## 启动
```
yarn install
npm start // 或 npm run dev
```

- [Swagger 文档](https://petstore.swagger.io/?url=http://localhost:3000/doc)
- [Version 接口](http://localhost:3000/version)

## 目录结构
- config
  - [services](./config/services/README.md)
  - app.js
  - index.js
- [scripts](./config/scripts/README.md)
- server
  - [apis](./server/apis/README.md)
  - [blls](./server/blls/README.md)
  - [middlewares](./server/middlewares/README.md)
  - [schemas](./server/schemas/README.md)
  - [services](./server/services/README.md)
  - app.js
  - route.js
- [test](./test/README.md)

## 第三方库
- 主框架: koa@1.2.1
- 跨域: koa-cors@0.0.16
- 路由: koa-router@5.4.0
- 参数校验: ajv@latest
- 文档: swagger-jsdoc(建议以注释的形式来做)
- version接口: @tng/version
- HTTP错误: http-errors@1.6.3
- 日志: ilog
- lodash
- mongoose

测试
- mocha
- chai
- nock
- supertest
- expect
- tman

## ⚠️ 关于框架&语法糖
理论上没有什么限制，考虑到应用的场景，建议使用中小型框架。

关于语法糖, 建议使用`原生JS`或者`TypeScript`中一种。
