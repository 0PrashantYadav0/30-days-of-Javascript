async function weatherApiCall(city){
  const key = "79525a3bb43b4759a7261618241908";
  const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`);
  const data = await res.json();
  if(data.error === undefined){
    return data;
  }
  return null
  
}

function categorizeWeather(code) {

  if (code === 1000) {
      return 'clear'; // Sunny
  } else if (code === 1003 || code === 1006 || code === 1009) {
      return 'clouds'; // Partly cloudy, Cloudy, Overcast
  } else if (code === 1030 || code === 1135 || code === 1147) {
      return 'mist'; // Mist, Fog, Freezing fog
  } else if (code === 1063 || code === 1150 || code === 1153 || code === 1180 || code === 1183 || code === 1186 || code === 1189 || code === 1192 || code === 1195) {
      return 'drizzle'; // Patchy light drizzle, Light drizzle, etc.
  } else if (code === 1066 || code === 1069 || code === 1072 || code === 1204 || code === 1207 || code === 1210 || code === 1213 || code === 1216 || code === 1219 || code === 1222 || code === 1225 || code === 1237 || code === 1249 || code === 1252 || code === 1255 || code === 1258 || code === 1261 || code === 1264 || code === 1279 || code === 1282) {
      return 'snow'; // Patchy snow, Light snow, Moderate snow, etc.
  } else if (code === 1240 || code === 1243 || code === 1246 || code === 1273 || code === 1276) {
      return 'rain'; // Light rain shower, Moderate or heavy rain shower, etc.
  } else {
      return 'clouds'; // If the code doesn't match any of the categories
  }
}

const button = document.querySelector('button');
const input = document.querySelector("input");

button.addEventListener('click',async () => {
  const city = input.value;
  if(!city){
    alert("Please enter city name")
    return
  }
  const data = await weatherApiCall(city);
  console.log(data)
  if(data === null){
    alert("please input valid location");
    return;
  }

  document.querySelector('.weather-icon').src = `../images/${categorizeWeather(data.current.condition.code)}.png`;

  document.querySelector('.temp').innerHTML = `${data.current.heatindex_c}°C`;
  document.querySelector('.city-name').innerHTML = data.location.name;
  document.querySelector('.wind').innerHTML = `${data.current.wind_kph} km/h`;
  document.querySelector('.humidity').innerHTML = `${data.current.humidity}%`;

  input.value = "";
}
)

console.log("hello")