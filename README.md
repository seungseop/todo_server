TODO LIST SERVER
================
## 1. 사용목적
* 공부 목적으로 테스트 해볼 수 있는 ToDoList를 만들 때 사용할 Server + DB
## 2. 구축환경
* NodeJS(+express)
* MongoDB(+Mongoose)
## 3. 사용환경
* 서버 PORT : process.env.PORT || 8080;
* MongoDB 접속정보('mongodb://localhost:27017/todoApp')
  * PORT : 27017
  * DATABASE : todoApp
* API 정보(REST API)
  * GET(READ) : '/api/todolist'
  * POST(CREATE) : '/api/todolist'
  * PUT(UPDATE) : '/api/todolist/:todo' <<업데이트 예정>>
  * DELETE : '/api/todolist/:todo' <<업데이트 예정>>
* 스키마 정보(Model)
  * grade: Number (중요도)
  * contents: String (내용)
  * registration_date: { type: Date, defulat: Date.now } (등록일 / 서버시간 자동입력)
  * update_date: { type: Date, default: Date.now } (수정일 / 서버시간 자동입력)
  * isComplete: Boolean (완료여부)