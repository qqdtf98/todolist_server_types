import mysql, { Connection } from 'mysql'

const dbConnection = {
  init: function () {
    const connection = mysql.createConnection({
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: 'nksmdk98',
      database: 'todolist',
    })
    return connection
  },
  db_open: function (conn: Connection) {
    conn.connect(function (err: Error) {
      if (err) {
        console.error('mysql connection error : ' + err)
      } else {
        console.info('mysql connection successfully.')
      }
    })
  },
}

export default dbConnection
