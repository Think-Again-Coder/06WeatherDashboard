var clock = document.querySelector('.clock');

//used to keep button memory
var textArea = slot1.querySelector('button');

//the input and button for searching are below.
// var citySearch = document.querySelector('');
var findCity = document.querySelector('#citySearch');

 
//First function is to find the city based on an API call for city.
function city (citySearch){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${api.key}`)
    .then(function(response){
        return response.json()

    } ) .then (function(data){
        console.log(data.coord.lat, data.coord.lon);
        getWeather(data.coord.lat, data.coord.lon)
    })
};

city('Houston');

//This function is built to access the weather details for the specific 
function getWeather (lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${api.key}&exclude=hourly,minutely,alerts&units=imperial`)
    .then(function(response){
        return response.json()

    }) .then(function(data){
        console.log(data);
    })
};

findCity.addEventListener("click", citySearch);

//The function below allows the names being searched to populate on the bigView container
var searchFormEl = document.querySelector('#search-form');

function getSearch(event) {
  event.preventDefault();

  var searchInputVal = document.querySelector('#citySearch').value;
  var formatInputVal = document.querySelector('#').value;

  if (!searchInputVal) {
    console.error('Please Enter a City Name');
    return;
  }

  var queryString = './search-results.html?q=' + searchInputVal + '&format=' + formatInputVal;

  location.assign(queryString);
}

// searchFormEl.addEventListener('submit', handleSearchFormSubmit);
