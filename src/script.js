function updateTimes() {
  let sydneyDateElement = document.querySelector("#sydney-date");
  if (sydneyDateElement) {
    let sydneyTimeElement = document.querySelector("#sydney-time");
    let sydneyTime = moment().tz("Australia/Sydney");

    sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do, YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let newYorkDateElement = document.querySelector("#new-york-date");
  if (newYorkDateElement) {
    let newYorkTimeElement = document.querySelector("#new-york-time");
    let newYorkTime = moment().tz("America/New_York");

    newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do, YYYY");
    newYorkTimeElement.innerHTML = newYorkTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let tokyoDateElement = document.querySelector("#tokyo-date");
  if (tokyoDateElement) {
    let tokyoTimeElement = document.querySelector("#tokyo-time");
    let tokyoTime = moment().tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do, YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  let londonDateElement = document.querySelector("#london-date");
  if (londonDateElement) {
    let londonTimeElement = document.querySelector("#london-time");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("MMMM Do, YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
updateTimes();
setInterval(updateTimes, 1000);

function updateCity(event) {
  let cityTimezone = event.target.value;
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
          <div class="city/date">
            <h2 class="cityName">${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )}<small>${cityTime.format("A")}</small></div>
        </div>`;
}

let citiesSelectorElement = document.querySelector("#city");
citiesSelectorElement.addEventListener("change", updateCity);
//setInterval(updateCity, 1000);
