import { CardElem } from "./cardElem.js";
import { Sound } from "./sound.js";

const cardElem = CardElem();
const sound = Sound();

export function CardContro() {
  function resetCard() {
    cardElem.cardCloudy.classList.remove("select-card");
    cardElem.cardRain.classList.remove("select-card");
    cardElem.cardCold.classList.remove("select-card");
    cardElem.cardSun.classList.remove("select-card");
  }

  function cloudy() {
    sound.pauseMusic();
    cardElem.cardCloudy.classList.add("select-card");
    sound.playStormMusic();
    sound.backVolume();
  }

  function rain() {
    sound.pauseMusic();

    cardElem.cardRain.classList.add("select-card");
    sound.playMusic();
    sound.backVolume();
  }

  function cold() {
    sound.pauseMusic();

    cardElem.cardCold.classList.add("select-card");
    sound.playWinterMusic();
    sound.backVolume();
  }
  function sun() {
    sound.pauseMusic();

    cardElem.cardSun.classList.add("select-card");
    sound.playSummerMusic();
    sound.backVolume();
  }

  return {
    resetCard,
    cloudy,
    rain,
    cold,
    sun,
  };
}
