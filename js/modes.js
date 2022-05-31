import { CardElem } from "./cardElem.js";

const cardElem = CardElem();

export function Modes() {
  let btnDay = document.querySelector(".day");
  let btnNight = document.querySelector(".night");
  let time = document.querySelector(".time");
  let controls = document.querySelector("#controls");

  btnDay.addEventListener("click", night);
  btnNight.addEventListener("click", day);

  function night() {
    btnNight.classList.remove("hide");
    btnDay.classList.add("hide");
    document.body.classList.add("night");
    time.classList.add("nightText");
    controls.classList.add("controlsNight");
    cardAddNight();
  }
  function day() {
    btnNight.classList.add("hide");
    btnDay.classList.remove("hide");
    document.body.classList.remove("night");
    time.classList.remove("nightText");
    controls.classList.remove("controlsNight");

    cardRemoveNight();
  }
  function cardAddNight() {
    cardElem.cardCloudy.classList.add("cardNight");
    cardElem.cardRain.classList.add("cardNight");
    cardElem.cardCold.classList.add("cardNight");
    cardElem.cardSun.classList.add("cardNight");
  }
  function cardRemoveNight() {
    cardElem.cardCloudy.classList.remove("cardNight");
    cardElem.cardRain.classList.remove("cardNight");
    cardElem.cardCold.classList.remove("cardNight");
    cardElem.cardSun.classList.remove("cardNight");
  }

  return {
    btnDay,
    btnNight,
    time,
    controls,
    night,
    day,
    cardAddNight,
    cardRemoveNight,
  };
}
