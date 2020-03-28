# record
``` bash
mkdir sequelize-example
cd sequelize-example
npm init -y
npm install --save-dev typescript nodemon wait-on concurrently 
npm install --save @types/sequelize
npm install --save sequelize sequelize-typescript  reflect-metadata  mysql2
# vi package.json for add script
npm run tsc:init

touch nodemon.json tsconfig.build.json
# vi nodemon.json tsconfig.build.json for config command params
# vi tsconfig.json for config could be

npm run start


```
