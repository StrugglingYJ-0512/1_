const express = require('express')
const app = express()
const port = 3000

app.get('/hi', (req, res) => {
  res.send('Hi. This is express router')
})

app.get('/', (req, res) => {
  res.send('Hello World! <a href="/hi">Say Hi!</a>')
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})

// router :  각각의 주소가 들어왔을 때 어떤 것을 응답할지를 설정
