async function getWeather() {
  let city = document.getElementById("city").value;

  const url = `https://wttr.in/${city}?format=j1`;

  const response = await fetch(url);

  const data = await response.json();

  let temp = data.current_condition[0].temp_C;

  let humidity = data.current_condition[0].humidity;

  let weather = data.current_condition[0]
    .weatherDesc[0]
    .value;

  document.getElementById(
    "result"
  ).innerHTML =

  `
<h2>${city}</h2>

<p>🌡 溫度：${temp}°C</p>

<p>💧 濕度：${humidity}%</p>

<p>☁️ 天氣：${weather}</p>
`;

  saveData(
    city,
    temp,
    weather
  );
}

async function saveData(city, temp, weather) {
  const gasURL = "https://script.google.com/macros/s/AKfycbzdPGgp9mG66ZWXwofV3tXfjHPX5O872-c5jQSqj4IV-8R_oLY47t98Q0lJlTbvz5N8aQ/exec";

  fetch(gasURL,{

  method:"POST",

  body:JSON.stringify({

  city:city,
  temp:temp,
  weather:weather

  })

  });
}
