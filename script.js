// Remember, we're gonna use strict mode in all scripts now!
/*
"use strict";

const x = 45;

console.log();

const calcAge = (birthYear) => 2020 - birthYear;
console.log(calcAge(1880));



const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const ammplitude = calcTempAmplitude(temperatures);
console.log(ammplitude);



const measureKelvin = function () {
  const measurment = {
    type: "temp",
    unit: "celzius",
    value: Number(prompt("Degrees celziuse:")),
  };

  const kelvin = measurment.value + 273;
  return kelvin;
};

console.log(measureKelvin());

const t1 = [4, 5, 8, -21, 2];
const t2 = [1, 28, -7, -16];

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const ampNew = calcTempAmplitudeNew(t1, t2);
console.log(ampNew);

const measureKelvin = function () {
  const measurment = {
    type: "temp",
    unit: "celzius",
    //value: Number(prompt("Degrees celziuse:")),
    value: 10,
  };

  const kelvin = measurment.value + 273;
  return kelvin;
};

console.log(measureKelvin());

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const ampBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(ampBug);

*/

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}C in ${i + 1} days ...`;
  }
  console.log("..." + str);
};

printForecast(data2);
