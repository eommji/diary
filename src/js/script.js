const yearElement = document.querySelector('.year--js');
const monthElement = document.querySelector('.month--js');

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const date = currentDate.getDate();

const monthLastDate = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

if (year % 400 === 0) {
  month[1] = 29;
} else if (year % 100 === 0) {
  month[1] = 28;
} else if (year % 4 === 0) {
  month[1] = 29;
}

const currentMonthLastDate = monthLastDate[currentDate.getMonth()];
const lastMonthLastDate = new Date(year, month - 1, 0).getDate();
const currentMonthFirstDay = new Date(year, month - 1, 1).getDay();
console.log(currentMonthFirstDay); // 이전 달의 마지막 일


yearElement.innerHTML = year;
monthElement.innerHTML = month;