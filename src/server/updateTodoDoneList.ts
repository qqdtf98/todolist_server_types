import { UpdateTodoDone } from '../interfaces/todo-list-type'
import express from 'express'
import todoData from '../database/db_todo'

function updateTodoDoneList(
  response: express.Response,
  bodyData: UpdateTodoDone
) {
  let query
  if (bodyData.listType == 'todo') {
    query = {
      type: bodyData.listType,
      userId: bodyData.userId,
      table: 'todo_list',
      key: bodyData.key,
      value: bodyData.value,
      index: bodyData.index,
    }
    todoData.updateList(query).then((res) => {
      const todoList = res
      response.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
      })
      response.end(JSON.stringify(todoList))
    })
  } else if (bodyData.listType == 'done') {
    query = {
      type: bodyData.listType,
      userId: bodyData.userId,
      table: 'done_list',
      key: bodyData.key,
      value: bodyData.value,
      index: bodyData.index,
    }
    todoData.updateList(query).then((res) => {
      const doneList = res
      response.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
      })
      response.end(JSON.stringify(doneList))
    })
  }
}

export { updateTodoDoneList }
