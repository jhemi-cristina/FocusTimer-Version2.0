import { Timer } from "./timer.js";
import { Sound } from "./sound.js";
import { CardElem } from "./cardElem.js";
import { Elements } from "./elements.js";
const cardElem = CardElem();
const elements = Elements();
const timer = Timer();
const sound = Sound();

export function TimeContro() {
  function startPlay() {
    timer.countDown();
    sound.playClickSound();
    elements.btnPause.classList.remove("hide");
    elements.btnPlay.classList.add("hide");
    cardElem.setVolume();
  }

  function addFive() {
    elements.minutes = Number(elements.displayMinutes.innerHTML);
    elements.seconds = Number(elements.displaySeconds.innerHTML);
    timer.updateDisplayTimer(elements.minutes + 5, elements.seconds);
    sound.playStartMusic();
  }

  function removeFive() {
    elements.minutes = Number(elements.displayMinutes.innerHTML);
    elements.seconds = Number(elements.displaySeconds.innerHTML);
    timer.updateDisplayTimer(elements.minutes - 5, elements.seconds);
    sound.playStartMusic();
  }

  function stopTime() {
    timer.stopTime();
    sound.playClickSound();
    elements.btnPause.classList.add("hide");
    elements.btnPlay.classList.remove("hide");
  }

  return {
    startPlay,
    addFive,
    removeFive,
    stopTime,
  };
}
