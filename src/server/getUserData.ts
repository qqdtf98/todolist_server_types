// const { getTodoDoneList } = require('../../server/server_request_getList')
import { Query } from '../interfaces/todo-list-type'
import userData from '../database/db_user'

function getUserData(response: Express.Response, parsedQuery: Query) {
  userData.getUserAccount(parsedQuery)
  // userData.getUserAccount(parsedQuery).then((res: ) => {
  //   console.log(res)
  //   if (res.length === 0) {
  //     // 회원가입
  //     userData.createUserAccount(parsedQuery).then((res) => {
  //       const list = {
  //         userData: JSON.stringify(res[0]),
  //       }
  //       userData.getUserAccount(list).then((res) => {
  //         response.writeHead(200, {
  //           'Content-Type': 'text/html; charset=utf-8',
  //           'Access-Control-Allow-Origin': '*',
  //         })
  //         response.end(JSON.stringify(res))
  //       })
  //     })
  //   } else {
  //     response.writeHead(200, {
  //       'Content-Type': 'text/html; charset=utf-8',
  //       'Access-Control-Allow-Origin': '*',
  //     })
  //     response.end(JSON.stringify(res))
  //   }
  // })
}

export default getUserData
