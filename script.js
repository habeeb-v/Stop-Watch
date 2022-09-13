    window.onload = function(){
  let minutes = 00
  var seconds = 00;
  var tens = 00;
  var OutputMinutes = document.getElementById("minute");
  var OutputSeconds = document.getElementById("second");
  var OutputTens = document.getElementById("tens");
  var buttonStart = document.getElementById("btn-start");
  var buttonStop = document.getElementById("btn-stop");
  var buttonReset = document.getElementById("btn-reset");
  var Interval;

  buttonStart.addEventListener('click', () => {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10)
  });

  buttonStop.addEventListener('click', () => {
    clearInterval(Interval);
  });

  buttonReset.addEventListener('click', () => {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    minutes = "00"
    OutputTens.innerHTML = tens;
    OutputSeconds.innerHTML = seconds;
    OutputMinutes.innerHTML = minutes;
  });

  function startTimer () {
    tens++;
    if(tens <= 9) {
        OutputTens.innerHTML = "0" + tens;
    };

    if(tens > 9) {
        OutputTens.innerHTML = tens;
    };

    if (tens > 99){
        seconds++;
        OutputSeconds.innerHTML = "0" + seconds;
        tens = 00;
        OutputTens.innerHTML = "0" + 0;
    };

    if (seconds > 9){
        OutputSeconds.innerHTML = seconds;
    }

    if (seconds > 59){
        minutes++;
        OutputMinutes.innerHTML = "0" + minutes;
        seconds = 00;
        OutputSeconds.innerHTML = "0" + 0
    }

    if (minutes > 9){
      OutputMinutes.innerHTML = minutes;
    }
  }
 }
