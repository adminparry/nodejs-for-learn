# response

## cookie

``` javascript
res.cookie('name', 'tobi', { domain: '.example.com', path: '/admin', secure: true })
```

## jsonp

``` javascript
// ?callback=foo
res.jsonp({ user: 'tobi' })
// => foo({ "user": "tobi" })

app.set('jsonp callback name', 'cb')
```

## redirect

``` javascript
res.redirect(301, 'http://example.com')
res.redirect('../login')
```

## render

``` javascript

// send the rendered view to the client
res.render('index')

// if a callback is specified, the rendered HTML string has to be sent explicitly
res.render('index', function (err, html) {
  res.send(html)
})

// pass a local variable to the view
res.render('user', { name: 'Tobi' }, function (err, html) {
  // ...
})
```