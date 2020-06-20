const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject); // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        const townsArray = towns.filter(towns => (towns.name == 'Preston' || towns.name == 'Fish Haven' || towns.name == 'Soda Springs'))

        townsArray.forEach (town => {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let motto = document.createElement('h4');
            let yearFounded = document.createElement('p');
            let population = document.createElement('p');
            let rainFall = document.createElement('p');
            let image = document.createElement("img");

            h2.textContent = town.name;
            motto.textContent = town.motto;
            yearFounded.textContent = 'Year Founded: ' + town.yearFounded;
            population.textContent = 'Population: ' +  town.currentPopulation;
            rainFall.textContent = 'Annual Rain Fall: ' +  town.averageRainfall;
            image.setAttribute('src', 'images/' + town.photo);
            image.setAttribute('alt', town.name);


            card.appendChild(h2);
            card.appendChild(motto);
            card.appendChild(yearFounded);
            card.appendChild(population);
            card.appendChild(rainFall);
            card.appendChild(image);



            document.querySelector('div.towns').appendChild(card);
        });
    });