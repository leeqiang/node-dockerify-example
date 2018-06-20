server/schemas
==============

数据模型定义, 一个模型一个文件

譬如
- user.js
- task.js
- ...

样例, user.js
```
module.exports = function (Schema) {
  return new Schema({
    name: { type: String }
  })
}
```
