# npm

npm 是nodejs的包管理工具 正如其他语言一样也有对应的包管理工具 比如python的pip

安装nodejs环境之后就会拥有该命令

查看版本

``` bash
npm -version
```

初始化一个javascript工程 
``` bash
npm init
```
默认会创建一个package.json文件 对应工程的描述清单

安装或移除一个模块
``` bash
npm install ? --save or --save-dev
npm uninstall ? --save or --save-dev
```
查看模块的所有版本和安装指定版本模块
``` bash
npm view ? versions
npm install ?@version
```

模块的指定安装和全局安装
``` bash
npm install -g or none
```
全局安装会使你本机的环境变量中加入


# nrm
npm是通过中央仓库中取获取资源在不同的地区可能存在网络问题 
比如中国地区有名气的阿里镜像cnpm 
当然还有别的镜像地址
安装nrm可以方便切换镜像地址

``` bash
npm install -g nrm

nrm ls
	npm ---- https://registry.npmjs.org/
	cnpm --- http://r.cnpmjs.org/
	taobao - https://registry.npm.taobao.org/
	nj ----- https://registry.nodejitsu.com/
	npmMirror  https://skimdb.npmjs.com/registry/
	edunpm - http://registry.enpmjs.org/ 
nrm use taobao

```


