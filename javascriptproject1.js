searchButton.addEventListener('click', searchWeather);

function searchWeather(){
  loadingText.style.display = 'block';
  weatherBox.style.display = 'none';
  var cityName = searchCity.value;

  if (cityName.trim().length == 0){
    return alert('Please enter a city name')
  }
  var http = new XMLHttpRequest();
  var apiKey = "88b36adfd4e356bb9cc56518c5d26be5";
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey
  var method = 'GET'

  http.open(method, url);
  http.onreadystatechange = function(){
    if (http.readyState === XMLHttpRequest.DONE && http.status === 200){
      var data = JSON.parse(http.responseText);
      var weatherData = new Weather(cityName, data.weather[0].description.toUpperCase());
      weatherData.temperature = data.main.temp;
      updateWeather(weatherData);
    }else if (http.readyState === XMLHttpRequest.DONE && http.status !== 200){
      console.log("ERROR");
    }
  };
  http.send();
}


function updateWeather(weatherData){
  weatherCity.textContent = weatherData.cityName;
  weatherDescription.textContent = weatherData.description;
  weatherTemperature.textContent = weatherData.temperature;

  loadingText.style.display = 'none';
  weatherBox.style.display = 'block';
}


//         var kelvin = result.main.temp;
//         var fahrenheit = ((kelvin)*(9/5))-459.67;
//         var fahrenheit_rounded = Math.round(fahrenheit*10)/10;

//         var wind = Math.round((result.wind.speed/0.44704)*10)/10;

//         var message = (result.name+"<br><h5>"+ fahrenheit_rounded + "°F<br>"+wind+" mph<br>"+result.weather[0].description+"</h5>");
//         console.log(name)
//         $('#weather').append(message);
//         $('#weather-icon').attr("src", "http://openweathermap.org/img/w/"+result.weather[0].icon+".png");

//         });




