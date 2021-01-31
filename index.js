const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')

const bodyParser = require('body-parser');
const {User} = require("./models/User");


app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://cjlee:abcd1234@boilerplate.rdppv.mongodb.net/boilerplate?retryWrites=true&w=majority',{
  useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify: false
}).then(()=> console.log('Mongo DB Connected....'))
  .catch(err => console.log(err))




app.post('/register',(req,res)=>{
  //회원 가입 할 때 필요한 정보들을 client 에서 가져오면 그것들을 데이터 베이스에 넣어준다.
    const user = new User(req.body)

    user.save((err,userInfo)=>{
      if(err) return res.json({success:false, err})
        return res.status(200).json({
          success:true
        })

    })
})


app.get('/', (req, res) => {
  res.send('안뇽 나는 노드라고해 ^__________________^')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})