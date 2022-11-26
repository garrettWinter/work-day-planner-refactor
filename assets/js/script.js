var todayDay = moment().format('dddd');
var dateTime = moment().format('MMMM Do YYYY');
var dayDisplay = document.querySelector("#day");
var dateTimeDisplay = document.querySelector("#date");
var saveButton = document.querySelector('.saveBox');
var storeageText = document.querySelector("#storeageMessage");
var logicTestVar = document.querySelector('.testingDiv');
var commentBlock = document.querySelector('.commentBlock');
var tableContainer = document.querySelector('#tableContainer');
var clickedElement = '';
// var currentHour = moment().format('HH');
var currentHour = 14;
console.log(currentHour+" this is the current HH")
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

/* Day/Date updates */
dayDisplay.textContent = todayDay;
dateTimeDisplay.textContent = dateTime;

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
        var createSaveBoxBtn = document.createElement('button');


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
        createCommentBlockInput.id= "input"+[i];

        /* Creation of the saveBox */
        createSaveBoxBtn.classList=("col saveBox"); /* See if this works */
        createSaveBoxBtn.id= [i];
        createSaveBoxBtn.textContent = "🖫";


    /* Element Appending */
    var tableContainer = document.getElementById('tableContainer');

    createHoourBlockP.appendChild(CreateHourBlockSpan);
    createHourBlockDiv.appendChild(createHoourBlockP);
    createRowDiv.appendChild(createHourBlockDiv);
    createCommentBlockForm.appendChild(createCommentBlockInput);
    createCommentBlockDiv.appendChild(createCommentBlockForm);
    createRowDiv.appendChild(createCommentBlockDiv);
    createRowDiv.appendChild(createSaveBoxBtn);
    tableContainer.appendChild(createRowDiv);

}};

/* This is save feature to store comments into local storage for future referance */
function commentStorage(event) {
    if (event.target.className === 'col saveBox'){
        console.log("noteStorage Function has been triggered");
        clickedElement = event.target.id;
        console.log(clickedElement + " has been clicked");
        storeageText.textContent = "Appointment Details have been added to your calendar.";
        comments = ("input"+event.target.id);
        console.log(comments); 
    };


}

/* Event Listeners */
tableContainer.addEventListener("click", commentStorage);
tableGeneration()

/* 

Pseduo Coding

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