var todayDay = moment().format('dddd');
var dateTime = moment().format('MMMM Do YYYY');
console.log(todayDay);
console.log(dateTime);

var dayDisplay = document.querySelector("#day");
var dateTimeDisplay  = document.querySelector("#date");

dayDisplay.textContent = todayDay;
dateTimeDisplay.textContent = dateTime;


/* 

Pseduo Coding
Time blocks
    Style the row to look like the mockup
    Add Logic to check if 
        Time block hour minus Current Hour
            if negative will be green
            if 0 will be red
            if positive will be green
        Logic should update the contents class 
            .past {
            .present {
            .future {
Save Logic
    When blue disk button is clicked should save to local storage.
            Need to have local storage for each of the hours blocks
    If a value is present, and then updated, should overwrite the text in the block
    Onscreen message should be displayed when a time entry has been created or modified

*/