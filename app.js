let time = document.querySelector('#timeset');
const date = document.querySelector('.date');
const session = document.getElementById('session');
const seconds = document.getElementById('second');

function showTime(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let sesson = 'AM'

    if(hour == 0){
        hour = 12;
    }
    if(hour > 12){
        hour = hour - 12;
        sesson = 'PM'
    }
  
   hour = (hour < 10) ? '0' + hour : hour;
   minute = (minute < 10) ? '0' + minute : minute;
   second = (second < 10) ? '0' + second : second;
   
   time.textContent = `${hour} : ${minute}`;
   session.textContent = sesson;
   seconds.textContent = second

}

showTime()