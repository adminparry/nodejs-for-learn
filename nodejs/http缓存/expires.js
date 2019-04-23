const http = require('http');


function squenceRefer(obj){
	 // Note: cache should not be re-used by repeated calls to JSON.stringify.
var cache = [];
var str = JSON.stringify(obj, function(key, value) {
    if (typeof value === 'object' && value !== null) {
        if (cache.indexOf(value) !== -1) {
            // Circular reference found, discard key
            return;
        }
        // Store value in our collection
        cache.push(value);
    }
    return value;
},'\t');
cache = null; // Enable garbage collection

return str; 
}


const server = http.createServer((req, res) => {
  const ip = res.socket.remoteAddress;
  const port = res.socket.remotePort;


 
 res.writeHead(304, { 'Cache-Control': 'no-cache' });
 // console.log(squenceRefer(req));


  res.end('666');

}).listen(3000);