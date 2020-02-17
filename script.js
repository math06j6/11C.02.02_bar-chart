"use strict";

document.addEventListener("DOMContentLoaded", start);

const myArray =[];

function start() {

  let random = (Math.floor(Math.random() * 32));
  if (myArray.length < 40)  {
    myArray.push(random);
    console.log("push");
    //move along - nothing to see here
    setHeight(myArray.length-1);
  } else {
    //Remove one entriy from end of array.
    myArray.shift();
    console.log("shift");
    start();

  }
console.log(myArray.length-1)
  
}

function setHeight(number) {
  
 // for (let number = 0; number < myArray.length; number++) {

    const partOfBar = document.createElement("div");
    partOfBar.classList.add("bar");
    document.querySelector("#container").appendChild(partOfBar);
  console.log(myArray[number]);
    let bar;
    bar = document.querySelector(`#container > div:nth-child(${number + 1})`);
    bar.style.setProperty("--height", myArray[number]);
 // }


  // goes to delay function
  setTimeout(start, 500);
}

