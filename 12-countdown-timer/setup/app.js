const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');


const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const currentDay = currentDate.getDate();

const futureDate = new Date(currentYear, currentMonth, currentDay + 5, 11, 10, 40);

const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}`;


const getRemainingTime = () => {
  const remainingTime = futureDate.getTime() - new Date().getTime();
  if (remainingTime <= 0) {
    clearInterval(countDown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
  }

  const aDay = 24 * 60 * 60 * 1000;
  const anHour = 60 * 60 * 1000;
  const aMinute = 60 * 1000;
  const aSecond = 1000;
  const days = Math.floor(remainingTime / aDay);
  const hours = Math.floor((remainingTime % aDay) / anHour); // remove days
  const minutes = Math.floor((remainingTime % anHour) / aMinute); // remove hours
  const seconds = Math.floor((remainingTime % aMinute) / aSecond); // remove hours
  const values = [days, hours, minutes, seconds];
  const format = (num) => (num < 10) ? `0${num}` : num;


  items.forEach((item, index) => item.textContent = values[index]);

};
const countDown = setInterval(getRemainingTime, 1000);
getRemainingTime();

// console.log((365 * 24 * 60 * 60 * 1000) / 1000);