"use strict";

// *****Trial Version****
// document.querySelector(".HP").addEventListener("click", function () {
//   //   let para = document.createElement("p");
//   //   //   let node = document.createTextNode("Hi, I am Harry Potter");
//   //   //   para.appendChild(node);
//   //   para.className = "text";
//   //   //   para.innerHTML = "HArry";
//   //   para.setAttribute("type", "text");
//   //   para.setAttribute("value", "Hi, I am Harry Potter");
//   //   document.body.appendChild(para);

//   let p = document.createElement("P");
//   let node =
//     document.createTextNode(`"You are protected, in short, by your ability to love! The only protection that can possibly work against the lure of power like Voldemort's! In spite of all the temptation you have endured, all the suffering, you remain pure of heart, just as pure as you were at the age of eleven, when you stared into a mirror that reflected your heart's desire, and it showed you only the way to thwart Lord Voldemort, and not immortality or riches. Harry, have you any idea how few wizards could have seen what you saw in that mirror?"
//   — Albus Dumbledore describing Harry's rare nature"`);
//   p.appendChild(node);
//   document.body.appendChild(p);
//   p.className = "para";
// });
let a = document.querySelectorAll(".btn");
const btnHP = document.querySelector(".btn.HRP");
const btnHG = document.querySelector(".btn.HRG");
const btnRW = document.querySelector(".btn.ROW");
a.forEach((btn) =>
  btn.addEventListener("click", function () {
    a.forEach((btn) => (btn.style.filter = "blur(5px)"));
  })
);
document.querySelector(".HRP").addEventListener("click", function () {
  const HPWindow = document.querySelector(".Window.HP");
  HPWindow.style.display = "inline";
  btnHG.style.pointerEvents = "none";
  btnRW.style.pointerEvents = "none";
});
document.querySelector(".HRG").addEventListener("click", function () {
  const HGWindow = document.querySelector(".Window.HG");
  HGWindow.style.display = "inline";
  btnHP.style.pointerEvents = "none";
  btnRW.style.pointerEvents = "none";
});
document.querySelector(".ROW").addEventListener("click", function () {
  const RWWindow = document.querySelector(".Window.RW");
  RWWindow.style.display = "inline";
  btnHG.style.pointerEvents = "none";
  btnHP.style.pointerEvents = "none";
});
function st() {
  document.querySelector(".Window.HP").style.display = "none";
  document.querySelector(".Window.HG").style.display = "none";
  document.querySelector(".Window.RW").style.display = "none";
}

let cl = document.querySelectorAll(".close");
cl.forEach((close) =>
  close.addEventListener("click", function () {
    // ****unable to apply css on class used for multiple EventSource, tried querySelectorAll as well, still figuring out*******
    st();
    a.forEach((btn) => (btn.style.filter = "grayscale(50%)"));
    location.reload(); ///because after adding pointer events to none, the other buttons stopped working (obiosuly) but if I reload the page it will work properly (obviously) I concluded that the other buttons will be disabled only when click event is happening however I am wrong//
  })
);

document.addEventListener("keydown", function () {
  st();
  a.forEach((btn) => (btn.style.filter = "grayscale(50%)"));
  location.reload();
});
