const date = new Date();
const day = date.getDay();
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const hour = date.getHours();
let minutes = date.getMinutes();
if (minutes < 10) {
  minutes = '0' + minutes;
}
let hour12 = hour;
let twelve;
if(hour>12) {
  hour12 = hour - 12;
  twelve = 'PM'
} else if (hour===12){
  twelve = 'PM';
} else twelve = 'AM';
const timeCurrent = hour12 + ':' + minutes + twelve;
const dayCurrent = days[day];

export default { day, hour, timeCurrent, dayCurrent };
