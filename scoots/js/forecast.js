const weatherURL = "https://api.openweathermap.org/data/2.5/weather?id=3530103&units=imperial&APPID=17937c6d2819c6a178252b10a66c0a19";
fetch(weatherURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById('currentTemp').textContent = Math.round(jsObject.main.temp, 0);
    document.getElementById('condition').textContent = jsObject.weather[0].description;
    document.getElementById('humidity').textContent = jsObject.main.humidity;

  });


  const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=17937c6d2819c6a178252b10a66c0a19";
fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const fivedayforecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        console.log(fivedayforecast);


    

    });