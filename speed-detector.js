//this will be similar to the grade generator
//declaring a variable that will hold the user's input
let speed;
//making the button responsive upon being clicked
//clicking this button after inputting user's marks will insert a string at the bottom of the page that overwrites its current message along with the corresponding grade
document.getElementById("submitSpeed").onclick = function() {
    speed = document.getElementById("speedInput").value;
    if (speed >=131) {
        return document.getElementById("result").textContent = "License Suspended!"; 
    } else if(speed >=130) {
        return document.getElementById("result").textContent = "12 Demerit points!";
    } else if(speed >=125) {
        return document.getElementById("result").textContent = "11 Demerit points!";
    } else if(speed >=120) {
        return document.getElementById("result").textContent = "10 Demerit points!";
    } else if(speed >=115) {
        return document.getElementById("result").textContent = "9 Demerit points!";
    } else if(speed >= 110) {
        return document.getElementById("result").textContent = "8 Demerit points!";
    } else if(speed >=105) {
        return document.getElementById("result").textContent = "7 Demerit points!";
    } else if(speed >=100) {
        return document.getElementById("result").textContent = "6 Demerit points!";
    } else if(speed >=95) {
        return document.getElementById("result").textContent = "5 Demerit points!";
    } else if(speed >=90) {
        return document.getElementById("result").textContent = "4 Demerit points!";
    } else if(speed >=85) {
        return document.getElementById("result").textContent = "3 Demerit points!";
    } else if(speed >=80) {
        return document.getElementById("result").textContent = "2 Demerit points!";
    } else if(speed >=75) {
        return document.getElementById("result").textContent = "1 Demerit point!";
    } else if( speed >=0) {
        return document.getElementById("result").textContent = "OK!";
    } else {
        return document.getElementById("result").textContent = "Invalid Input!";
    }
}