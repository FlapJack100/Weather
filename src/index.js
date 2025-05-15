import './style.css'

const container = document.createElement('div');
container.className = "container"
const title = document.createElement('h1');
title.textContent = 'Погода'

const input = document.createElement('input');
input.type = 'text'
input.placeholder = 'Введите город'

const button = document.createElement('button');
button.textContent = 'Узнать погоду'
const result = document.createElement('div');

container.appendChild(title);
container.appendChild(input);
container.appendChild(button);
container.appendChild(result);

document.body.appendChild(container);

button.addEventListener('click',() => {
    const city = input.value.trim()
    if (!city) {
        result.innerHTML = '<p style="color:red;">Введите название города</p>';
        return;
    }
    result.innerHTML = '<div class="loader"></div>'

    const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=ru&format=json`;

  fetch(geoUrl)
    .then(res => {
      if (!res.ok) throw new Error("Город не найден");
      return res.json();
    })
    .then(data => {
      if (!data.results || data.results.length === 0) {
        throw new Error("Город не найден");
      }

      const lat = data.results[0].latitude;
      const lon = data.results[0].longitude;
      const name = data.results[0].name;
      const country = data.results[0].country;

      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

      return fetch(url)
        .then(res => {
          if (!res.ok) throw new Error("Ошибка при получении погоды");
          return res.json();
        })
        .then(data => {
          result.innerHTML = `
            <p><strong>${name}, ${country}</strong></p>
            <p>Температура: ${data.current_weather.temperature}°C</p>
            <p>Погода (код): ${data.current_weather.weathercode}</p>
            <p>Ветер: ${data.current_weather.windspeed} км/ч</p>
          `;
        });
    })
    .catch(err => {
      result.innerHTML = `<p style="color:red;">Ошибка: ${err.message}</p>`;
    });
});

