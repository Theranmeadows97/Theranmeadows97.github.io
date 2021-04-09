const APIURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=d9b4b3f8ea56e0a5489474e0d3ba6321";

fetch(APIURL)
 .then((response) => response.json())
 .then((town) => {
   console.log(town);
   let description = town.weather[0].description;
   document.getElementById('currently').innerHTML = description.charAt(0).toUpperCase() + description.slice(1);
   document.getElementById('humidity').innerHTML = town.main.humidity;
  });