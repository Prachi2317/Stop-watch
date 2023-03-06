// selecting the id 
const timeDisplay = document.querySelector("#timeDisplay");
const start = document.querySelector("#start");
const pause = document.querySelector("#pause");
const reset = document.querySelector("#reset");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
// if the timer is currently paused we set this to paused
let paused = true;
let intervalId;
//for hours
let hrs = 0;
// for minutes
let mins = 0;
//for seconds
let secs = 0;
// we add eventListener to start button
start.addEventListener("click", () => {
    // if paused is true it will sets it to false on the click of startBtn
    if(paused){
        paused = false;
        // calculate the start time and Date.now() gives you the exact time and date
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 1000);
    }
});
// we add eventListener to pause button
pause.addEventListener("click", () => {
    if(!paused){
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
});
//  add event listener to reset button
reset.addEventListener("click", () => {
    paused = true;
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hrs = 0;
    mins = 0;
    secs = 0;
    timeDisplay.textContent = "00:00:00";
});
// add event listener to update button
function updateTime(){
    //calculate time in milliseconds
    elapsedTime = Date.now() - startTime;

    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);
    //   display the time
    timeDisplay.textContent = `${hrs}:${mins}:${secs}`;

    function pad(unit){
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    }
}