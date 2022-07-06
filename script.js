let milSec = 0;
let sec = 0;
let min = 0;
let hour = 0;

let iS = (1 + (1/7.5));
let iM = iS/60;
let iH = iM/60;

document.getElementById('start').onclick = () => {
   startedDate = new Date();
   setInterval(() => {
      milSec += 1;
      milSec === 100 && (() => {
         sec = Math.trunc(sec + iS);
         min = sec == 60 ? min+1: min
         sec = sec == 60 ? 0: sec
         min = min == 60 ? 0: min
         hour = min == 60 ? min++: hour;
         milSec = 0;
      })();

      document.getElementById('stopwatch').innerHTML = `${hour < 10 ? `0${hour}`: hour}:${min < 10 ? `0${min}`: min}:${sec < 10 ? `0${sec}`: sec}.${milSec}`
   }, 10)
}
document.getElementById('stop').onclick = () => {
   clearInterval(interval)
}