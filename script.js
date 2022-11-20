var clock = document.querySelector('.clock');

//used to keep button memory
var textArea = slot1.querySelector('button');

//the input and button for searching are below.
// var citySearch = document.querySelector('');
var findCity = document.querySelector('#citySearch')
var weatherIcon = document.querySelectorAll('.icon')
var temperature = document.querySelector('.temp')
var humidity = document.querySelector('.humidity')
var wind = document.querySelector('.wind')
var uvIndex = document.querySelector('.uvI')
var forecastContainer = document.querySelector('.forecastContainer')

//This sets the time at header when the user clicks to search for a city.
document.getElementById("findCity").addEventListener("click", function() {
    displayDate()
    city(findCity.value)
});

function displayDate() {
    document.getElementById("tiempo").innerHTML = new Date();
};


//First function is to find the city based on an API call for city.
function city (citySearch){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${api.key}`)
    .then(function(response){
        return response.json()

    } ) .then (function(data){
        // console.log(data.coord.lat, data.coord.lon);
        getWeather(data.coord.lat, data.coord.lon)
    })
};

// city('');

//This function is built to access the weather details for the specific 
function getWeather (lat, lon,) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${api.key}&exclude=hourly,minutely,alerts&units=imperial`)
    .then(function(response){
        return response.json()

    }) .then(function(data){
        console.log(data);
        // weatherIcon.innerText = data.weather[0].icon 
        temperature.innerHTML = 'Temperature: ' + data.current.temp + 'F'
        humidity.textContent = 'Humidity: ' + data.current.humidity + '%'
        wind.innerText = 'Wind: ' + data.current.wind_speed + 'mph'
        uvIndex.innerText = 'UV Index: ' + data.current.uvi
        if (data.current.uvi <= 5 ) {
            uvIndex.style.backgroundColor = 'green'
        } else {
            uvIndex.style.backgroundColor = 'red'
        }
        for (var i = 1; i < 6; i++ ) {
            var card = document.createElement('div')
            var forecastTemp = document.createElement('p')
            forecastTemp.innerText = data.daily[i].temp.day
            console.log(forecastTemp)
        }
        
    })
};

function getForecast () {


}

// document.getElementById('icon').src = "http://openweathermap.org/img/w/"+obj.weather[0].icon+".png";
//  }

// append forecast temp to card
        // at the end of for loop append card to forecast container(very end)
        // then append card to forecast container
        // use appendChild to connect them