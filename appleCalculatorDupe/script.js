const screen = document.getElementById("screen");
let flag = false;

function appendToDisplay(input){
    if (flag == true) {
        clearDisplay();
        flag = false;
    }

    screen.value += input;
}

function clearDisplay(){
    screen.value = "";
}

function calculate(){
    screen.value = eval(screen.value);
    flag = true;
}