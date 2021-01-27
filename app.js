const express = require('express')

const app =express();
const request=require('request')

app.set('view engine','ejs')


app.use(express.static('public'))
app.use('/css',express.static(__dirname+'public/css'))
app.use('/img',express.static(__dirname+'public/img'))




var city='delhi'
var url= `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=271d1234d3f497eed5b1d80a07b3fcd1`;

app.get('/',(req,res)=>{
    
    res.render('index');
    /*
    request(url,(error,response,body)=>{
        weather_json=JSON.parse(body)
        console.log(weather_json.main.temp)

        let weather ={
            city: city,
            temperature: Math.round(weather_json.main.temp),
            description: weather_json.weather[0].description,
            icon: weather_json.weather[0].icon
        }
    })
    */
})


app.listen(8000); 