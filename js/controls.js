import { CardElem } from "./cardElem.js";
import { Sound } from "./sound.js";
const card = CardElem();
const sound = Sound();

export function controls() {
  function resetCard() {
    card.cardCloudy.classList.remove("select-card");
    card.cardRain.classList.remove("select-card");
    card.cardCold.classList.remove("select-card");
    card.cardSun.classList.remove("select-card");
  }

  function cloudy() {
    sound.pauseMusic();
    card.cardCloudy.classList.add("select-card");
    sound.playStormMusic();
    sound.backVolume();
  }

  function rain() {
    sound.pauseMusic();

    card.cardRain.classList.add("select-card");
    sound.playMusic();
    sound.backVolume();
  }

  function cold() {
    sound.pauseMusic();

    card.cardCold.classList.add("select-card");
    sound.playWinterMusic();
    sound.backVolume();
  }
  function sun() {
    sound.pauseMusic();

    card.cardSun.classList.add("select-card");
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
