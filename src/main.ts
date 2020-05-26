import { Query } from './interfaces/todo-list-type'
import bodyParser from 'body-parser'
import express from 'express'
import getUserData from './server/getUserData'

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/user/get', function (req: express.Request, res: Express.Response) {
  getUserData(res, (req.query as unknown) as Query)
})

app.listen(80, function () {
  console.log('Server is running...')
})
