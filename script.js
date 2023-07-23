// All Clear
function clearScreen() {
    document.getElementById("result").value = "";
}

// Backspace
function backspace(){
    document.getElementById("result").value = document.getElementById("result").value.slice(0,-1)
}
 
// Display values
function display(value) {
    document.getElementById("result").value += value;
}
 
// Evaluates the expression and returns result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}