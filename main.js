var deadline = 'January 20 2021';

function initializeClock(id, finalTime){
  var clock = document.getElementById(id);
  clock.innerHTML = "hello"
}

function getTimeRemaining(finalTime) {
  var totalTime = Date.parse(finalTime) - Date.parse(new Date());
  var seconds = Math.floor((totalTime/1000) % 60);
  var minutes = Math.floor((t/1000/60) % 60);
  var hours = Math.floor((t/(1000*60*60)) % 24);
  var days = Math.floor(t/(1000*60*60*24));

  return {
    'total' : totalTime, 'days': days, 'hours': hours, 'minutes': minutes, 'seconds': seconds
  }
  initializeClock('clock', deadline);
}
