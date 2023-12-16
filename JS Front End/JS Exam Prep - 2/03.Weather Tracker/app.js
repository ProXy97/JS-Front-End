const baseURL = 'http://localhost:3030/jsonstore/tasks/';

const loadHistoryBtn = document.getElementById('load-history');
const historyList = document.getElementById('list');

const addWeatherBtn = document.createElement('add-weather');
const editWeatherBtn = document.createElement('edit-weather');


loadHistoryBtn.addEventListener('click', (e) => {
    fetch(baseURL)
    .then(res => res.json())
    .then(result =>  {
        renderWeatherInTowns(Object.values(result));
    })
})

function renderWeatherInTowns(weatherTowns)
{
    historyList.innerHTML = '';
    weatherTowns
        .map(renderWeather)
        .forEach(weatherElement => historyList.appendChild(weatherElement))
}

function renderWeather(weather)
{
    
    const container = document.createElement('div');
    container.className = 'container';

    const h2 = document.createElement('h2');
    h2.textContent = weather.location;

    const dateh3 = document.createElement('h3');
    dateh3.textContent = weather.date;

    const temperatureh3 = document.createElement('h3');
    temperatureh3.textContent = weather.temperature;
    temperatureh3.id = "celsius";

    const buttonsDiv = document.createElement('div');
    buttonsDiv.id = "buttons-container";

    const changeBtn = document.createElement('button');
    changeBtn.className = "change-btn";
    changeBtn.textContent = "Change";

    const deleteBtn = document.createElement('button');
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = 'Delete';

    buttonsDiv.appendChild(changeBtn);
    buttonsDiv.appendChild(deleteBtn);
    container.appendChild(h2);
    container.appendChild(dateh3);
    container.appendChild(temperatureh3);
    container.appendChild(buttonsDiv);

    return container;
 }