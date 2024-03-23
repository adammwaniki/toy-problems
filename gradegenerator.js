//declaring a variable that will hold the user's input
let grades;
document.getElementById("submitMarks").onclick = function(marksInput) {
    grades = document.getElementById("marksInput").value;
    if (grades >100) {
        return document.getElementById("result").textContent = "Invalid Entry"; 
    } else if(grades >= 80) {
        return document.getElementById("result").textContent = "Your grade is A";
    } else if(grades >= 60) {
        return document.getElementById("result").textContent = "Your grade is B";
    } else if(grades >= 50) {
        return document.getElementById("result").textContent = "Your grade is C";
    } else if(grades >= 40) {
        return document.getElementById("result").textContent = "Your grade is D";
    } else if(grades >= 0) {
        return document.getElementById("result").textContent = "Your grade is E";
    } else {
        return document.getElementById("result").textContent = "Invalid Entry";
    }
}