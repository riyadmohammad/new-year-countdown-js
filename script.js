const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minisEl = document.getElementById("minis");
const secondsEl = document.getElementById("secounds");

const newYear = "1 Jan 2022";



function countdown() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;


    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minis = Math.floor(totalSeconds / 60) % 60;
    const soconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minisEl.innerHTML  = formatTime(minis);
    secondsEl.innerHTML = formatTime(soconds);

}

function formatTime(time){
    return time <0 ? `0${time}` : time;
}

countdown();
setInterval(countdown, 1000);