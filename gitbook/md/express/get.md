# express

## 安装

``` bash
npm install express --save
```
## get

``` javascript
var express = require("express");

var app = express();

app.get("/", function(req, res){
    res.send("express");
})

var server = app.listen(8081, function(){
    const { port, host } = server.address();
    console.log("http://%s:%s",host, port);
})

```
## post
``` javascript
var express = require("express");

var app = express();

app.post("/", function(req, res){
    res.send("express");
})

var server = app.listen(8081, function(){
    const { port, host } = server.address();
    console.log("http://%s:%s",host, port);
})

```
## put
``` javascript
var express = require("express");

var app = express();

app.put("/", function(req, res){
    res.send("express");
})

var server = app.listen(8081, function(){
    const { port, host } = server.address();
    console.log("http://%s:%s",host, port);
})

```
## delete

``` javascript
var express = require("express");

var app = express();

app.delete("/", function(req, res){
    res.send("express");
})

var server = app.listen(8081, function(){
    const { port, host } = server.address();
    console.log("http://%s:%s",host, port);
})

```

## param

``` javascript

app.param(['id', 'page'], function (req, res, next, value) {
  console.log('CALLED ONLY ONCE with', value)
  next()
})

app.get('/user/:id/:page', function (req, res, next) {
  console.log('although this matches')
  next()
})

app.get('/user/:id/:page', function (req, res) {
  console.log('and this matches too')
  res.end()
})

// CALLED ONLY ONCE with 42
// CALLED ONLY ONCE with 3
// although this matches
// and this matches too
```
