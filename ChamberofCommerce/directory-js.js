const requestURL = 'https://theranmeadows97.github.io/ChamberofCommerce/directory-json.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const directory = jsonObject['directory'];

    for (let i = 0; i < directory.length; i++ ) {
      let card = document.createElement('section');
      let name = document.createElement('h2');
      let address = document.createElement('p');
      let phone = document.createElement('p');
      let email = document.createElement('p');
      let logo = document.createElement('img');
      let website = document.createElement('p');

      name.textContent = directory[i].name + (i+1);
      address.innerHTML = "address: " + directory[i].address;
      phone.innerHTML = "phone: " + directory[i].phone;
      email.innerHTML = "email: " + directory[i].email;
      website.innerHTML = "website: " + directory[i].website;
      logo.setAttribute('src', directory[i].logo);

      card.appendChild(name);
      card.appendChild(address);
      card.appendChild(phone);
      card.appendChild(email);
      card.appendChild(website);
      card.appendChild(logo);

      document.querySelector('div.cards').appendChild(card);
    }
  });