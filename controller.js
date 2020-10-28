//Variables
var firstTeam;
var secondTeam;
var control;

//UI variables
var scoreFirstTeam;
var scoreSecondTeam;
var nameFirstTeam;
var nameSecondTeam;
var faulFirstTeam;
var faulSecondTeam;
var halftimeValue;
var minutesUI;
var secondsUI;

//OnLoad
$(function () {
    setUI();
    setData();
    dataHandler();
});

//Actions
function dataHandler() {
    setInterval(function () {
        updateData();
        updateUI();
    }, 200);
}

function updateUI() {
    setTeams();
    setHalfTime();
};

function setTeams() {
    //Teams
    nameFirstTeam.text(firstTeam.name);
    nameSecondTeam.text(secondTeam.name);

    //Score
    scoreFirstTeam.text(firstTeam.score);
    scoreSecondTeam.text(secondTeam.score);

    //Faul
    faulFirstTeam.text(firstTeam.faul);
    faulSecondTeam.text(secondTeam.faul);
};

function setHalfTime() {
    halftimeValue.text(control.halftime);
};

//Connections
function updateData() {
    firstTeam = getFirstTeam();
    secondTeam = getSecondTeam();
    control = getControl();
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

function setData() {
    firstTeam = getFirstTeam();
    secondTeam = getSecondTeam();
    control = getControl();
};

function setUI() {
    scoreFirstTeam = $("#firstTeamResult");
    scoreSecondTeam = $("#secondTeamResult");

    nameFirstTeam = $("#firstTeamName");
    nameSecondTeam = $("#secondTeamName");

    faulFirstTeam = $("#firstTeamFaul");
    faulSecondTeam = $("#secondTeamFaul");

    halftimeValue = $("#halftimeValue");
};