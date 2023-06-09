// 서버를 열기위한 명령어 - 정해져있고 작명이 아님
const express = require('express');
const path = require('path');
const app = express();

app.listen(5000, function(){
  console.log("서버가 정상적으로 열림 5000")
})
// 작업한 Vue폴더와 연동해서 페이지에 렌더링하기
app.use(express.static(path.join(__dirname, 'waterworks/dist')));
app.get('/', function(req,res){
  res.sendFile(path.join(__dirname, 'waterworks/dist/index.html'))
})


// app.get('/', function(req, res){
//   // req, res = 요청, 응답 
//   res.sendFile(__dirname + '/index.html');
//   // sendfile - 파일을 보낼 수 있는 함수
//   // __dirname - 현재 파일의 경로
// })
// app.get('/about', function(req,res){
//   res.send("어바웃 화면임");
//   res.sendFile(__dirname + '/about.html');
// })
// app.get('/about/list', function(req,res){
//   res.send("아 그거 그렇게 하는거 아닌데...")
//   res.sendFile(__dirname + '/about/list.html');
// })


app.get('*', function(re,res){
  res.sendFile(path.join(__dirname, 'waterworks/dist/index.html'))
})

module.exports = app;