"use strict";

const colors = [
  "#fec5bb",
  "#fcd5ce",
  "#fae1dd",
  "#e8e8e4",
  "#d8e2dc",
  "#ece4db",
  "#ffe5d9",
  "#ffd7ba",
  "#fec89a",
  "#ffadad",
  "#ffd6a5",
  "#fdffb6",
  "#caffbf",
  "#9bf6ff",
  "#a0c4ff",
  "#bdb2ff",
  "#ffc6ff",
  "#fffffc",
  "#005f73",
  "#0a9396",
  "#94d2bd",
  "#e9d8a6",
  "#ee9b00",
  "#ca6702",
  "#bb3e03",
  "#ae2012",
  "#9b2226",
  "#f6bd60",
  "#f7ede2",
  "#f5cac3",
  "#84a59d",
  "#f28482",
  "#ffbe0b",
  "#fb5607",
  "#ff006e",
  "#8338ec",
  "#3a86ff",
];

const colorDisplayOne = document.getElementById("color-display1");
const colorDisplayTwo = document.getElementById("color-display2");
const colorDisplayThree = document.getElementById("color-display3");
const colorDisplayFour = document.getElementById("color-display4");
const btn = document.getElementById("btn");

const generatedRandNum = () => {
  return Math.floor(Math.random() * colors.length);
};

const displayChangeOne = () => {
  const randomNum = generatedRandNum();
  const boxOne = document.querySelector(".box-1");
  const textOne = document.querySelector(".color-text-1");
  boxOne.style.backgroundColor = colors[randomNum];
  colorDisplayOne.textContent = colors[randomNum];
  textOne.textContent = colors[randomNum];
};

const displayChangeTwo = () => {
  const randNum2 = generatedRandNum();
  const boxTwo = document.querySelector(".box-2");
  const textTwo = document.querySelector(".color-text-2");
  boxTwo.style.backgroundColor = colors[randNum2];
  colorDisplayTwo.textContent = colors[randNum2];
  textTwo.textContent = colors[randNum2];
};

const displayChangeThree = () => {
  const randNum3 = generatedRandNum();
  const boxThree = document.querySelector(".box-3");
  const textThree = document.querySelector(".color-text-3");
  boxThree.style.backgroundColor = colors[randNum3];
  colorDisplayThree.textContent = colors[randNum3];
  textThree.textContent = colors[randNum3];
};

const displayChangeFour = () => {
  const randNum4 = generatedRandNum();
  const boxFour = document.querySelector(".box-4");
  const textFour = document.querySelector(".color-text-4");
  boxFour.style.backgroundColor = colors[randNum4];
  colorDisplayFour.textContent = colors[randNum4];
  textFour.textContent = colors[randNum4];
};

btn.addEventListener("click", displayChangeOne);
btn.addEventListener("click", displayChangeTwo);
btn.addEventListener("click", displayChangeThree);
btn.addEventListener("click", displayChangeFour);
