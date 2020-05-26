"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTodoDoneList = exports.doneList = exports.todoList = void 0;
var db_todo_1 = __importDefault(require("../database/db_todo"));
var todoList;
exports.todoList = todoList;
var doneList;
exports.doneList = doneList;
function getTodoDoneList(response, bodyData) {
    if (bodyData.listType == 'todo') {
        var newData = {
            dbTable: 'todo_list',
            bodyData: bodyData,
        };
        db_todo_1.default.getDataList(newData).then(function (res) {
            exports.todoList = todoList = res;
            response.writeHead(200, {
                'Content-Type': 'text/html; charset=utf-8',
                'Access-Control-Allow-Origin': '*',
            });
            response.end(JSON.stringify(todoList));
        });
    }
    else if (bodyData.listType == 'done') {
        var newData = {
            dbTable: 'done_list',
            bodyData: bodyData,
        };
        db_todo_1.default.getDataList(newData).then(function (res) {
            exports.doneList = doneList = res;
            response.writeHead(200, {
                'Content-Type': 'text/html; charset=utf-8',
                'Access-Control-Allow-Origin': '*',
            });
            response.end(JSON.stringify(doneList));
        });
    }
}
exports.getTodoDoneList = getTodoDoneList;
