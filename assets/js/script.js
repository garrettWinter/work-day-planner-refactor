var todayDay = dayjs().format('dddd');
var dateTime = dayjs().format('MMMM D, YYYY');
var dayDisplay = document.querySelector("#day");
var dateTimeDisplay = document.querySelector("#date");
var saveButton = document.querySelector('.saveBox');
var storeageText = document.querySelector("#storeageMessage");
var logicTestVar = document.querySelector('.testingDiv');
var commentBlock = document.querySelector('.commentBlock');
var tableContainer = document.querySelector('#tableContainer');
var currentHour = dayjs().format('HH');
// currentHour = 14; // This setting can be used to override time
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

/* Updates the Day/Date in header*/
dayDisplay.textContent = todayDay;
dateTimeDisplay.textContent = dateTime;

/* This function generates the HTML for the work day hours table */
function tableGeneration() {
    for (let i = 0; i < storageArray.length; i++) {
        /* Element Creation */
        var createRowDiv = document.createElement('div');
        var createHourBlockDiv = document.createElement('div');
        var createHoourBlockP = document.createElement('p');
        var createHourBlockSpan = document.createElement('span');
        var createCommentBlockDiv = document.createElement('div');
        var createCommentBlockForm = document.createElement('form');
        var createCommentBlockInput = document.createElement('input');
        var createSaveBoxBtn = document.createElement('button');

        /* Element Updates */
        /* Applying classe and IDs to the elements */
        createRowDiv.classList.add("row");
        createHourBlockDiv.classList = ("col hourBlock");
        createHourBlockSpan.classList.add("hour");
        createHourBlockSpan.textContent = storageArray[i][1];
        createCommentBlockDiv.classList = ("col-10 commentBlock");
        createCommentBlockForm.classList.add("commentsBox");
        createCommentBlockInput.classList.add("comments");
        createCommentBlockInput.id = "input" + [i];
        createSaveBoxBtn.classList = ("col saveBox");
        createSaveBoxBtn.id = [i];
        createSaveBoxBtn.textContent = "🖫";
        /*Logic Check class for background color*/
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
        /* Element Appending */
        var tableContainer = document.getElementById('tableContainer');
        createHoourBlockP.appendChild(createHourBlockSpan);
        createHourBlockDiv.appendChild(createHoourBlockP);
        createRowDiv.appendChild(createHourBlockDiv);
        createCommentBlockForm.appendChild(createCommentBlockInput);
        createCommentBlockDiv.appendChild(createCommentBlockForm);
        createRowDiv.appendChild(createCommentBlockDiv);
        createRowDiv.appendChild(createSaveBoxBtn);
        tableContainer.appendChild(createRowDiv);
    }
};

/* This is save feature to store comments into local storage for future reference */
function commentStorage(event) {
    /* This 'if' checks to make sure that the click event only triggers when the event has a class of saveBox */
    if (event.target.className === 'col saveBox') {
        console.log("noteStorage Function has been triggered");
        storeageText.textContent = "Appointment Details have been added to your calendar.";
        /* 'if' statement chain to save only clicked feild */
        commentSaved = "input" + event.target.id;
        if (commentSaved == 'input0') {
            storageArray[0][2] = input0.value;
            console.log(storageArray);
        } else if (commentSaved == 'input1') {
            storageArray[1][2] = input1.value;
            console.log(storageArray);
        } else if (commentSaved == 'input2') {
            storageArray[2][2] = input2.value;
            console.log(storageArray);
        } else if (commentSaved == 'input3') {
            storageArray[3][2] = input3.value;
            console.log(storageArray);
        } else if (commentSaved == 'input4') {
            storageArray[4][2] = input4.value;
            console.log(storageArray);
        } else if (commentSaved == 'input5') {
            storageArray[5][2] = input5.value;
            console.log(storageArray);
        } else if (commentSaved == 'input6') {
            storageArray[6][2] = input6.value;
            console.log(storageArray);
        } else if (commentSaved == 'input7') {
            storageArray[7][2] = input7.value;
            console.log(storageArray);
        } else if (commentSaved == 'input8') {
            storageArray[8][2] = input8.value;
            console.log(storageArray);
        };
    };
    /* Sending changes to the data storage array */
    localStorage.setItem("longTermStorage", JSON.stringify(storageArray));
};
/* The pages main fuction*/
function startup() {
    /*Generating HTML Table */
    tableGeneration();
    /* Checking to see if we have local storage data, and if not creating it */
    if (localStorage.longTermStorage == null) {
        localStorage.setItem("longTermStorage", JSON.stringify(storageArray));
    }
    /* If local storage data is present, it will parse this data and update the data storage array and then update the screen.*/
    storageArray = JSON.parse(localStorage.getItem("longTermStorage"));
    console.log(storageArray);
    input0.value = storageArray[0][2];
    input1.value = storageArray[1][2];
    input2.value = storageArray[2][2];
    input3.value = storageArray[3][2];
    input4.value = storageArray[4][2];
    input5.value = storageArray[5][2];
    input6.value = storageArray[6][2];
    input7.value = storageArray[7][2];
    input8.value = storageArray[8][2];
};
/* Event Listeners */
tableContainer.addEventListener("click", commentStorage);
startup()
