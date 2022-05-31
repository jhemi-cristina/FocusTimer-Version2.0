export function CardElem() {
  let cardCloudy = document.querySelector("#cloudy");
  let cardRain = document.querySelector("#rain");
  let cardCold = document.querySelector("#cold");
  let cardSun = document.querySelector("#sun");

  let volume = document.querySelector(".volume");
  let volumeStorm = document.querySelector(".volumeStorm");
  let volumeSummer = document.querySelector(".volumeSummer");
  let volumeWinter = document.querySelector(".volumeWinter");

  function setVolume() {
    volume.value = 0.5;
    volumeStorm.value = 0.5;
    volumeSummer.value = 0.5;
    volumeWinter.value = 0.5;
  }

  return {
    cardCloudy,
    cardRain,
    cardCold,
    cardSun,
    volume,
    volumeStorm,
    volumeSummer,
    volumeWinter,
    setVolume,
  };
}
