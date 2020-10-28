//Variables
var db;

function team() {
    return {
        name: "TIM",
        score: 0,
        faul: 0
    }
}

function time() {
    return {
        minutes: 0,
        seconds: 0,
        start: false,
        stop: false,
        pause: false
    }
}

function controlBundle() {
    return {
        halftime: 1
    }
}

//Main controller
$(function openDB() {
    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction || { READ_WRITE: "readwrite" };
    window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

    createFirstTeam();
    createSecondTeam();
    createControl();
    createTime();

    var request = window.indexedDB.open("Semafor", 1);

    request.onerror = function (event) {
        console.log("Open database error!" + request.error.toString());
    };

    request.onsuccess = function (event) {
        db = request.result;
        console.log("Open database success!");
    };

    request.onupgradeneeded = function (event) {
    }
});

//Constructors
function createFirstTeam() {
    localStorage.setItem("Team1", JSON.stringify(team()));
}

function createSecondTeam() {
    localStorage.setItem("Team2", JSON.stringify(team()));
}

function createTime() {
    localStorage.setItem("Time", JSON.stringify(time()));
}

function createControl() {
    localStorage.setItem("Control", JSON.stringify(controlBundle()));
}


