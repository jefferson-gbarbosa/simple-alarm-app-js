const currentTime = document.querySelector('h1');
const selectMenu = document.querySelectorAll('select');
const setAlarmBtn = document.querySelector('.set');
const alarmDiv = document.querySelector('.alarm');
const checkbox = document.querySelector('#input-check');
const deleteButton = document.querySelector('.deleteButton');
const spanDiv = document.querySelector('span');
const paragraf = document.querySelector('p');


let alarmTime;
let time;
let ringtone = new Audio("./sounds/ringtone.mp3");

for(let i = 23; i > 0; i--){
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML('afterend',option);
}
for(let i = 59; i >= 0; i--){
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML('afterend',option);
}

setInterval(()=>{
    let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds();


    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    currentTime.innerText = `${h}:${m}:${s}`;

    if(alarmTime == `${h}:${m}`){
        ringtone.play();
        ringtone.loop = true; 
    }
  
},1000);
// Set alarm
function setAlarm(){

    time = `${selectMenu[0].value}:${selectMenu[1].value}`;
  
    if(time.includes("hour") || time.includes("minutes")){
        return alert('Adicione o horário para despertar!')
    }

    alarmTime = time;
    spanDiv.innerText = alarmTime;

    setAlarmBtn.classList.add("disable")
}

// Remove alarm
function clearAlarm(){
    alarmTime = "";
    spanDiv.innerText = ""
    ringtone.pause(); 
    setAlarmBtn.classList.remove("disable");
}

setAlarmBtn.addEventListener('click',setAlarm);
deleteButton.addEventListener('click',clearAlarm);






