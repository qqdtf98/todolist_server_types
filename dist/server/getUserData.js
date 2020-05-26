"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var db_user_1 = __importDefault(require("../database/db_user"));
function getUserData(response, parsedQuery) {
    db_user_1.default.getUserAccount(parsedQuery).then(function (res) {
        if (res.length === 0) {
            // 회원가입
            db_user_1.default.createUserAccount(parsedQuery).then(function (res) {
                console.log(res);
                var list = {
                    userData: JSON.stringify(res[0]),
                };
                db_user_1.default.getUserAccount(list).then(function (res) {
                    response.writeHead(200, {
                        'Content-Type': 'text/html; charset=utf-8',
                        'Access-Control-Allow-Origin': '*',
                    });
                    response.end(JSON.stringify(res));
                });
            });
        }
        else {
            response.writeHead(200, {
                'Content-Type': 'text/html; charset=utf-8',
                'Access-Control-Allow-Origin': '*',
            });
            response.end(JSON.stringify(res));
        }
    });
}
exports.default = getUserData;
