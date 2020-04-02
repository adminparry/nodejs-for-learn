# express实例方法

## Router

路由中间件


``` javascript
const express = require('express');
const app = express();
const router = express.Router();

router.use(function (req, res, next) {
  console.log('%s %s %s', req.method, req.url, req.path)
  next()
})


router.use('/bar', (req, res, next) => {
    next();
})


app.use('/foo', router)

app.listen(3000)
```

## urlencoded

解析报文

application/x-www-form-urlencoded

application/json

``` javascript
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(3000)
```

## static

设置静态资源路径

``` javascript
const express = require('express');
const app = express();
app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000)
```