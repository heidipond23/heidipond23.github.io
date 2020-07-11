const weatherURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=17937c6d2819c6a178252b10a66c0a19";
fetch(weatherURL)
  .then((response) => response.json())
  .then((jsObject) => {
 
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

        let day = fivedayforecast[4];
        console.log(day);

        document.getElementById("forecastdiv").textContent= day;


       /* const weekdays = ['Sun',  'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let day = 0;
        fivedayforecast.forEach(forecast => {
            let d = new Date(forecast.dt_txt);
            const imagesrc = 'https://openweathermap.org/img/w/' + forecast.weather[0].icon + '.png'; // note the concatenation
            const desc = forecast.weather[0].description; // note how we reference the weather array

            let div = document.createElement('div');
            let pDay = document.createElement('p');
            let spanDay = document.createElement('span');
            spanDay.setAttribute('id', `dayofweek${day+1}`);
            let icon = document.createElement('img');
            icon.setAttribute('src', imagesrc);
            icon.setAttribute('alt', desc);
            let pForecast = document.createElement('p');
            let spanForecast = document.createElement('span');
            spanForecast.setAttribute('id', `forecast${day+1}`);

            div.appendChild(pDay);
            pDay.appendChild(spanDay);
            div.appendChild(icon);
            div.appendChild(pForecast);
            pForecast.appendChild(spanForecast);

            document.querySelector('div.forecastdiv').appendChild(div);
            document.getElementById(`forecast${day+1}`).textContent = Math.round(forecast.main.temp, 0);
            document.getElementById(`dayofweek${day+1}`).textContent = weekdays[d.getDay()];

            day++;
        });*/
    });