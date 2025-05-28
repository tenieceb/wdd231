const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-description');
const threeDayIcon = document.querySelector('#three-day-forecast-icon');
const threeDayDescription = document.querySelector('#three-day-forecast');

const currentURL = 'https://api.openweathermap.org/data/2.5/weather?lat=35.60095&lon=-82.55402&units=imperial&appid=69a686f12b5de6f86f7f3a3a6148ca65';
const threeDayURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=35.60095&lon=-82.55402&units=imperial&appid=69a686f12b5de6f86f7f3a3a6148ca65';
// This API key is for educational/demo use only.
// Please do not reuse in production applications.


// STOPPING POINT REMINDER:  YOU ARE GOING TO CREATE A FUNCTION THAT WILL BE A GENERAL URL FETCH/TRY CATCH
// AND THEN CALL IT TWICE, ONCE FOR THE CURRENT WEATHER AND ONCE FOR THE THREE DAY FORECAST.
// YOU WILL THEN NEED TO FINISH WRITING OUT THE FUNCTION displayThreeDayResults(data)
async function apiFetch() {
      try {
    const response = await fetch(currentURL);
    if (response.ok) {
      const data = await response.json();
      displayCurrentResults(data);
      console.log(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

function displayCurrentResults(data) {
  currentTemp.innerHTML = `${data.main.temp.toFixed()}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  let description = data.weather[0].description;
  weatherIcon.setAttribute('SRC', iconsrc);
  weatherIcon.setAttribute('alt', description);
  captionDesc.textContent = `${description}`;
}

function displayThreeDayResults(data) {
  const threeDayData = data.list.filter(item => item.dt_txt.includes('12:00:00'));
  const threeDayForecast = threeDayData.slice(0, 3);
  
  threeDayForecast.forEach((item, index) => {
    const iconSrc = `https://openweathermap.org/img/wn/${item.weather[0].