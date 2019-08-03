const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

//Fixes the flicker as the clock resets transformation location
function checkFlicker(ele, deg) {
   if (deg === 90) {
      ele.style.transition = 'all 0.0s';
   }
}

function setDate() {
   const now = new Date();

   const seconds  = now.getSeconds(); 
   const secondsDegrees = ((seconds / 60) * 360) + 90;
   secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
   
   const mins = now.getMinutes();
   const minsDegrees = ((mins / 60) * 360) + 90;
   minsHand.style.transform = `rotate(${minsDegrees}deg)`;

   const hour = now.getHours();
   const hourDegrees = ((hour / 12) * 360) + 90;
   hourHand.style.transform = `rotate(${hourDegrees}deg)`;

   checkFlicker(secondHand, secondsDegrees);
   checkFlicker(minsHand, minsDegrees);
   checkFlicker(hourHand, hourDegrees);
}

setInterval(setDate, 1000);

setDate();