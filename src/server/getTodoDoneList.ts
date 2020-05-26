import { TodoUser } from '../interfaces/todo-list-type'
import express from 'express'
import todoData from '../database/db_todo'

let todoList
let doneList

function getTodoDoneList(response: express.Response, bodyData: TodoUser) {
  if (bodyData.listType == 'todo') {
    const newData = {
      dbTable: 'todo_list',
      bodyData,
    }
    todoData.getDataList(newData).then((res) => {
      todoList = res
      response.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
      })
      response.end(JSON.stringify(todoList))
    })
  } else if (bodyData.listType == 'done') {
    const newData = {
      dbTable: 'done_list',
      bodyData,
    }
    todoData.getDataList(newData).then((res) => {
      doneList = res
      response.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
      })
      response.end(JSON.stringify(doneList))
    })
  }
}

export { todoList, doneList, getTodoDoneList }
