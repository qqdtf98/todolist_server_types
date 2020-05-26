/* eslint-disable no-async-promise-executor */
import { Query, UserData } from '../interfaces/todo-list-type'

import customCon from './db_custom'

const userData = {
  getUserAccount: async function (list: Query): Promise<UserData[]> {
    return new Promise((resolve) => {
      const data = JSON.parse(list.userData)
      const sql = `select * from user_list where email = '${data.email}'`
      customCon.query(sql).then((res) => {
        resolve(res as UserData[])
      })
    })
  },
  createUserAccount: async function (list: Query): Promise<UserData[]> {
    return new Promise(async (resolve) => {
      const userData = JSON.parse(list.userData)
      let sql = `insert into user_list(googleId, email,name) values (${userData.googleId}, '${userData.email}','${userData.name}')`

      await customCon.query(sql)
      sql = `select * from user_list where googleId =${userData.googleId}`
      customCon.query(sql).then((res) => {
        resolve(res as UserData[])
      })
    })
  },
}

export default userData
