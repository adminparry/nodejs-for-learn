# request

## query

``` javascript
// GET /search?q=tobi+ferret
console.dir(req.query.q)
```

## body

``` javascript
var express = require('express')

var app = express()

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post('/profile', function (req, res, next) {
  console.log(req.body)
  res.json(req.body)
})
```

## cookies

``` javascript
// Cookie: name=tj
console.dir(req.cookies.name)
// => 'tj'
```