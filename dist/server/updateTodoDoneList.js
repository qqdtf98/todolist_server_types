"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodoDoneList = void 0;
var db_todo_1 = __importDefault(require("../database/db_todo"));
function updateTodoDoneList(response, bodyData) {
    var query;
    if (bodyData.listType == 'todo') {
        query = {
            type: bodyData.listType,
            userId: bodyData.userId,
            table: 'todo_list',
            key: bodyData.key,
            value: bodyData.value,
            index: bodyData.index,
        };
        db_todo_1.default.updateList(query).then(function (res) {
            var todoList = res;
            response.writeHead(200, {
                'Content-Type': 'text/html; charset=utf-8',
                'Access-Control-Allow-Origin': '*',
            });
            response.end(JSON.stringify(todoList));
        });
    }
    else if (bodyData.listType == 'done') {
        query = {
            type: bodyData.listType,
            userId: bodyData.userId,
            table: 'done_list',
            key: bodyData.key,
            value: bodyData.value,
            index: bodyData.index,
        };
        db_todo_1.default.updateList(query).then(function (res) {
            var doneList = res;
            response.writeHead(200, {
                'Content-Type': 'text/html; charset=utf-8',
                'Access-Control-Allow-Origin': '*',
            });
            response.end(JSON.stringify(doneList));
        });
    }
}
exports.updateTodoDoneList = updateTodoDoneList;
