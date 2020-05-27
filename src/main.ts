import { Query } from './interfaces/todo-list-type'
import { addTodoDoneList } from './server/addTodoDoneList'
import bodyParser from 'body-parser'
import cors from 'cors'
import { deleteTodoDoneList } from './server/deleteTodoDoneList'
import express from 'express'
import { getTodoDoneList } from './server/getTodoDoneList'
import getUserData from './server/getUserData'
import { updateTodoDoneList } from './server/updateTodoDoneList'

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

app.post('/list/add', function (req: express.Request, res: express.Response) {
  addTodoDoneList(res, req.body.data)
})

app.post('/list/delete', function (
  req: express.Request,
  res: express.Response
) {
  deleteTodoDoneList(res, req.body.data)
})

app.post('/list/update', function (
  req: express.Request,
  res: express.Response
) {
  updateTodoDoneList(res, req.body.data)
})

app.listen(80, function () {
  console.log('Server is running...')
})
