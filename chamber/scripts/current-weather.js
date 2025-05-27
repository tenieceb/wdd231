const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=35.60095&lon=-82.55402&units=imperial&appid=69a686f12b5de6f86f7f3a3a6148ca65';

async function apiFetch() {
      try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      // displayResults(data);
      console.log(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();
