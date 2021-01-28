const express = require('express')

const app =express();
const request=require('request')

app.set('view engine','ejs')


app.use(express.static('public'))
app.use('/css',express.static(__dirname+'public/css'))
app.use('/img',express.static(__dirname+'public/img'))




var city='new york'
var url= `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=271d1234d3f497eed5b1d80a07b3fcd1`;

app.get('/',(req,res)=>{
    
    request(url,(error,response,body)=>{
        weather_json=JSON.parse(body);
        console.log(weather_json);
        let weather ={
            city: weather_json.name,
            country: weather_json.sys.country,
            temperature: Math.round(weather_json.main.temp),
            min_temp:weather_json.main.temp_min,
            max_temp:weather_json.main.temp_max,
            feels_like: weather_json.main.feels_like,
            humidity: weather_json.main.humidity,
            pressure: weather_json.main.pressure,
            visibility: weather_json.visibility,
            sunrise: weather_json.sys.sunrise,
            sunset: weather_json.sys.sunset,
            wind_speed: weather_json.wind.speed,
            wind_dir: weather_json.wind.deg,
            timezone: weather_json.timezone,
            description: weather_json.weather[0].description,
            icon: weather_json.weather[0].icon
        }
        console.log(weather);
        res.render('index',{weather:weather});
    })
})


app.listen(8000); 