const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(date.getUTCFullYear(), date.getMonth() + 1, 0).getDate();
  const firstDayIndex = date.getDay();
  const prevLastDay = new Date(date.getUTCFullYear(), date.getMonth(), 0).getDate();
  const lastDayIndex = new Date(date.getUTCFullYear(), date.getMonth() + 1, 0).getDay();
  const nextDays = 7 - lastDayIndex - 1;

  const monthName = ["January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"];

  document.querySelector(".date h1").innerHTML = monthName[date.getMonth()];
  document.querySelector(".date p").innerHTML = new Date().toDateString();
  document.getElementById('startDate').placeholder = new Date().toDateString();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }

}

document.querySelector('.prev').addEventListener('click', () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector('.next').addEventListener('click', () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});


//geolocation
var div = document.getElementById("location");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
  }
  else {
    div.innerHTML = "no";
  }
}

function showPosition(position){
  div.innerHTML=" Your current position is: (Lat: " + position.coords.latitude + " Long: " +position.coords.longitude +")";
}
getLocation();

//keyboard event to change the month using arrow keys
document.addEventListener('keydown', function (e) {
  switch (e.keyCode) {
    case 37:
      date.setMonth(date.getMonth() - 1);
      renderCalendar();
      break;
    case 39:
      date.setMonth(date.getMonth() + 1);
      renderCalendar();
      break;
  }
});

function checkKey(e) {
  e = e || window.event;

  if (e.keyCode == '37') {

  }
  else if (e.keyCode == '39') {

  }
}

const btn = document.getElementById('result');
btn.addEventListener('click', function () {
  computeDifference();
});

function computeDifference() {
  var startDate = document.getElementById('startDate').placeholder.toDate();
  var endDate = document.getElementById('endDate').placeholder.toDate();
  var timeDiff = (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);
  alert(timeDiff);
}

renderCalendar()
