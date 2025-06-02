const current = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const api = 'b5e2555e1ef2a46638cb195b45b6bf3f';
// Trier, Germany is located at 49.75° N latitude and 6.64° E longitude. 
const url = `https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=${api}`;

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

function displayResults(data) {
  current.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.___`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc );
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = `${desc}`;
}

apiFetch();