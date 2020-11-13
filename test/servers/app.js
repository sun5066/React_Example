var express = require('express');
var app = express();

var indexRouter = require('./routes/index');

app.use(indexRouter);

// portnumber를 3002로 지정
const port = 3002;

// 3002번 포트넘버를 가진 서버 생성
app.listen(port, () => console.log(`listening on port ${port}!`))