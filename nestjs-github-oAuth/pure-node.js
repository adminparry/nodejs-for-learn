var http = require('http')
var https = require('https');

http.createServer((request, response) => {
	// const req = https.request({
 //      hostname: 'github.com',
 //      path: '/login/oauth/authorize?client_id=51d05a17a35f58a98933',
 //      port: 443,
 //      method: 'GET',
 //    }, (res) => {
 //      res.pipe(response);
     

 //    });
 //    req.end();
 const info = https.request({
    hostname: 'www.baidu.com',
    method: 'GET',
    path: `/user?access_token=7bd951a01128ab8ddecb5182c2b99680d005e203`,
    headers: {
        // accept: 'application/json',
        // Authorization: `token ${accessToken}`,
    },
}, res => {
    let rawData = '';
    res.on('data', (chunk) => { 
        rawData += chunk; });
    res.on('end', () => {
        console.log(rawData, '==============getInfo=============');
       
        response.end(rawData)
    });
});
info.end();

//  response.writeHead(302,{
//             'Location': 'https://github.com/login/oauth/authorize?client_id=51d05a17a35f58a98933'
//         })
        
//         response.end();
   // response.end('sadf')
    
}).listen(8089)