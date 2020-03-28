# Nestjs

nodejs web mvc framework

一个代码风格类似java web spring的nodejs版本

### new project
``` bash
npm install -g @nestjs@cli
nest new project
```

### Model-View-Controller
``` bash
npm install --save hbs
```

import NestExpressApplication

useStaticAssets

setBaseViewsDir

setViewEngine

``` typescript
import { NestExpressApplication } from '@nestjs/platform-express';
```

https://docs.nestjs.com/techniques/mvc

### Orm
#### Sequelize
``` bash
npm install --save sequelize sequelize-typescript pg pg-hstore
npm install --save-dev @types/sequelize
nest g module databases 
cd src
nest g provider database-providers databases

```
create database provider


https://www.npmjs.com/package/sequelize

https://docs.nestjs.com/recipes/sql-sequelize

### example

https://github.com/nestjs/nest/tree/master/sample

##### 参考来源

https://docs.nestjs.com/

https://exlley.gitbooks.io/nest-js/content/
