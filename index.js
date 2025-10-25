require('dotenv').config();
console.log("chai aur code by mrajg");
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World from Mayur Rajgude!')
})
app.get('/twitter',(req,res)=>{
    res.send('This is twitter endpoint')
})
app.get('/login',(req,res)=>{
    res.send('<h1>please Login at the chai aur code webpage</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send('<h2>Welcome to Mayur Rajgude youtube channel</h2>')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
