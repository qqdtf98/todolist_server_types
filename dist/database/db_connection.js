"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = __importDefault(require("mysql"));
var dbConnection = {
    init: function () {
        var connection = mysql_1.default.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: 'nksmdk98',
            database: 'todolist',
        });
        return connection;
    },
    db_open: function (conn) {
        conn.connect(function (err) {
            if (err) {
                console.error('mysql connection error : ' + err);
            }
            else {
                console.info('mysql connection successfully.');
            }
        });
    },
};
exports.default = dbConnection;
