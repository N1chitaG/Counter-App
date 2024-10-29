// Counter App
let x = 0;
alert("Hello! Welcome to the student counter app. To incriment the number of students by one, click the INCREMENT button, to save the current number of students, click the SAVE button, to clear all values to their initial state, click the CLEAR button.")
document.getElementById("count-el").innerText = x;
button.addEventListener("click", increment);


function increment(){
    x += 1;
    document.getElementById("count-el").innerText = x;
    console.log(x);
}


function save(){
    document.getElementById("saved-entries").innerText += " " + document.getElementById("count-el").innerText + " " + "-" + " ";
}


function remove(){
    document.getElementById("count-el").innerText = 0;
    document.getElementById("saved-entries").innerText = "Previous entries: ";
}




