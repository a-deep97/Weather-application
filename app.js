const express = require('express')

const app =express();

app.use('view engine','ejs')

var city='delhi'
var url= `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=271d1234d3f497eed5b1d80a07b3fcd1`;

app.listen(8000)