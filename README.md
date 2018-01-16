TODO LIST SERVER
================
## 1. 사용목적
### - 공부 목적으로 테스트 해볼 수 있는 To Do List App을 만들 때 사용할 수 있는 서버 + 데이터베이스 작업
## 2. 구축환경
### 1) NodeJS(+express)
### 2) MongoDB(+Mongoose)
## 3. 사용환경
### 1) 서버 PORT : process.env.PORT || 8080;
### 2) MongoDB 접속정보
#### 'mongodb://localhost:27017/todoApp'
#### (1) PORT : 27017
#### (2) 컬렉션 : todoApp
### 3) API 정보(REST API)
#### (1) GET(READ) : '/api/todolist'
#### (2) POST(CREATE) : '/api/todolist'
#### (3) PUT(UPDATE) : '/api/todolist/:todo' <<업데이트 예정>>
#### (4) DELETE : '/api/todolist/:todo' <<업데이트 예정>>