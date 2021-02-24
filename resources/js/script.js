let currentW1eather = document.querySelector(".current-weather");
let bigWeatherIcon = document.querySelector(".big-icon");
let bigWeatherInfo = document.querySelector(".weather-info");

(async function smhiData() {
  const response = await fetch("https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/11.435558/lat/58.275573/data.json");
  const json = await response.json();

  // Select every div with the classes "plus", "temp-plus" and "bar" and add them to a variable. Logging this gives a nodeList.
  const timeSpans = document.querySelectorAll(".plus");
  const tempSpans = document.querySelectorAll(".next-temp");
  const weatherIcons = document.querySelectorAll(".bar");

  // Iterate through the length of timeSpans and get the current DateTime and parsing it, then send the data to the function to convert it to HH:MM and finally add them as text with DOM Manipulation.

  for (let i = 0; i < timeSpans.length; i++) {
    const getDateTime = json.timeSeries[i].validTime;
    const parseDateTime = new Date(Date.parse(getDateTime));
    const hourMinutes = convertTime(parseDateTime);
    timeSpans[i].textContent = hourMinutes;

    // foreach-loop that iterates thruogh every object to see if obj.name is "t", then "wsymb2". t to get the correct temperature and wsymb to get the correct value to convert to text and icon.
    json.timeSeries[i].parameters.forEach((obj) => {
      if (obj.name === "t") {
        tempSpans[i].textContent = `${obj.values[0]}°`;
        if (i === 0) {
          currentW1eather.textContent = `${obj.values[0]}°`;
        }
      }
      if (obj.name === "Wsymb2") {
        const weatherInfo = obj.values[0];
        const weatherName = convertToWeather(weatherInfo);
        if (i === 0) {
          bigWeatherIcon.classList.add(weatherName.icon);
          bigWeatherIcon.classList.remove("wi-alien");
          bigWeatherInfo.textContent = weatherName.name;
        }
        weatherIcons[i].classList.add(weatherName.icon);
        weatherIcons[i].classList.remove("wi-alien");
      }
    });
  }
})();

// Function to extract HH:MM from json converted dateTime.
function convertTime(time) {
  let hour = time.getHours();
  let minutes = time.getMinutes();
  // getMinutes only returns a single int so to get the time to show as e.g. 10:09 we need this if statement.
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${hour}:${minutes}`;
}

let weather = "";
let weatherIcon = "";
function convertToWeather(value) {
  if (value === 1) {
    weather = "Klart väder";
    weatherIcon = "wi-day-sunny";
  } else if (value === 2) {
    weather = "Lätt molnighet";
    weatherIcon = "wi-day-cloudy";
  } else if (value === 3) {
    weather = "Växlande molnighet";
    weatherIcon = "wi-day-cloudy-windy";
  } else if (value === 4) {
    weather = "Halvklart";
    weatherIcon = "wi-day-cloudy";
  } else if (value === 5) {
    weather = "Molningt";
    weatherIcon = "wi-cloudy";
  } else if (value === 6) {
    weather = "Mulet";
    weatherIcon = "wi-cloud";
  } else if (value === 7) {
    weather = "Dimma";
    weatherIcon = "wi-fog";
  } else if (value === 8) {
    weather = "Lätt regnskur";
    weatherIcon = "wi-sprinkle";
  } else if (value === 9) {
    weather = "Regnskur";
    weatherIcon = "wi-showers";
  } else if (value === 10) {
    weather = "Kraftig regnskur";
    weatherIcon = "wi-rain-wind";
  } else if (value === 11) {
    weather = "Åskskur";
    weatherIcon = "wi-thunderstorm";
  } else if (value === 12) {
    weather = "Lätt by av regn och snö";
    weatherIcon = "wi-thunderstorm";
  } else if (value === 13) {
    weather = "By av regn och snö";
    weatherIcon = "wi-day-sleet";
  } else if (value === 14) {
    weather = "Kraftig by av regn och snö";
    weatherIcon = "wi-sleet";
  } else if (value === 15) {
    weather = "Lätt snöby";
    weatherIcon = "wi-day-snow";
  } else if (value === 16) {
    weather = "Snöby";
    weatherIcon = "wi-snow";
  } else if (value === 17) {
    weather = "Kraftig snöby";
    weatherIcon = "wi-snow-wind";
  } else if (value === 18) {
    weather = "Lätt regn";
    weatherIcon = "wi-day-rain-mix";
  } else if (value === 19) {
    weather = "Regn";
    weatherIcon = "wi-rain";
  } else if (value === 20) {
    weather = "Kraftigt regn";
    weatherIcon = "wi-rain-wind";
  } else if (value === 21) {
    weather = "Åska";
    weatherIcon = "wi-lightning";
  } else if (value === 22) {
    weather = "Lätt snöblandat regn";
    weatherIcon = "wi-sleet";
  } else if (value === 23) {
    weather = "Snöblandat regn";
    weatherIcon = "wi-sleet";
  } else if (value === 24) {
    weather = "Kraftigt snöblandat regn";
    weatherIcon = "wi-day-sleet";
  } else if (value === 25) {
    weather = "Lätt snöfall";
    weatherIcon = "wi-day-snow";
  } else if (value === 26) {
    weather = "Snöfall";
    weatherIcon = "wi-snow";
  } else if (value === 27) {
    weather = "Kraftigt snöfall";
    weatherIcon = "wi-snow-wind";
  }
  const weatherInfo = {
    name: weather,
    icon: weatherIcon,
  };
  return weatherInfo;
}
