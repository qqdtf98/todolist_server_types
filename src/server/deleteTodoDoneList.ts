import { DeleteTodoDone } from '../interfaces/todo-list-type'
import express from 'express'
import todoData from '../database/db_todo'

function deleteTodoDoneList(
  response: express.Response,
  bodyData: DeleteTodoDone
) {
  if (bodyData.listType == 'todo') {
    const queryData = {
      table: 'todo_list',
      index: bodyData.index,
      type: bodyData.listType,
      userId: bodyData.userId,
    }
    todoData.deleteList(queryData).then((res) => {
      const todoList = res
      response.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
      })
      response.end(JSON.stringify(todoList))
    })
  } else if (bodyData.listType == 'done') {
    const queryData = {
      table: 'done_list',
      index: bodyData.index,
      type: bodyData.listType,
      userId: bodyData.userId,
    }
    todoData.deleteList(queryData).then((res) => {
      const doneList = res
      response.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
      })
      response.end(JSON.stringify(doneList))
    })
  }
}

export { deleteTodoDoneList }
