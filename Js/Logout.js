var timeleft = 10;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished";
  } else {
    document.getElementById("countdown").innerHTML ="YOU WILL BE REDIRECTING IN  " + timeleft;
  }
//   timeleft -= 1;
  timeleft = timeleft - 1;
}, 1000);