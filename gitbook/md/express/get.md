# express

##### get

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

