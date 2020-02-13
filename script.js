"use strict";
window.addEventListener("DOMContentLoaded", start);
const elementInput = document.querySelector("#input");
const dropDown = document.querySelector("#list");
const elementOutput = document.querySelector("#output");
const btnActivate = document.querySelector("button");
let valueSelected;
let inputValue;
let newValue;

function start() {
  console.log("start");

  btnActivate.addEventListener("click", userOptions);
}

function userOptions() {}
