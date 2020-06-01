'use strict'

{
  const timer = document.getElementById('timer');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');

  let startTime;
  let timeoutId;
  let elapsedTime = 0;

  function countUp(){
    const d = new Date(Date.now() - startTime + elapsedTime);
    const h = String(d.getUTCHours()).padStart(2,'0');
    const m = String(d.getMinutes()).padStart(2,'0');
    const s = String(d.getSeconds()).padStart(2,'0');
    const ms = String(d.getMilliseconds()).padStart(3,'0');

    // const h = ('0' + d.getUTCHours()).slice(-2);
    // const m = ('0' + d.getMinutes()).slice(-2);
    // const s = ('0' + d.getSeconds()).slice(-2);
    // const ms = ('00' + d.getMilliseconds()).slice(-3);

    timer.textContent = `${h}:${m}:${s}:${ms}`;

    timeoutId = setTimeout(() => {
      countUp();
    },10);
  }


  function setButtonStateInitial(){
    start.classList.remove('inactive');
    stop.classList.add('inactive');
    reset.classList.add('inactive');
  }
  function setButtonStateRunning(){
    start.classList.add('inactive');
    stop.classList.remove('inactive');
    reset.classList.add('inactive');
  }
  function setButtonStatestopped(){
    start.classList.remove('inactive');
    stop.classList.add('inactive');
    reset.classList.remove('inactive');
  }


  setButtonStateInitial();

  start.addEventListener('click',() => {
    if (start.classList.contains('inactive')) {
      return;
    }
    startTime = Date.now();
    countUp();
    setButtonStateRunning();
  });
  stop.addEventListener('click',() => {
    if (stop.classList.contains('inactive')) {
      return;
    }
    clearTimeout(timeoutId);
    elapsedTime += Date.now() - startTime;
    setButtonStatestopped();
  });
  reset.addEventListener('click',() => {
    if (reset.classList.contains('inactive')) {
      return;
    }
    timer.textContent = '00:00:00:000';
    setButtonStateInitial()
  });

}
