import {
  ChangeTodoDone,
  ResDoneType,
  ResTodoType,
} from '../interfaces/todo-list-type'

import express from 'express'
import todoData from '../database/db_todo'

let todoList

type ResType = {
  todo: ResTodoType[]
  done: ResDoneType[]
}

function changeTodoDoneList(
  response: express.Response,
  bodyData: ChangeTodoDone
) {
  todoData.changeList(bodyData).then((res) => {
    const changeRes = res as ResType
    const newList = {
      todo: changeRes.todo,
      done: changeRes.done,
    }
    response.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
    })
    response.end(JSON.stringify(newList))
  })
}

export { changeTodoDoneList }
