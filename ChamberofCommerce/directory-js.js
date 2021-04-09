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
      let name = document.createElement('span');
      let address = document.createElement('span');
      let phone = document.createElement('span');
      let email = document.createElement('span');
      let logo = document.createElement('img');
      let website = document.createElement('p');

      name.textContent = directory[i].name;
      address.innerHTML = "<br><strong>Address:</strong> <br>" + directory[i].address;
      phone.innerHTML = "<br><strong>Phone: </strong>" + directory[i].phone;
      email.innerHTML = "<br><strong>Email: </strong>" + directory[i].email;
      website.innerHTML = "<strong>Website: </strong>" + directory[i].website;
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