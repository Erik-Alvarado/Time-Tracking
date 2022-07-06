const dailyBtn = document.querySelector("#daily");
const weeklyBtn = document.querySelector("#weekly");
const monthlyBtn = document.querySelector("#monthly");
const timeOptions = document.querySelectorAll(".option");

const hours = document.querySelectorAll(".current-num");
const lastTime = document.querySelectorAll(".previous-num");
//event listeners
timeOptions.forEach((time) =>
  time.addEventListener("click", (ev) => timeSelect(ev))
);
dailyBtn.addEventListener("click", dailyData);
weeklyBtn.addEventListener("click", weeklyData);
monthlyBtn.addEventListener("click", monthlyData);
//functions
function timeSelect(ev) {
  let clickedItem = ev.target.parentNode;
  timeOptions.forEach((time) => {
    if (time.isSameNode(clickedItem)) {
      if (time.classList.contains("open")) {
        time.classList.remove("open");
      } else {
        time.classList.add("open");
      }
    } else {
      time.classList.remove("open");
    }
  });
}

function dailyData() {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      hours.forEach((e, i) => {
        hours[i].innerHTML = data[i].timeframes.daily.current + "hrs";
        lastTime[i].innerHTML =
          "Yesterday - " + data[i].timeframes.daily.previous + "hrs";
      });
    });
}
function weeklyData() {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      hours.forEach((e, i) => {
        hours[i].innerHTML = data[i].timeframes.weekly.current + "hrs";
        lastTime[i].innerHTML =
          "Last Week - " + data[i].timeframes.weekly.previous + "hrs";
      });
    });
}
function monthlyData() {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      hours.forEach((e, i) => {
        hours[i].innerHTML = data[i].timeframes.monthly.current + "hrs";
        lastTime[i].innerHTML =
          "Last Month - " + data[i].timeframes.monthly.previous + "hrs";
      });
    });
}
dailyData();
