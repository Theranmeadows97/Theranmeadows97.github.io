const APIURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=d9b4b3f8ea56e0a5489474e0d3ba6321";

fetch(APIURL)
 .then((response) => response.json())
 .then((town) => {
   console.log(town);
   let description = town.weather[0].description;
   document.getElementById('currently').innerHTML = description.charAt(0).toUpperCase() + description.slice(1);
   document.getElementById('temp').innerHTML = Math.round(town.main.temp);
   document.getElementById('humidity').innerHTML = town.main.humidity;
   document.getElementById('windspeed').innerHTML = Math.round(town.wind.speed);

   /* JSON for Windchill */
const temp = parseFloat(document.getElementById('temp').innerHTML);
const windspeed = parseFloat(document.getElementById('windspeed').innerHTML);

let windchill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windspeed, .16)) + (0.4275 * temp * Math.pow(windspeed, .16));
  if (temp <= 50 && windspeed > 3) {
     windchill = Math.round(windchill);
  } else {
     windchill = "N/A";
  }
document.getElementById('windchill').innerHTML = windchill;
});



/*JSON for Five day forecast */
const APIURL_forecast = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=d9b4b3f8ea56e0a5489474e0d3ba6321"
fetch(APIURL_forecast)
   .then(response => response.json())
   .then((jsObject) => {
       console.log(jsObject);
       const forecastData = jsObject.list.filter((element)=>element.dt_txt.includes('18:00:00'));

  console.log(forecastData);
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

   let day = 0;
  forecastData.forEach(forecast => {
    let x = new Date(forecast.dt_txt);
   document.getElementById('temp-'+(day+1)).textContent = Math.round(forecast.main.temp) + ' °F';
   document.getElementById('img'+(day+1)).src = "https://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png";
   document.getElementById('img'+(day+1)).alt = forecast.weather[0].description
  document.getElementById('day-'+(day+1)).textContent = weekdays[x.getDay()];
  day++;	  
  });
});
