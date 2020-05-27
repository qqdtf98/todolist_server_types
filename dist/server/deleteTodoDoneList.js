"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodoDoneList = void 0;
var db_todo_1 = __importDefault(require("../database/db_todo"));
function deleteTodoDoneList(response, bodyData) {
    if (bodyData.listType == 'todo') {
        var queryData = {
            table: 'todo_list',
            index: bodyData.index,
            type: bodyData.listType,
            userId: bodyData.userId,
        };
        db_todo_1.default.deleteList(queryData).then(function (res) {
            var todoList = res;
            response.writeHead(200, {
                'Content-Type': 'text/html; charset=utf-8',
                'Access-Control-Allow-Origin': '*',
            });
            response.end(JSON.stringify(todoList));
        });
    }
    else if (bodyData.listType == 'done') {
        var queryData = {
            table: 'done_list',
            index: bodyData.index,
            type: bodyData.listType,
            userId: bodyData.userId,
        };
        db_todo_1.default.deleteList(queryData).then(function (res) {
            var doneList = res;
            response.writeHead(200, {
                'Content-Type': 'text/html; charset=utf-8',
                'Access-Control-Allow-Origin': '*',
            });
            response.end(JSON.stringify(doneList));
        });
    }
}
exports.deleteTodoDoneList = deleteTodoDoneList;
