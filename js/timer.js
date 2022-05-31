import { Elements } from "./elements.js";

const elements = Elements();

export function Timer() {
  function stopTime() {
    clearTimeout(elements.timerTimeOut);
  }

  const countDown = () => {
    elements.timerTimeOut = setTimeout(() => {
      let min = Number(elements.displayMinutes.innerHTML);
      let sec = Number(elements.displaySeconds.innerHTML);

      updateDisplayTimer(min, sec - 1);

      if (min == 0 && sec == 0) {
        updateDisplayTimer(min, sec);
        return;
      }
      if (sec <= 0) {
        sec = 60;
        min--;
        updateDisplayTimer(min, sec - 1);
      }
      updateDisplayTimer(min, sec - 1);

      countDown();
    }, 1000);
  };

  const updateDisplayTimer = (minutes, seconds) => {
    if (minutes <= 0) {
      minutes = 0;
    }
    if (minutes >= 60) {
      (minutes = 60), (seconds = 0);
    }
    elements.displayMinutes.innerHTML = String(minutes).padStart(2, "0");
    elements.displaySeconds.innerHTML = String(seconds).padStart(2, "0");
  };

  return {
    stopTime,
    countDown,
    updateDisplayTimer,
  };
}
