const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        const townsArray = towns.filter(towns => (towns.name == 'Soda Springs'))


        for (let i = 0; i < townsArray.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let eventList = document.createElement('p');


            eventList.textContent = townsArray[i].events;



           
            card.appendChild(eventList);


            document.querySelector('div.events').appendChild(card);
        }
    });


    const weatherURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=17937c6d2819c6a178252b10a66c0a19";
fetch(weatherURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
 
    document.getElementById('currentTemp').textContent = jsObject.main.temp;
    document.getElementById('highTemp').textContent = jsObject.main.temp_max;
    document.getElementById('windChill').textContent = windChill(jsObject.main.temp, jsObject.wind.speed);
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('windSpeed').textContent = jsObject.wind.speed;


  });

const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=17937c6d2819c6a178252b10a66c0a19";
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
            document.getElementById(`forecast${day+1}`).textContent = forecast.main.temp;
            document.getElementById(`dayofweek${day+1}`).textContent = weekdays[d.getDay()];

            day++;
        });
    });