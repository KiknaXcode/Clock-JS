const hours = document.querySelector("#hour-of-clock");
const minutes = document.querySelector("#minute-of-clock");
const seconds = document.querySelector("#second-of-clock");

console.log(hours);
console.log(minutes);
console.log(seconds);

/*
const birthday = new Date('March 13, 08 04:20');

console.log(birthday.getHours());
// expected output: 4

Date and GetHours working Examples:
*/

function newClock() {
  let hoursNew = new Date().getHours();
  let minutesNew = new Date().getMinutes();
  let secondsNew = new Date().getSeconds();

  if (hoursNew > 12) {
    hoursNew = hoursNew - 12;
  }

  hours.innerHTML = hoursNew;
  minutes.innerHTML = minutesNew;
  seconds.innerHTML = secondsNew;

  setTimeout(() => {
    newClock();
  }, 1000);
  // tells to order this function every 1000 milisecond
}

newClock();
