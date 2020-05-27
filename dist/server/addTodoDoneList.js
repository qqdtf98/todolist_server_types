"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTodoDoneList = void 0;
var db_todo_1 = __importDefault(require("../database/db_todo"));
var todoList;
function addTodoDoneList(response, bodyData) {
    db_todo_1.default.addList(bodyData).then(function (res) {
        todoList = res;
        response.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8',
            'Access-Control-Allow-Origin': '*',
        });
        response.end(JSON.stringify(todoList));
    });
}
exports.addTodoDoneList = addTodoDoneList;
