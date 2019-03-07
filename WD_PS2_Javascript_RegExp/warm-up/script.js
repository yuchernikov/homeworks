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
  document.getElementById("resultSum").innerHTML =
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
  document.getElementById("resultSeconds").innerHTML =
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
  document.getElementById("resultTime").innerHTML =
  "The resuit is: " + (hours * 3600 + minutes * 60 + seconds);

}
