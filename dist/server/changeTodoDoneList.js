"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeTodoDoneList = void 0;
var db_todo_1 = __importDefault(require("../database/db_todo"));
var todoList;
function changeTodoDoneList(response, bodyData) {
    db_todo_1.default.changeList(bodyData).then(function (res) {
        var changeRes = res;
        var newList = {
            todo: changeRes.todo,
            done: changeRes.done,
        };
        response.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8',
            'Access-Control-Allow-Origin': '*',
        });
        response.end(JSON.stringify(newList));
    });
}
exports.changeTodoDoneList = changeTodoDoneList;
