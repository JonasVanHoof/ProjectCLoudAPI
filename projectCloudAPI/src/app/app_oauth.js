const express = require('express')
const trendingPage = require('./trending-page/trending-page.component.html')
const cookie = require('cookie-parser')
//const bp = require('body-parser')

var app = express();
const clientID = '';
const secret = '';

const redirectUrl = ''  //  http://localhost:8002/google-callback    

app.use(cookie());

app.get('/',(req, res, next) => {
  var cookie = req.cookies.auth;
  if(!cookie){res.redirect('trending');}
  else return next();
});


app.use(ex.static("app"));
app.listen(8002, () => {
  console.log("server is running")
});
