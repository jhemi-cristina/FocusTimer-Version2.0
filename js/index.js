import { Sound } from "./sound.js";
import { CardElem } from "./CardElem.js";
import { CardContro } from "./CardContro.js";
import { Modes } from "./modes.js";
import { TimeContro } from "./timeContro.js";
import { Elements } from "./elements.js";

const sound = Sound();
const cardContro = CardContro();
const cardElem = CardElem();
const elements = Elements();
const controls = TimeContro();
const modes = Modes();

elements.btnPlay.addEventListener("click", controls.startPlay);
elements.btnIncrease.addEventListener("click", controls.addFive);
elements.btnReduce.addEventListener("click", controls.removeFive);
elements.btnStop.addEventListener("click", controls.stopTime);

cardElem.cardCloudy.addEventListener("click", cardContro.cloudy);
cardElem.cardRain.addEventListener("click", cardContro.rain);
cardElem.cardCold.addEventListener("click", cardContro.cold);
cardElem.cardSun.addEventListener("click", cardContro.sun);

cardElem.cardCloudy.addEventListener("dblclick", sound.pauseMusic);
cardElem.cardRain.addEventListener("dblclick", sound.pauseMusic);
cardElem.cardCold.addEventListener("dblclick", sound.pauseMusic);
cardElem.cardSun.addEventListener("dblclick", sound.pauseMusic);

cardElem.volumeStorm.addEventListener("input", () => {
  sound.volumeSpring(cardElem.volumeStorm.value);
});
cardElem.volume.addEventListener("input", () => {
  sound.volumeStorm(cardElem.volume.value);
});
cardElem.volumeSummer.addEventListener("input", () => {
  sound.volumeSummer(cardElem.volumeSummer.value);
});
cardElem.volumeWinter.addEventListener("input", () => {
  sound.volumeWinter(cardElem.volumeWinter.value);
});
