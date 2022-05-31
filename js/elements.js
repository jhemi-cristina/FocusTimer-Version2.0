export function Elements() {
  let btnPlay = document.querySelector(".play");
  let btnPause = document.querySelector(".pause");
  let btnStop = document.querySelector(".stop");
  let btnIncrease = document.querySelector(".increase");
  let btnReduce = document.querySelector(".reduce");
  let displayMinutes = document.querySelector(".minutes");
  let displaySeconds = document.querySelector(".seconds");
  let timerTimeOut;
  let minutes;
  let seconds;

  return {
    btnPlay,
    btnPause,
    btnStop,
    btnIncrease,
    btnReduce,
    displayMinutes,
    displaySeconds,
    timerTimeOut,
    minutes,
    seconds,
  };
}
