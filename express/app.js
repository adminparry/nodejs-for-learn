var express = require("express");
var Sequelize = require('sequelize')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var session = require('express-session');
var path = require('path');
const favicon = require('express-favicon');
var session = require('express-session');
var SequelizeStore = require('connect-session-sequelize')(session.Store);
var sequelize = new Sequelize(
    "db1",
    "root",
    "111111", 
    {
        "dialect": "mysql",
    });
console.log(sequelize)
var myStore = new SequelizeStore({
    checkExpirationInterval: 15 * 60 * 1000, // The interval at which to cleanup expired sessions in milliseconds.
    expiration: 24 * 60 * 60 * 1000 ,
    db: sequelize
});
myStore.sync();
// var MySQLStore = require('express-mysql-session')(session);
// var options = {
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: '111111',
//     database: 'db'
// };
// var sessionStore = new MySQLStore(options);

var app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(cookieParser());
app.use(favicon(path.join(__dirname, '/public/favicon.ico')));
app.use(session({
    secret: 'keyboard cat',
    store: myStore,
    resave: false, // we support the touch method so per the express-session docs this should be set to false
    proxy: true, // if you do SSL outside of node.
    cookie : {
        maxAge : 1000 * 60 * 3, // 设置 session 的有效时间，单位毫秒
    },
}))

// app.use(session({
//   secret: 'keyboard cat',
//   store: sessionStore,
//   saveUninitialized: true,
//   resave: false, // we support the touch method so per the express-session docs this should be set to false
//   proxy: true, // if you do SSL outside of node.
//     cookie : {
//         maxAge : 1000 * 60 * 3, // 设置 session 的有效时间，单位毫秒
//     },
// }))

// sessionStore.sync();
app.get('/', function (req, res, next) {
    console.log(req.session)
    if (req.session.views) {
        req.session.views++
        res.setHeader('Content-Type', 'text/html')
        res.write('<p>views: ' + req.session.views + '</p>')
        res.write('<p>type: ' + req.session.type + '</p>')
        
        
        res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
        res.end()
    } else {
        req.session.views = 1
        req.session.type = 'json';
        res.write('<script src="/login"></script>')
        res.end('welcome to the session demo. refresh!')
    }
})
app.get("/login", function (req, res) {
    res.render("login", { msg: null })
})
app.get('/logout', function (req, res) {
    req.session.destroy();
    res.redirect("login");
})
app.post("/login", function (req, res) {

    const { username, password } = req.body;

    if (username == 'root' && password == '123') {

        req.session.username = username;


        res.redirect('/home');


    } else {
        res.render('login', { msg: '用户名密码错误' });
    }

})


app.get("*", function (req, res, next) {
    const { username } = req.session;
    console.log(username, "=====================", req.method, req.url);
    if (username) {
        // 如果有user放行
        next();
    } else {
        // 如果没有重定向到登录
        res.redirect('login');
    }

})

app.get("/home", function (req, res) {
    const { username } = req.session;
    res.render('home', { username })
})


app.use('/public', express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').__express);


var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("http://%s:%s", host, port);
})