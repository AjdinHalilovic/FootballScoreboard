//Variables
var firstTeam;
var secondTeam;
var control;
var time;

//Variables UI
var startButton;
var pauseButton;
var resumeButton;

//OnLoad
$(function () {
    setData();
    setUI();
    setStartButtons();
});

//Actions
function setNameFirstTeam(name) {
    firstTeam.name = name;
    saveFirstTeam();
}

function setNameSecondTeam(name) {
    secondTeam.name = name;
    saveSecondTeam();
}

function changeScoreFirstTeam(increase) {
    firstTeam.score = increaseHandler(increase, firstTeam.score);
    saveFirstTeam();
}

function changeScoreSecondTeam(increase) {
    secondTeam.score = increaseHandler(increase, secondTeam.score);
    saveSecondTeam();
}

function changeFaulFirstTeam(increase) {
    firstTeam.faul = increaseHandler(increase, firstTeam.faul);
    saveFirstTeam();
}

function changeFaulSecondTeam(increase) {
    secondTeam.faul = increaseHandler(increase, secondTeam.faul);
    saveSecondTeam();
}

function increaseHandler(increase, value) {
    if (increase == true) {
        value++;
    } else {
        if (value > 0)
            value--;
    }
    return value;
}

function changeHalfTimeTeam() {
    control.halftime = control.halftime == 1 ? 2 : 1;
    saveControl();

    //Set fauls every time 
    firstTeam.faul = 0;
    secondTeam.faul = 0;
    saveFirstTeam();
    saveSecondTeam();
}

function setMinutes(value) {
    if (Number.isInteger(parseInt(value))) {
        time.minutes = value;
        saveTime();
    }
    else {
        alert("Unesite minute u ispravnom formatu! primjer -> 1:0");
    }
};

function setSeconds(value) {
    if (Number.isInteger(parseInt(value))) {
        time.seconds = value;
        time.start = false;
        time.stop = false;
        saveTime();
    }
    else {
        alert("Unesite sekunde u ispravnom formatu! primjer -> 0:1");
    }
};

function startTime() {
    setPauseButtons();
    time.start = true;
    time.stop = false;
    time.pause = false;
    saveTime();
};

function resetTime() {
    setStartButtons();
    time.start = false;
    time.stop = true;
    time.pause = false;
    saveTime();
};

function pauseTime() {
    setResumeButtons();
    time.start = false;
    time.stop = false;
    time.pause = true;
    saveTime();
};

function resumeTime() {
    setPauseButtons();
    time.start = false;
    time.stop = false;
    time.pause = false;
    saveTime();
};


function setStartButtons() {
    startButton.show();
    pauseButton.hide();
    resumeButton.hide();
};

function setPauseButtons() {
    startButton.hide();
    pauseButton.show();
    resumeButton.hide();
};

function setResumeButtons() {
    startButton.hide();
    pauseButton.hide();
    resumeButton.show();
};

//Connections
function setData() {
    firstTeam = getFirstTeam();
    secondTeam = getSecondTeam();
    control = getControl();
    time = getTime();
};

function getFirstTeam() {
    return JSON.parse(localStorage.getItem("Team1"));
};

function getSecondTeam() {
    return JSON.parse(localStorage.getItem("Team2"));
};

function getControl() {
    return JSON.parse(localStorage.getItem("Control"));
};

function getTime() {
    return JSON.parse(localStorage.getItem("Time"));
};

function saveFirstTeam() {
    localStorage.setItem("Team1", JSON.stringify(firstTeam));
};

function saveSecondTeam() {
    localStorage.setItem("Team2", JSON.stringify(secondTeam));
};

function saveControl() {
    localStorage.setItem("Control", JSON.stringify(control));
};

function saveTime() {
    localStorage.setItem("Time", JSON.stringify(time));
};

function setUI() {
    minutes = $("#min");
    seconds = $("#sec");

    startButton = $("#startButton");
    pauseButton = $("#pauseButton");
    resumeButton = $("#resumeButton");
};