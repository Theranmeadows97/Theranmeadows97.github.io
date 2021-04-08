/* const directory = [
  {
    "name": "SeaCa Plastic Packaging",
    "address": "13549 W Willow Ave, Surprise, AZ 85379",
    "phone": "(623) 900-7335",
    "email": "info@seacapackaging.com",
    "logo":"/Users/theranmeadows/Desktop/BYU-Idaho/Winter 2021/WDD 231/theranmeadows97.github.io/Chamber of Commerce/seacalogo.png",
    "website":"https://www.seattlebox.com/Plastic/seaca_plastic_packaging/"
  },
  {
    "name": "Trimaco",
    "address": "13600 W Sweetwater Ave, Surprise, AZ",
    "phone": "(866) 759-6628",
    "email": "customerservice@trimaco.com",
    "logo":"/Users/theranmeadows/Desktop/BYU-Idaho/Winter 2021/WDD 231/theranmeadows97.github.io/Chamber of Commerce/trimacologo.png",
    "website":"https://trimaco.com/"
  },
  {
    "name": "MagQu",
    "address": "12425 W Bell Rd. Suite 107 Surprise, AZ 85378",
    "phone": "(623) 792-8888",
    "email": "wp.chen@magqu.com",
    "logo":"/Users/theranmeadows/Desktop/BYU-Idaho/Winter 2021/WDD 231/theranmeadows97.github.io/Chamber of Commerce/magqulogo.png",
    "website":"https://www.magqu.us/"
  },
  {
    "name": "Destiny Springs Healthcare",
    "address": "17300 N Dysart Rd, Surprise, AZ 85378",
    "phone": "(623) 233-3000",
    "email": "intake2@destinysprings.com",
    "logo":"/Users/theranmeadows/Desktop/BYU-Idaho/Winter 2021/WDD 231/theranmeadows97.github.io/Chamber of Commerce/destinylogo.png",
    "website":"https://www.destinyspringshealthcare.com/"
  },
  {
    "name": "In-N-Out Burger",
    "address": "14321 W Bell Rd, Surprise, AZ 85374",
    "phone": "(800) 786-1000",
    "email": "https://www.in-n-out.com/contact",
    "logo":"/Users/theranmeadows/Desktop/BYU-Idaho/Winter 2021/WDD 231/theranmeadows97.github.io/Chamber of Commerce/destinylogo.png",
    "website":"https://www.in-n-out.com/"
  },
  {
    "name": "BoSa Donuts",
    "address": "15261 N Reems Rd #104, Surprise, AZ 85379",
    "phone": "480-814-1681",
    "email": "https://bosadonutsaz.com/contact/",
    "logo":"/Users/theranmeadows/Desktop/BYU-Idaho/Winter 2021/WDD 231/theranmeadows97.github.io/Chamber of Commerce/destinylogo.png",
    "website":"https://bosadonutsaz.com/"
  },
  {
    "name": "Arrington Accounting & Tax Services",
    "address": "12425 W. Bell Rd Building A, Suite 128 Surprise, AZ. 85378",
    "phone": "(623) 217-2948",
    "email": "info@aataxllc.com",
    "logo":"/Users/theranmeadows/Desktop/BYU-Idaho/Winter 2021/WDD 231/theranmeadows97.github.io/Chamber of Commerce/arringtonlogo.png",
    "website":"https://www.aataxllc.com/index.php"
  }
]

document.getElementById("cards").innerHTML = `<h2> Companies (${directoy.length} results)</h2>`  */

const requestURL = 'https://theranmeadows97.github.io/ChamberofCommerce/directory.json';
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