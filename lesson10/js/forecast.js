const weatherURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=17937c6d2819c6a178252b10a66c0a19";
fetch(weatherURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; // note the concatenation
    const desc = jsObject.weather[0].description; // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);
  });

const forecastURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=17937c6d2819c6a178252b10a66c0a19";
fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const fivedayforecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        console.log(fivedayforecast);

        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let day = 0;
        fivedayforecast.forEach(forecast => {
            let d = new Date(forecast.dt_txt);
            document.getElementById(`forecast${day+1}`).textContent = forecast.main.temp;
            document.getElementById(`dayofweek${day+1}`).textContent = weekdays[d.getDay()];
            day++;
        });
    });