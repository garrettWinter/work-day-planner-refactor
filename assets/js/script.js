var todayDay = moment().format('dddd');
var dateTime = moment().format('MMMM Do YYYY');
var dayDisplay = document.querySelector("#day");
var dateTimeDisplay = document.querySelector("#date");
var saveButton = document.querySelector('.saveBox');
var storeageText = document.querySelector("#storeageMessage");
var commentsField = document.querySelector('.comments');
var logicTestVar = document.querySelector('.testingDiv');
// var currentHour = moment().format('HH');
var currentHour = 10;
console.log(currentHour)
var storageArray = [
    [9, ""],
    [10, ""],
    [11, ""],
    [12, ""],
    [13, ""]
];


/* Vars created t0 clear errors */

var commentBlock = document.querySelector('.commentBlock');

dayDisplay.textContent = todayDay;
dateTimeDisplay.textContent = dateTime;

/* This runs on page load to display any comments stored in local storage */
function init() {
    console.log("initFunction has run")
    commentsField.value = JSON.parse(localStorage.getItem("testValue"));
    logicTestVar.textContent = "Connection Test";
    var formulaTest = 0;
    formulaTest = storageArray[0][0] - currentHour;
    console.log(formulaTest);
    if (formulaTest < 0) {
        // commentBlock.style.backgroundColor = "#d3d3d3";
        commentBlock.classList.add("past")
    }
    else if (formulaTest > 0) {
        // commentBlock.style.backgroundColor = "#77dd77";
        commentBlock.classList.add("future")
    }
    else {
        // commentBlock.style.backgroundColor = "#ff6961";
        commentBlock.classList.add("present")
    };
}

function timeLogic (){

};

/* This is save feature to store comments into local storage for future referance */
function commentStorage() {
    console.log("noteStorage Function has been triggered");
    storeageText.textContent = "Appointment has been added to local storage.";
    comments = commentsField.value;
    console.log(comments);
    localStorage.setItem("testValue", JSON.stringify(commentsField.value));
}


/* Event Listeners */
saveButton.addEventListener("click", commentStorage);
init()

/* 

Pseduo Coding
Time blocks
    Add Logic to check if 
        Time block hour minus Current Hour
            if negative will be green
            if 0 will be red
            if positive will be green
        Logic should update the contents class 
            .past {
            .present {
            .future {
        Style the row to look like the mockup
Save Logic
    When blue disk button is clicked should save to local storage.
            Need to have local storage for each of the hours blocks
    DONE -- If a value is present, and then updated, should overwrite the text in the block
    DONEOnscreen message should be displayed when a time entry has been
        DONE -- created
        modified

Extras
    Add button to clear all timeblock comments.

Can I set an array
    first item being the time
    2 item being comment
    have it build the content via JS looping on the aaray



*/