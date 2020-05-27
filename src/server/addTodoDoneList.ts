import { AddTodoDone } from '../interfaces/todo-list-type'
import express from 'express'
import todoData from '../database/db_todo'

let todoList

function addTodoDoneList(response: express.Response, bodyData: AddTodoDone) {
  todoData.addList(bodyData).then((res) => {
    todoList = res
    response.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
    })
    response.end(JSON.stringify(todoList))
  })
}

export { addTodoDoneList }
