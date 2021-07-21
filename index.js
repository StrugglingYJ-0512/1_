const express = require('express')
const app = express()
const port = 3000

// 1. Router 객체화 
const goodsRouter = require('./routes/goods') //goods의 라우터 파일을 가져옴.
const userRouter = require('./routes/user'); // user.js파일을 라우터 객체화 함.

// 2. Router 객체를 갖다 씀. 
app.use('/goods', goodsRouter) // goodsRouter라고 정의해 놓은 미들웨어를 사용. 
app.use('/user', userRouter) // user라는 경로가 오면,  userRouter 가 처리함. ( userRouter가 경로의 나머지 뒷부분을 보고 처리한다. ) 


// app.get('/goods/list', (req, res) => {
//   res.send('상품 목록 페이지')
// })

// app.get('/goods/detail', (req, res) => {
//   res.send('상품 상세 페이지')
// })

// app.get('/user/login', (req, res) => {
//   res.send('로그인 페이지')
// })

// app.get('/user/register', (req, res) => {
//   res.send('회원가입 페이지')
// })

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})

// router :  각각의 주소가 들어왔을 때 어떤 것을 응답할지를 설정


