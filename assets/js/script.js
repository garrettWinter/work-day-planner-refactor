var todayDay = moment().format('dddd');
var dateTime = moment().format('MMMM Do YYYY');
var dayDisplay = document.querySelector("#day");
var dateTimeDisplay = document.querySelector("#date");
var saveButton = document.querySelector('.saveBox');
var storeageText = document.querySelector("#storeageMessage");
var commentsField = document.querySelector('.comments');
var logicTestVar = document.querySelector('.testingDiv');
var commentBlock = document.querySelector('.commentBlock'); 
// var currentHour = moment().format('HH');
var currentHour = 14;
console.log(currentHour)
var storageArray = [
    [9, "9 AM", ''],
    [10, "10 AM", ''],
    [11, "11 AM", ''],
    [12, "12 PM", ''],
    [13, "1 PM", ''],
    [14, "2 PM", ''],
    [15, "3 PM", ''],
    [16, "4 PM", ''],
    [17, "5 PM", ''],
];


/* Vars created to clear errors */


/* Day/Date updates */
dayDisplay.textContent = todayDay;
dateTimeDisplay.textContent = dateTime;

/* This runs on page load to display any comments stored in local storage */
function init() {
    console.log("initFunction has run")
    commentsField.value = JSON.parse(localStorage.getItem("testValue"));
    var logicTest = 0;
    logicTest = storageArray[0][0] - currentHour;
    console.log(logicTest);
    if (logicTest < 0) {
        // commentBlock.style.backgroundColor = "#d3d3d3";
        commentBlock.classList.add("past")
    }
    else if (logicTest > 0) {
        // commentBlock.style.backgroundColor = "#77dd77";
        commentBlock.classList.add("future")
    }
    else {
        // commentBlock.style.backgroundColor = "#ff6961";
        commentBlock.classList.add("present")
    };
}

function tableGeneration (){
    for (let i = 0; i < storageArray.length; i++) {    
    /* Element Creation */
       /* Creation of the row */
    var createRowDiv = document.createElement('div');
    
        /* Creation of the hourBlock */
        var createHourBlockDiv = document.createElement('div');
            var createHoourBlockP= document.createElement('p');
            var CreateHourBlockSpan = document.createElement('span');

        /* Creation of the commentBlock */
        var createCommentBlockDiv = document.createElement('div');
            var createCommentBlockForm = document.createElement('form');
                var createCommentBlockInput = document.createElement('input');

        /* Creation of the saveBox */
        var createSaveBoxDiv = document.createElement('div');


    /* Element Updates */

        /* Creation of the row */
        createRowDiv.classList.add("row");
    
        /* Creation of the hourBlock */
        createHourBlockDiv.classList=("col hourBlock"); /* See if this works */
            CreateHourBlockSpan.classList.add("hour");
            CreateHourBlockSpan.textContent = storageArray[i][1]; /* [i][1] */

        /* Creation of the commentBlock */
        createCommentBlockDiv.classList=("col-10 commentBlock"); /* See if this works */
        
    /*Logic Check for background color*/
    var logicTest = storageArray[i][0] - currentHour

        if (logicTest < 0) {
            createCommentBlockDiv.classList.add("past")
        }
        else if (logicTest > 0) {
            createCommentBlockDiv.classList.add("future")
        }
        else {
            createCommentBlockDiv.classList.add("present")
        };

        createCommentBlockForm.classList.add("commentsBox");
        createCommentBlockInput.classList.add("comments");

        /* Creation of the saveBox */
        createSaveBoxDiv.classList=("col saveBox"); /* See if this works */
        createSaveBoxDiv.textContent = "🖫";


    /* Element Appending */
    var tableContainer = document.getElementById('timeBox');

    createHoourBlockP.appendChild(CreateHourBlockSpan);
    createHourBlockDiv.appendChild(createHoourBlockP);
    createRowDiv.appendChild(createHourBlockDiv);
    createCommentBlockForm.appendChild(createCommentBlockInput);
    createCommentBlockDiv.appendChild(createCommentBlockForm);
    createRowDiv.appendChild(createCommentBlockDiv);
    createRowDiv.appendChild(createSaveBoxDiv);
    tableContainer.appendChild(createRowDiv);

}};

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