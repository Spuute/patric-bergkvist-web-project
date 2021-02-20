(async function smhiData() {
  const response = await fetch("https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/11.435558/lat/58.275573/data.json");
  const json = await response.json();
  console.log(json);

  const tempNow = json.timeSeries[0].parameters[11].values[0];
  const sight = json.timeSeries[0].parameters[12].values[0];
  const icon = json.timeSeries[0].parameters[18].values[0];
  const whatIcon = convertToWeather(icon);

  //FIXME: Take a look and see if it is possible to get the code below cleaner.

  document.querySelector(".current-weather").textContent = `${tempNow}°`;
  document.querySelector(".weather-info").textContent = whatIcon;
  //document.querySelector("#sikt").textContent = `Klar sikt i ${sight} km!`;
  document.querySelector(".wi-night-sleet").classList.add("wi-cloudy");
  document.querySelector(".wi-night-sleet").classList.remove("wi-night-sleet");
  document.querySelector(".temp-plus-one").textContent = `${json.timeSeries[1].parameters[11].values[0]}°`;
  document.querySelector(".temp-plus-two").textContent = `${json.timeSeries[2].parameters[11].values[0]}°`;
  document.querySelector(".temp-plus-three").textContent = `${json.timeSeries[3].parameters[11].values[0]}°`;
  document.querySelector(".temp-plus-four").textContent = `${json.timeSeries[4].parameters[11].values[0]}°`;
  document.querySelector(".temp-plus-five").textContent = `${json.timeSeries[5].parameters[11].values[0]}°`;
  document.querySelector(".temp-plus-six").textContent = `${json.timeSeries[6].parameters[1].values[0]}°`;

  // Select every div with the class "plus" and add them to a variable. Logging this gives a nodeList.
  let timeSpans = document.querySelectorAll(".plus");

  // Iterate through the length of timeSpans and get the current DateTime and parsing it, then send the data to the function to convert it to HH:MM and finally add them as text with DOM Manipulation.
  for (let i = 0; i < timeSpans.length; i++) {
    let getDateTime = json.timeSeries[i].validTime;
    let parseDateTime = new Date(Date.parse(getDateTime));
    let hourMinutes = convertTime(parseDateTime);
    timeSpans[i].textContent = hourMinutes;
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

function convertToWeather(value) {
  if (value === 1) {
    weather = "Klart väder";
  } else if (value === 2) {
    weather = "Lätt molnighet";
  } else if (value === 3) {
    weather = "Variable Cloudness";
  } else if (value === 4) {
    weather = "Halvklart";
  } else if (value === 5) {
    weather = "Molningt";
  } else if (value === 6) {
    weather = "Mulet";
  } else if (value === 7) {
    weather = "DImma";
  } else if (value === 8) {
    weather = "Lätt regnskur";
  } else if (value === 9) {
    weather = "Regnskur";
  } else if (value === 10) {
    weather = "Kraftig regnskur";
  } else if (value === 11) {
    weather = "Åskskur";
  } else if (value === 12) {
    weather = "Lätt by av regn och snö";
  } else if (value === 13) {
    weather = "By av regn och snö";
  } else if (value === 14) {
    weather = "Kraftig by av regn och snö";
  } else if (value === 15) {
    weather = "Lätt snöby";
  } else if (value === 16) {
    weather = "Snöby";
  } else if (value === 17) {
    weather = "Kraftig snöby";
  } else if (value === 18) {
    weather = "Lätt regn";
  } else if (value === 19) {
    weather = "Regn";
  } else if (value === 20) {
    weather = "Kraftigt regn";
  } else if (value === 21) {
    weather = "Åska";
  } else if (value === 22) {
    weather = "Lätt snöblandat regn";
  } else if (value === 23) {
    weather = "Snöblandat regn";
  } else if (value === 24) {
    weather = "Kraftigt snöblandat regn";
  } else if (value === 25) {
    weather = "Lätt snöfall";
  } else if (value === 26) {
    weather = "Snöfall";
  } else if (value === 27) {
    weather = "Kraftigt snöfall";
  }
  return weather;
}
