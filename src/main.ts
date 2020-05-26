import { Query } from './interfaces/todo-list-type'
import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import { getTodoDoneList } from './server/getTodoDoneList'
import getUserData from './server/getUserData'

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/user/get', function (req: express.Request, res: express.Response) {
  getUserData(res, (req.query as unknown) as Query)
})
app.post('/list/get', function (req: express.Request, res: express.Response) {
  getTodoDoneList(res, req.body.data)
})

app.listen(80, function () {
  console.log('Server is running...')
})
