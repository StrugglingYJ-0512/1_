const express = require('express')
const app = express()
const port = 3000

// post, put 메서드를 받아쓸 때, 그 안의 body값 사용시,
// request.body 라고만 하면 그 body 데이터를 바로 사용가능함. 
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('public'));// public directory 안에서 static 데이터 제공한다. 

// 1. Router 객체화 
const goodsRouter = require('./routes/goods') //goods의 라우터 파일을 가져옴.
const userRouter = require('./routes/user'); // user.js파일을 라우터 객체화 함.

// 2. Router 객체를 갖다 씀. 
app.use('/goods', goodsRouter) // goodsRouter라고 정의해 놓은 미들웨어를 사용. 
app.use('/user', userRouter) // user라는 경로가 오면,  userRouter 가 처리함. ( userRouter가 경로의 나머지 뒷부분을 보고 처리한다. ) 


app.use((req, res, next) => {
  console.log(req);
  next();
});

app.get('/', (req, res, next) => {
  res.send('Welcome Home');
});


app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})

// router :  각각의 주소가 들어왔을 때 어떤 것을 응답할지를 설정


