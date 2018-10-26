var stream = require('stream');
var http = require('http');
var fs = require('fs');
var path = require('path');
var util = require('util');

function MakeReadStream(chunk){
	stream.Readable.call(this);
	this.chunk = chunk;
}
util.inherits(MakeReadStream,stream.Readable);

MakeReadStream.prototype._read = function(){
	this.push(new Buffer(this.chunk,'binary'));
	this.push(null);
}

const options = {
  hostname: 'www.zhinengshe.com',
  port: 80,
  path: '/works/3525/img/1.jpg',
  method: 'GET',
  headers: {
    'Content-Type': 'image/jpeg',
    // 'Content-Length': 0
  }
};
const dir = './images';
const namespace = {
	length:77
}

for (let i = 0; i < namespace.length; i++) {
		options.path = `/works/3525/img/${i}.jpg`;
	
		requestGetAsync(options).then(chunk=>{
			 // console.log(`响应主体: ${chunk}`);
			 // writeFileAsync(path.resolve(__dirname,'images/'+i+'.jpg'),chunk);
			
			 new MakeReadStream(chunk).pipe(fs.createWriteStream('images/'+i+'.jpg',{encoding:'binary'}));
			 
		}).catch(e=>{
			console.log(e.message)
		});
};

function writeFileAsync(file,data,options,callback){
	fs.mkdir('images', 0777, function(err){
		 fs.writeFile(file, data, "binary",(err) => {
		  if (err) throw err;
		  console.log('The file has been saved!');
		});
	})
	
}

function requestGetAsync(options){
	return new Promise((resolve,reject)=>{
		const req = http.request(options, (res) => {

		  console.log(`状态码: ${res.statusCode}`);
		  console.log(`响应头: ${JSON.stringify(res.headers)}`);
		  // res.setEncoding('utf8');
		  res.setEncoding("binary"); 
		  var imgData = "";
		  res.on('data', (chunk) => {
		    imgData += chunk;
		    // resolve(chunk)
		    
		  });
		  res.on('end', (e) => {
		    console.log('响应中已无数据。');
		    resolve(imgData)
		  });
		});

		req.on('error', (e) => {
		  console.error(`请求遇到问题: ${e.message}`);
		  reject(e);
		});

		// 写入数据到请求主体
		// req.write(postData);
		req.end();
	})
	
	
}