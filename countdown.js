//Variables
var timer;
var time;
var min;
var sec;
var startCount;

//Variables UI
var minutesUI;
var secondsUI;

//OnLoad
$(function () {
    setTimeUI();
    updateTimeData();
    timeDataHandler();
    setTime();
    setInterval(handleCountdown, 1000);
});

//Actions
function timeDataHandler() {
    setInterval(function () {
        if (time.start == true) {
            start();
        }
        if (time.stop == true) {
            stop();
        }

        updateTimeData();
    }, 200);
}

function setTime() {
    minutesUI.text(time.minutes);
    secondsUI.text(time.seconds);
};

function start() {
    time.start = false;
    saveTime();

    startCount = true;
    min = time.minutes;
    sec = time.seconds;
};

function handleCountdown() {
    if (startCount == true && time.pause == false)
        countdown();   
}
function countdown() {
    if (sec > 0) {
        sec--;
    }
    else {
        if (min > 0) {
            sec = 59;
            min--;
        }
        else {
            horn();
            stop();
        }
    }
    minutesUI.text(min);
    secondsUI.text(sec);
};

function stop() {
    time.stop = false;
    saveTime();

    startCount = false;
    setTime();
};

function pause() {
    time.pause = false;
    saveTime();
};

function horn() {
    $("#horn")[0].play();
}
//Connections
function getTime() {
    return JSON.parse(localStorage.getItem("Time"));
};

function updateTimeData() {
    time = getTime();
};

function saveTime() {
    localStorage.setItem("Time", JSON.stringify(time));
};

function setTimeUI() {
    minutesUI = $("#minutes");
    secondsUI = $("#seconds");
};