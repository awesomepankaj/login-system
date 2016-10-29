var express = require('express');
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var auth = require('./auth')

var app = express();

app.use(bodyParser.json()); 
app.use(cookieParser('aaaaaaaaaaadasdfaasdfasasdkj3d'))

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3030");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.send('How are you feeling?');
})

app.get('/checkCookie', (req, res) => {
  auth.checkCookie(req.cookies, res)
})

app.post('/login', (req, res) => {
  console.log(req)
  auth.login(req.body, res)
})

app.get('/logout', (req, res) => {
  auth.logout(res)
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
})
