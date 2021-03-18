
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
.then(function (response) {
   return response.json();
})
.then(function (jsonObject) {
   //console.table(jsonObject);  // temporary checking for valid response and data parsing
   const towns = jsonObject['towns'];
   towns.sort((a,b) => (a.averageRainfall > b.averageRainfall) ? 1 : ((b.averageRainfall > a.averageRainfall) ? -1 : 0));
   towns.reverse();

   for (let i = 0; i < towns.length; i++) {
      if (towns[i].name == "Preston" || towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs") {
          
      let card = document.createElement('section');
      let name = document.createElement('h2');
      let motto = document.createElement('h4');
      let image = document.createElement('img');
      let yearFounded = document.createElement('p');
      let currentPopulation = document.createElement('p');
      let averageRainfall = document.createElement('p');
      let information = document.createElement('div');

      name.textContent = towns[i].name;
      motto.textContent = towns[i].motto;
      currentPopulation.textContent = 'Population: ' + towns[i].currentPopulation;
      averageRainfall.textContent = 'Annual Rainfall: ' + towns[i].averageRainfall + ' ' + 'inches';
      yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
      image.setAttribute('src', '/theranmeadows97.github.io/lesson9/images/' + towns[i].photo);
      image.setAttribute('alt', towns[i].name);
      information.setAttribute('id', 'information');

      card.appendChild(information);
      card.appendChild(image);
      information.appendChild(name);
      information.appendChild(motto);
      information.appendChild(yearFounded);
      information.appendChild(currentPopulation);
      information.appendChild(averageRainfall);
      

      document.querySelector('div.cards').appendChild(card);
      }
   }
});