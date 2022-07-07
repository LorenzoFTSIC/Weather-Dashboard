var searchButton = document.getElementById("submitButton")
var apiKey = "204abc2890adefd299531dbce7ef42d7"
var cityInput = document.getElementById("cityInput");
var test = "no"
// SEARCH //
// grabbing the values from the search, to later use in our functions 
function searchHandle (e) {
    e.preventDefault();
    // grab the search content
    // fetchLocation(data we received from the search)
    // fetchLocation()
    // console.log(fetchLocation())
    // console.log(fetchLocation()[0].lon)
    fetchLocation()
  }
  
  // FUNCTIONALITY FOR FETCHING LOCATION //
  // activity 3 - mod 6
  // call the location api
   
  function fetchLocation () {
    // get some data pertaining to location - using an api call
    var citySearchLink = ("https://api.openweathermap.org/geo/1.0/direct?q=" + cityInput.value + "&limit=1&appid=" + apiKey)
    fetch(citySearchLink)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var data = data[0]
        var cityInfo = {"cityLat": data.lat, "cityLon": data.lon}
        return cityInfo
    })
    .then (function (cityInfo) {
        console.log(cityInfo.cityLat)
        console.log(cityInfo.cityLon)
        fetchWeather()
    })
  
    // fetchWeather(data we received from fetchLocation)
  }
  
  // FUNCTIONALITY FOR FETCHING WEATHER //
  
  function fetchWeather (lat, lon) {
    // get some data for the weather in the location we searched - using an api call
    var weatherSearchLink = ("https://api.openweathermap.org/data/2.5/onecall?lat="+ lat +"&lon=" + lon +"&appid=" + apiKey)
    fetch(weatherSearchLink)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
    })
    // renderWeather(data)
  }
  
  
  // FUNCTIONALITY FOR RENDERING CONTENT //
  
  function renderWeather(data) {
    // render the weather 
  }
  
  // HISTORY FEATURE //
  // local storage 

searchButton.addEventListener("click", searchHandle)
