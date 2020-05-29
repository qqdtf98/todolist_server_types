# todolist API 문서

## 유저 조회

**[Request]**

- URL

  `[GET] /user/get`

- Data Example

```json
{
  "userData": "lsm"
}
```

**[Response]**

```json
{
  "id": 0,
  "googleId": "1000304400520",
  "email": "qqdtf98@ahh.com",
  "name": "lll"
}
```

<br></br>

## todoList, doneList 조회

**[Request]**

- URL

  `[POST] /list/get`

- Data Example
  ```json
  {
    "userId": "1000304400520",
    "listType": "todo" | "done"
  }
  ```
  **[Response]**

Example 1

```json
[
  {
    "contents": "react 공부하기",
    "date": "2020/04/29",
    "doneId": "1000304400520",
    "id": 3,
    "importance": "yellow",
    "state": 1,
    "title": "공부"
  },
  {
    "contents": "todolist 구현하기",
    "date": "2020/04/29",
    "doneId": "1000304400520",
    "id": 6,
    "importance": "green",
    "state": 1,
    "title": "프로젝트"
  }
]
```

Example 2

```json
[
  {
    "contents": "express 공부하기",
    "date": "2020/04/29",
    "todoId": "1000304400520",
    "id": 1,
    "importance": "green",
    "state": 0,
    "title": "공부"
  },
  {
    "contents": "todolist api 문서 작성하기",
    "date": "2020/04/29",
    "todoId": "1000304400520",
    "id": 2,
    "importance": "red",
    "state": 0,
    "title": "문서화"
  }
]
```

<br></br>

## todoList, doneList 추가

**[Request]**

- URL

  `[POST] /list/add`

- Data Example

```json
{
  "userId": "1000304400520",
  "newContext": {
    "title": "할 일",
    "contents": "자소서 쓰기",
    "date": "2020/05/21",
    "state": 0,
    "importance": "red"
  }
}
```

**[Response]**

```json
[
  {
    "contents": "express 공부하기",
    "date": "2020/04/29",
    "todoId": "1000304400520",
    "id": 1,
    "importance": "green",
    "state": 0,
    "title": "공부"
  },
  {
    "contents": "todolist api 문서 작성하기",
    "date": "2020/04/29",
    "todoId": "1000304400520",
    "id": 2,
    "importance": "red",
    "state": 0,
    "title": "문서화"
  },
  {
    "contents": "자소서 쓰기",
    "date": "2020/05/21",
    "todoId": "1000304400520",
    "id": 5,
    "importance": "red",
    "state": 0,
    "title": "할 일"
  }
]
```

<br></br>

## todoList, doneList 삭제

**[Request]**

- URL

  `[POST] /list/delete`

- Data Example

```
  {
    userId: '1000304400520',
    listType: 'done',
    index: 2
  }
```

**[Response]**

```
[
  {
    contents: 'express 공부하기',
    date: '2020/04/29',
    todoId: '1000304400520',
    id: 1,
    importance: 'green',
    state: 0,
    title:'공부'
  },
  {
    contents: '자소서 쓰기',
    date: '2020/05/21',
    todoId: '1000304400520',
    id: 5,
    importance: 'red',
    state: 0,
    title:'할 일'
  }
]
```

<br></br>

## todoList, doneList 업데이트

**[Request]**

- URL

  `[POST] /list/update`

- Data Example

```json
{
  "userId": "1000304400520",
  "listType": "done",
  "index": 5,
  "key": "importance",
  "value": "yellow"
}
```

**[Response]**

```json
[
  {
    "contents": "express 공부하기",
    "date": "2020/04/29",
    "todoId": "1000304400520",
    "id": 1,
    "importance": "green",
    "state": 0,
    "title": "공부"
  },
  {
    "contents": "자소서 쓰기",
    "date": "2020/05/21",
    "todoId": "1000304400520",
    "id": 5,
    "importance": "yellow",
    "state": 0,
    "title": "할 일"
  }
]
```

<br></br>

## todoList, doneList 교환

**[Request]**

- URL

  `[POST] /list/change`

- Data Example

```json
{
  "userId": "1000304400520",
  "before": "todo_list",
  "after": "done_list",
  "id": 2,
  "type": "todo"
}
```

**[Response]**

```json
[
  {
    "contents": "express 공부하기",
    "date": "2020/04/29",
    "todoId": "1000304400520",
    "id": 1,
    "importance": "green",
    "state": 0,
    "title": "공부"
  },
  {
    "contents": "자소서 쓰기",
    "date": "2020/05/21",
    "todoId": "1000304400520",
    "id": 5,
    "importance": "red",
    "state": 0,
    "title": "할 일"
  },
  {
    "contents": "메뉴 고르기",
    "date": "2020/05/21",
    "todoId": "1000304400520",
    "id": 2,
    "importance": "red",
    "state": 1,
    "title": "점심"
  }
]
```

<br></br>
