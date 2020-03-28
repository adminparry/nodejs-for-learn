# npm私服搭建

nexus 可以简单快速的搭建私服

## installed

jdk >= 1.8

nexus

mac(nexus) : https://pan.baidu.com/s/1LjwzEax71H6emkUL3uZRcw

## environment

配置环境变量 例如mac

``` bash
tar -xzvf nexus.tar.gz

mv nexus /usr/local/opt/

echo 'export PATH="/usr/local/nexus/nexus/bin:$PATH"' >> ~/.bash_profile

source ~/.bash_profile

nexus run
```

## step

打开http://localhost:8081

登录

用户名： admin
密码：admin123

出现设置图标

在blob stores中创建一个仓库

https://www.cnblogs.com/tuituji27/p/11171780.html