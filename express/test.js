var EventEmitter = require('events').EventEmitter;
var http = require("http");
var methods = require("methods");
var mixin = require('merge-descriptors');
var setPrototypeOf = require('setprototypeof');


var proto = {
    handle:function(req,res,next){
       var self = this;
       console.log(self,":stack");

       res.end("haha")
    },
    listen:function(){
        console.log(this.toString());
        var server = http.createServer(this)
        return server.listen.apply(server,arguments);
    }
};

function Application(req, res){
    var app = function app(req, res, next){
        app.handle.apply(this,arguments);
    }
    mixin(app,EventEmitter.prototype, false);
    mixin(app, proto, false);

    

    return app;
}



var slice = Array.prototype.slice;
function Layer(path, options, fn) {
    if (!(this instanceof Layer)) {
      return new Layer(path, options, fn);
    }
  
    var opts = options || {};
  
    this.handle = fn;
    this.name = fn.name || '<anonymous>';
    this.params = undefined;
    this.path = undefined;
    // this.regexp = pathRegexp(path, this.keys = [], opts);
  
    // // set fast path flags
    // this.regexp.fast_star = path === '*'
    // this.regexp.fast_slash = path === '/' && opts.end === false
  }
  
function Router(path){
    function router(){
        router.handle(arguments);
    }
    router.stack = [];
    setPrototypeOf(router, proto);

    return router;
}
function Route(path){
    this.path = path;
    this.stack = [];
    this.methods = {};
}
proto.route = function(path){
    var route = new Route(path);

    return route;
}

proto.lazyrouter = function(){
    if(!this._route){
        this._route = new Router({

        })
    }

}
methods.forEach(function(method){
    Route.prototype[method] = function(){

        var handle = arguments[0];
        var layer = Layer("/",{},handle);
        layer.method = method;
        this.methods[method] = true;
        this.stack.push(layer)

        return this;
    }
    proto[method] = function(path){
        this.lazyrouter();

        var route = this._route.route(path);

        route[method].apply(route, slice.call(arguments, 1));
        return this;
    }
})

var app = Application();
app.get("/", function(req, res){
    res.end("helloworld")
})

var server = app.listen(8002, function(){
    console.log(server.address())
})