const express = require('express')

const app =express();
const request=require('request')
const bodyparser=require('body-parser')

app.set('view engine','ejs')


app.use(express.static('public'))
app.use('/css',express.static(__dirname+'public/css'))
app.use('/img',express.static(__dirname+'public/img'))
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())


var city='mumbai'

app.get('/',(req,res)=>{

    var url= `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=271d1234d3f497eed5b1d80a07b3fcd1`;
    request(url,(error,response,body)=>{
        weather_json=JSON.parse(body);
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
        res.render('index',{weather:weather});
    })
})
app.get('/weather',(req,res)=>{
    let newCity=req.query.city;
    console.log(newCity);
    if(newCity)
        city=newCity;
    res.redirect('/');
})

app.listen(8000); 