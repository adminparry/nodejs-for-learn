# koa

koa 是由 Express 原班人马打造的

主要的目的是免除重复繁琐的回调函数嵌套

## 安装

``` bash
nvm install 7
npm i koa
```

## demo

``` javascript
const Koa = require('koa');

const app = new Koa();

app.use (async ctx => {
    ctx.body = 'hello world';
})

app.listen(3000);

```

