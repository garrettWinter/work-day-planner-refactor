var todayDay = moment().format('dddd');
var dateTime = moment().format('MMMM Do YYYY');
console.log(todayDay);
console.log(dateTime);

var dayDisplay = document.querySelector("#day");
var dateTimeDisplay  = document.querySelector("#date");
var saveButton = document.querySelector('.saveBox');
var storeageText= document.querySelector("#storeageMessage");
var commentsField = document.querySelector('.comments');

dayDisplay.textContent = todayDay;
dateTimeDisplay.textContent = dateTime;

function init (){
    console.log("initFunction has run")
    temp = JSON.parse(localStorage.getItem("testValue"));;
    console.log(temp)
    commentsField.value = temp
}

function noteStorage () {
    console.log("noteStorage Function has been triggered");
    storeageText.textContent = "Appointment has been added to local storage.";
    comments = commentsField.value;
    console.log(comments);
    localStorage.setItem("testValue",JSON.stringify(commentsField.value));

}


/* Event Listeners */
saveButton.addEventListener("click", noteStorage);
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
    If a value is present, and then updated, should overwrite the text in the block
    Onscreen message should be displayed when a time entry has been created or modified

*/