"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var db_custom_1 = __importDefault(require("./db_custom"));
var todoData = {
    getDataList: function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        var sql = "SELECT * from " + data.dbTable + " where " + data.bodyData.listType + "Id = " + data.bodyData.userId;
                        db_custom_1.default.query(sql).then(function (results) {
                            var list = JSON.parse(JSON.stringify(results));
                            for (var i = 0; i < list.length; i++) {
                                list[i].date = list[i].date.split('T')[0];
                            }
                            resolve(list);
                        });
                    })];
            });
        });
    },
    deleteList: function (query) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        var sql = "delete from " + query.table + " where id = " + query.index;
                        db_custom_1.default.query(sql);
                        sql = "select * from " + query.table + " where " + query.type + "Id = " + query.userId;
                        console.log(sql);
                        db_custom_1.default.query(sql).then(function (results) {
                            var list = JSON.parse(JSON.stringify(results));
                            for (var i = 0; i < list.length; i++) {
                                list[i].date = list[i].date.split('T')[0];
                            }
                            resolve(list);
                        });
                    })];
            });
        });
    },
    addList: function (bodyData) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        var sql = "insert into todo_list (title,contents,date,state,importance,todoId) values ('" + bodyData.newContext.title + "','" + bodyData.newContext.contents + "','" + bodyData.newContext.date + "','" + bodyData.newContext.state + "','" + bodyData.newContext.importance + "'," + bodyData.userId + ") ";
                        db_custom_1.default.query(sql);
                        sql = "select * from todo_list where todoId = " + bodyData.userId;
                        db_custom_1.default.query(sql).then(function (results) {
                            var list = JSON.parse(JSON.stringify(results));
                            for (var i = 0; i < list.length; i++) {
                                list[i].date = list[i].date.split('T')[0];
                            }
                            resolve(list);
                        });
                    })];
            });
        });
    },
    updateList: function (query) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        var sql = "update " + query.table + " set " + query.key + " = '" + query.value + "' where id=" + query.index;
                        db_custom_1.default.query(sql);
                        sql = "select * from " + query.table + " where " + query.type + "Id = " + query.userId;
                        db_custom_1.default.query(sql).then(function (results) {
                            var list = JSON.parse(JSON.stringify(results));
                            for (var i = 0; i < list.length; i++) {
                                list[i].date = list[i].date.split('T')[0];
                            }
                            resolve(list);
                        });
                    })];
            });
        });
    },
    changeList: function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // eslint-disable-next-line no-async-promise-executor
                return [2 /*return*/, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                        var sql, movedData, _a, _b, _c, _d, date, dateStr, newState, results, todo_list, i, done_list, i, newLists;
                        return __generator(this, function (_e) {
                            switch (_e.label) {
                                case 0:
                                    sql = "select * from " + query.before + " where id = " + query.id;
                                    _b = (_a = JSON).parse;
                                    _d = (_c = JSON).stringify;
                                    return [4 /*yield*/, db_custom_1.default.query(sql)];
                                case 1:
                                    movedData = _b.apply(_a, [_d.apply(_c, [_e.sent()])])[0];
                                    sql = "delete from " + query.before + " where id = " + query.id;
                                    return [4 /*yield*/, db_custom_1.default.query(sql)];
                                case 2:
                                    _e.sent();
                                    date = new Date(movedData.date);
                                    dateStr = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
                                    if (query.after === 'todo_list') {
                                        newState = 0;
                                    }
                                    else if (query.after === 'done_list') {
                                        newState = 1;
                                    }
                                    if (!(query.type === 'todo')) return [3 /*break*/, 4];
                                    sql = "insert into " + query.after + "(id,title,contents,date,state,importance,todoId) values (" + movedData.id + ",'" + movedData.title + "','" + movedData.contents + "','" + dateStr + "','" + newState + "','" + movedData.importance + "'," + movedData.doneId + ")";
                                    return [4 /*yield*/, db_custom_1.default.query(sql)];
                                case 3:
                                    _e.sent();
                                    return [3 /*break*/, 6];
                                case 4:
                                    if (!(query.type === 'done')) return [3 /*break*/, 6];
                                    sql = "insert into " + query.after + "(id,title,contents,date,state,importance,doneId) values (" + movedData.id + ",'" + movedData.title + "','" + movedData.contents + "','" + dateStr + "','" + newState + "','" + movedData.importance + "'," + movedData.todoId + ")";
                                    return [4 /*yield*/, db_custom_1.default.query(sql)];
                                case 5:
                                    _e.sent();
                                    _e.label = 6;
                                case 6:
                                    console.log(sql);
                                    sql = "select * from todo_list where todoId = " + query.userId;
                                    return [4 /*yield*/, db_custom_1.default.query(sql)];
                                case 7:
                                    results = _e.sent();
                                    console.log(results);
                                    todo_list = JSON.parse(JSON.stringify(results));
                                    for (i = 0; i < todo_list.length; i++) {
                                        todo_list[i].date = todo_list[i].date.split('T')[0];
                                    }
                                    sql = "select * from done_list where doneId = " + query.userId;
                                    return [4 /*yield*/, db_custom_1.default.query(sql)];
                                case 8:
                                    results = _e.sent();
                                    done_list = JSON.parse(JSON.stringify(results));
                                    for (i = 0; i < done_list.length; i++) {
                                        done_list[i].date = done_list[i].date.split('T')[0];
                                    }
                                    newLists = {
                                        todo: todo_list,
                                        done: done_list,
                                    };
                                    resolve(newLists);
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    },
};
exports.default = todoData;
