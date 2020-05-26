import * as express from 'express'

// const { getTodoDoneList } = require('../../server/server_request_getList')
import { Query, UserData } from '../interfaces/todo-list-type'

import userData from '../database/db_user'

function getUserData(response: express.Response, parsedQuery: Query): void {
  userData.getUserAccount(parsedQuery).then((res) => {
    if (res.length === 0) {
      // 회원가입
      userData.createUserAccount(parsedQuery).then((res) => {
        console.log(res)
        const list = {
          userData: JSON.stringify(res[0]),
        }
        userData.getUserAccount(list).then((res) => {
          response.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8',
            'Access-Control-Allow-Origin': '*',
          })
          response.end(JSON.stringify(res))
        })
      })
    } else {
      response.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
      })
      response.end(JSON.stringify(res))
    }
  })
}

export default getUserData
