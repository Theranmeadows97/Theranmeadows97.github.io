const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];

    for (let i = 0; i < prophets.length; i++ ) {
      let card = document.createElement('section');
      let name = document.createElement('h2');
      let birthdate = document.createElement('p');
      let place = document.createElement('p');
      let picture = document.createElement('img');

      name.textContent = prophets[i].name + ' ' + prophets[i].lastname + " - "  + (i+1);
      birthdate.innerHTML = "Date of Birth: " + prophets[i].birthdate;
      place.innerHTML = "Place of Birth: " + prophets[i].birthplace;
      picture.setAttribute('src', prophets[i].imageurl);

      card.appendChild(name);
      card.appendChild(birthdate);
      card.appendChild(place);
      card.appendChild(picture);

      document.querySelector('div.cards').appendChild(card);
    }
  });