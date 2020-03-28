"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const Person_1 = require("./model/Person");
exports.datasourceFactory = () => __awaiter(this, void 0, void 0, function* () {
    const config = {
        dialect: 'mysql',
        database: 'db',
        host: "localhost",
        define: {
            timestamps: true,
            underscored: false,
        },
        username: 'root',
        password: '111111',
        timezone: "+08:00"
    };
    const sequelizeInstance = new sequelize_typescript_1.Sequelize(config);
    sequelizeInstance.addModels([Person_1.Person]);
    yield sequelizeInstance.sync({});
    return sequelizeInstance;
});
//# sourceMappingURL=connection.js.map