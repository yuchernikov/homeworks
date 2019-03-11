function countSum() {
  let min = +document.getElementById("firstNumber").value;
  let max = +document.getElementById("secondNumber").value;
  if (min > max) {
    let temp = max;
    max = min;
    min = temp;
  }
  let sum = 0;
  for (var i = min + 1; i < max; i++) {
    let str = String(i);
    let lastChar = str.charAt(str.length - 1);
    if (lastChar == 2 || lastChar == 3 || lastChar == 7) {
      sum += i;
    }
  }
  document.getElementById("resultSum").innerText =
  "The resuit is: " + sum;
}

function countSeconds() {
  let seconds = +document.getElementById("seconds").value;
  let hours = Math.floor(seconds / 3600);
  let rest = seconds % 3600;
  let minutes = Math.floor(rest / 60);
  seconds = rest % 60;
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  document.getElementById("resultSeconds").innerText =
  "The resuit is: " + hours + ":" + minutes + ":" + seconds;
}

function countTime() {
  let inputString = document.getElementById("time").value;
  console.log(inputString);
  let arrayOfStrings = inputString.split(":");
  console.log(arrayOfStrings);
  let hours = +arrayOfStrings[0];
  console.log(hours);
  let minutes = +arrayOfStrings[1];
  let seconds = +arrayOfStrings[2];
  document.getElementById("resultTime").innerText =
  "The resuit is: " + (hours * 3600 + minutes * 60 + seconds);
}

function countDateTime() {
  const firstDatetime = document.getElementById("firstDatetime").value;
  const secondDatetime = document.getElementById("secondDatetime").value;
  console.log("first "+firstDatetime);
  console.log("secon "+secondDatetime);
  if(firstDatetime === "" || secondDatetime === ""){
    document.getElementById("resultDateTime").innerHTML =
    "The resuit is: date is not correct!";
    //  alert(typeof (firstDatetime));
    return;
  }

  let minDate = new Date(firstDatetime);
  let maxDate = new Date(secondDatetime);
  if (minDate.getTime() > maxDate.getTime()){
    [minDate,maxDate] = [maxDate,minDate];
  }
  console.log("min "+minDate);
  console.log("max "+maxDate);

  const minYear = minDate.getUTCFullYear();
  const minMonth = minDate.getUTCMonth() + 1;
  const minDay = minDate.getUTCDate();
  const minHour = minDate.getUTCHours();
  const minMinute = minDate.getUTCMinutes();
  const maxYear = maxDate.getUTCFullYear();
  const maxMonth = maxDate.getUTCMonth() + 1;
  const maxDay = maxDate.getUTCDate();
  const maxHour = maxDate.getUTCHours();
  const maxMinute = maxDate.getUTCMinutes();
  console.log("max "+maxYear+" "+maxMonth+" "+maxDay+" "+maxHour+" "+maxMinute);
  console.log("min "+minYear+" "+minMonth+" "+minDay+" "+minHour+" "+minMinute);

  let years = maxYear - minYear;

  let monthes = maxMonth - minMonth;
  if (maxMonth < minMonth){
    years--;
    monthes += 12;
  }

  let days = maxDay - minDay;
  if (maxDay < minDay){
    if(monthes === 0){
      monthes = 11;
      years--;
    } else {
      monthes--;
    }
    days += daysAtPrevMonth(maxMonth, maxYear);
    // let prevMonth = maxMonth - 1;
    // if (prevMonth === 2){
    //   if (maxYear % 4 === 0){
    //     days += 29;
    //   } else{
    //     days += 28;
    //   }
    // } else if (prevMonth === 4 || prevMonth === 6 || prevMonth === 9 ||
    //   prevMonth === 11){
    //     days += 30;
    // } else{
    //   days += 31;
    // }
  }

  let minutes = maxMinute - minMinute;
  let hours = maxHour - minHour;

  if (maxMinute < minMinute){
    hours--;
    minutes += 60;
  }

  if (maxHour < minHour){
    if (days === 0) {
      days += daysAtPrevMonth(maxMonth, maxYear) - 1;
      monthes--;
    } else {
      days--;
    }
    hours += 24;
  }


    document.getElementById("resultDatetime").innerHTML =
    "The resuit is: " + years + " years " + monthes + " monthes " + days +
    " days " + hours + " hours " + minutes + " minutes ";
  }

  function daysAtPrevMonth(maxMonth, maxYear){
    let prevMonth = maxMonth - 1;
    if (prevMonth === 2){
      if (maxYear % 4 === 0){
        return 29;
      } else{
        return 28;
      }
    } else if (prevMonth === 4 || prevMonth === 6 || prevMonth === 9 ||
      prevMonth === 11){
        return 30;
    } else{
      return 31;
    }
  }
