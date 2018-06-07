var opNum1 = 0; //this will be the actual number processed by computer (because this is an INTEGER value with number)
var opNum2 = 0; //the second actual number to be processed by computer (same as above, INT value)
var num1 = ''; //the displayed number, not actually processed (because this is a STRING value with apostraphes)

var add = false; //these will determine which operator was chosen
var minus = false;
var multiply = false;
var divide = false;

var oped = false; //this will turn to true after any operator button has pressed, will tell me if opNum2 will get values now

var zeroed = false; //this will turn to true if zero has been used, will put the two string opNum1 & opNum2

function printOne(){
    if (oped == true){ //if there has been an operator button pressed (+, -, *, /) the next buttons pressed will change the opNum2 value instead of opNum1
        opNum2 = opNum2 + '1'; //else, if there has not been an operator used, it will change the opNum1 value
    }
    else{
       opNum1 = opNum1 + '1'; //I add the opNum1 (int) by a '1' (string) value so that the numbers stack like digits. So if user presses button (1) twice, it will be computed as ('1' + '1') = 11, and not (1 + 1) = 2
    }
    
    num1 = num1 + "1";
    document.getElementById("calcResult").innerHTML = num1; //this is the print that the user will see on display, not the actual processed number for computing
}

function printTwo(){
    if (oped == true){
        opNum2 = opNum2 + '2';
    }
    else{
        opNum1 = opNum1 + '2';
    }
    
    num1 = num1 + '2';
    document.getElementById("calcResult").innerHTML = num1;
}

function printThree(){
    if (oped == true){
        opNum2 = opNum2 + '3';
    }
    else{
        opNum1 = opNum1 + '3';
    }
   
    document.getElementById("calcResult").innerHTML = num1;
}

function printFour(){
    if (oped == true){
        opNum2 = opNum2 + '4';
    }
    else{
        opNum1 = opNum1 + '4';
    }
   
    document.getElementById("calcResult").innerHTML = num1;
}

function printFive(){
    if (oped == true){
        opNum2 = opNum2 + '5';
    }
    else{
        opNum1 = opNum1 + '5';
    }
   
    document.getElementById("calcResult").innerHTML = num1;
}

function printSix(){
    if (oped == true){
        opNum2 = opNum2 + '6';
    }
    else{
        opNum1 = opNum1 + '6';
    }
   
    document.getElementById("calcResult").innerHTML = num1;
}

function printSeven(){
    if (oped == true){
        opNum2 = opNum2 + '7';
    }
    else{
        opNum1 = opNum1 + '7';
    }
   
    document.getElementById("calcResult").innerHTML = num1;
}

function printEight(){
    if (oped == true){
        opNum2 = opNum2 + '8';
    }
    else{
        opNum1 = opNum1 + '8';
    }
   
    document.getElementById("calcResult").innerHTML = num1;
}

function printNine(){
    if (oped == true){
        opNum2 = opNum2 + '9';
    }
    else{
        opNum1 = opNum1 + '9';
    }
   
    document.getElementById("calcResult").innerHTML = num1;
}

function printZero(){
    
    if (oped == true){
        opNum2 = opNum2 + '0'; //SIDE NOTE: zeros still work, since when used it will make a string with a zero digit (i.e. '2' + '0') = '20', which will be processed as a number 20
    }
    else{
        opNum1 = opNum1 + '0';
    }
   
    document.getElementById("calcResult").innerHTML = num1;
}

function printPlus(){ //THE PRINT FUNCTIONS ARE JUST WHAT THE USER SEES, PRINTS THE OPERATOR SIGN
    add = true; //this will indicate to print an ADD operator, since add = true
    minus = false;
    multiply = false;
    divide = false;
    
    oped = true;
    
    num1 = num1 + '+'; // <------- prints ADD operator, since add = true
    document.getElementById("calcResult").innerHTML = num1;
}

function printMinus(){ 
    add = false;
    minus = true; // the rest of the operators work similarily, just instead the function will indicate a corresponding operator
    multiply = false;
    divide = false;
    
    oped = true;
    
    num1 = num1 + '-';
    document.getElementById("calcResult").innerHTML = num1;
}

function printMultiply(){
    add = false;
    minus = false;
    multiply = true;
    divide = false;
    num1 = num1 + 'x';
    
    oped = true;
    
    document.getElementById("calcResult").innerHTML = num1;
}

function printDivide(){
    add = false;
    minus = false;
    multiply = false;
    divide = true;
    
    oped = true;
    
    num1 = num1 + '/';
    document.getElementById("calcResult").innerHTML = num1;
}

function clearDisplay(){ //This clears (resets) all variables
    num1 = document.getElementById("calcResult").innerHTML = '';
    opNum1 = 0; 
    opNum2 = 0; 
    num1 = ''; 

    add = false;
    minus = false;
    multiply = false;
    divide = false;

    oped = false;
}


function solveDisplay(){ //this function uses the actual opNum1 & opNum2 STRINGS, converts them to INTEGERS, and computes them to final answer
    if (add == true){ // THIS INDICATES TO USE ADD OPERATOR
        opNum1 = Number(opNum1); //converts str to int
        opNum2 = Number(opNum2);
        document.getElementById("calcResult").innerHTML = opNum1 + opNum2; //computes converted opNums to final ans and PRINTS it on display
    }
    
    if (minus == true){ // SIMILARILY, INDICATES TO USE CORRESPONDING OPERATOR
        document.getElementById("calcResult").innerHTML = opNum1 - opNum2;
    }
    
    if (multiply == true){
        document.getElementById("calcResult").innerHTML = opNum1 * opNum2;
    }
    
    if (divide == true){
        document.getElementById("calcResult").innerHTML = opNum1 / opNum2;
    }
}

