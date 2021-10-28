// 9886e4a67625f4b942c9773591d79044

const weatherResult = document.getElementById("weatherResult");

function seeWeather() {
  const city = document.getElementById("city").value;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9886e4a67625f4b942c9773591d79044&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      // console.log(myJson.articles[0].title);
      console.log(myJson);
      showWeather(myJson);
    });
}
function showWeather(myJson) {
  let temp = myJson.main.temp;
  console.log(temp);
  let cityName = myJson.name;
  console.log(cityName);
  let cityWeather = myJson.weather[0].description;
  console.log(cityWeather);
  let myIcon = myJson.weather[0].icon;
  console.log(myIcon);
  //   weatherResult.innerHTML = `<h2>${cityName}</h2><p>Tempreture: ${temp}°C</p><p>${cityWeather}</p><img src="http://openweathermap.org/img/wn/${myIcon}@2x.png">`;
  weatherResult.innerHTML = `<h2>${cityName}</h2><p>Tempreture: ${temp}°C</p><p>${cityWeather}</p><img src="./icon/${cityWeather}.svg" alt="icon-logo">`;
}
