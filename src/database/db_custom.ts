import dbConObj from './db_connection'
const connection = dbConObj.init()

const customCon = {
  query: async function (sql: string) {
    return new Promise((resolve) => {
      connection.query(sql, function (err, results) {
        resolve(results)
      })
    })
  },
}
export default customCon
