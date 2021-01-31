const express = require('express')
const app = express()
const port = 5000


const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://cjlee:abcd1234@boilerplate.rdppv.mongodb.net/boilerplate?retryWrites=true&w=majority',{
  useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify: false
}).then(()=> console.log('Mongo DB Connected....'))
  .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('안뇽 나는 노드라고해')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})