let time = document.querySelector('#timeset');
// const dates = document.querySelector('.date');
const session = document.getElementById('session');
const seconds = document.getElementById('second');
const months = document.querySelector('.date');
const checkBox = document.getElementById('24Hour')
const mm = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const dd = ['Sunday', 'Monday', 'Tuesday',' Wednesday',' Thirstday', 'Friday', 'Satarday'];


function setJero(timeID){
   return (timeID < 10) ? '0' + timeID : timeID;
}

function showTime(){
    let date = new Date();

    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let sesson = 'AM'
    let month = date.getMonth();
    let day = date.getDay();
    let dateNo = date.getDate()

    if(hour == 0){
        hour = 12;
    }
    if(hour > 12){
        hour = hour - 12;
        sesson = 'PM'
    }

  hour = setJero(hour);
  minute = setJero(minute);
  second = setJero(second);
   
   time.textContent = `${hour} : ${minute}`;
   session.textContent = sesson;
   seconds.textContent = second;
   months.textContent = `${mm[month]}, ${dd[day]} ${dateNo}`;

   setTimeout(showTime, 1000);
}
showTime()

function show24HourFormate(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let sesson = 'AM'
   
    if(hour > 12){
        sesson = 'PM'
    }
    hour = setJero(hour);
    minute = setJero(minute);
    second = setJero(second);
    let timeMode = `${hour} : ${minute}`;
    return timeMode
}


checkBox.addEventListener('click', ()=>{
    if(checkBox.checked == true){
        time.textContent = show24HourFormate();
    console.log(show24HourFormate())
    }else{
        time.textContent = showTime()
    }
})