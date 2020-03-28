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
const connection_1 = require("./connection");
const Person_1 = require("./model/Person");
const datasource = connection_1.datasourceFactory();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const selectById = yield Person_1.Person.findAll();
        console.log(JSON.stringify(selectById));
    });
}
main();
//# sourceMappingURL=main.js.map