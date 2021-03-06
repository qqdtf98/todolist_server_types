"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var addTodoDoneList_1 = require("./server/addTodoDoneList");
var body_parser_1 = __importDefault(require("body-parser"));
var changeTodoDoneList_1 = require("./server/changeTodoDoneList");
var cors_1 = __importDefault(require("cors"));
var deleteTodoDoneList_1 = require("./server/deleteTodoDoneList");
var express_1 = __importDefault(require("express"));
var getTodoDoneList_1 = require("./server/getTodoDoneList");
var getUserData_1 = __importDefault(require("./server/getUserData"));
var updateTodoDoneList_1 = require("./server/updateTodoDoneList");
var app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.get('/user/get', function (req, res) {
    getUserData_1.default(res, req.query);
});
app.post('/list/get', function (req, res) {
    getTodoDoneList_1.getTodoDoneList(res, req.body.data);
});
app.post('/list/add', function (req, res) {
    addTodoDoneList_1.addTodoDoneList(res, req.body.data);
});
app.post('/list/delete', function (req, res) {
    deleteTodoDoneList_1.deleteTodoDoneList(res, req.body.data);
});
app.post('/list/update', function (req, res) {
    updateTodoDoneList_1.updateTodoDoneList(res, req.body.data);
});
app.post('/list/change', function (req, res) {
    changeTodoDoneList_1.changeTodoDoneList(res, req.body.data);
});
app.listen(80, function () {
    console.log('Server is running...');
});
