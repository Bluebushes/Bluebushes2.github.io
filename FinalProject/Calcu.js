var x = 0;
var op = '+';
var y = 0;
var opNum1 = 0; //this will be the actual number processed by computer
var num1 = '';

var add = false;
var minus = false;
var multiply = false;
var divide = false;

function printOne(){
    opNum1 = opNum1 + '1';
    num1 = num1 + "1";
    document.getElementById("calcResult").innerHTML = num1;
}

function printTwo(){
    opNum1 = opNum1 + '2';
    num1 = num1 + '2';
    document.getElementById("calcResult").innerHTML = num1;
}

function printThree(){
    opNum1 = opNum1 + '3';
    num1 = num1 + '3';
    document.getElementById("calcResult").innerHTML = num1;
}

function printFour(){
    opNum1 = opNum1 + '4';
    num1 = num1 + '4';
    document.getElementById("calcResult").innerHTML = num1;
}

function printFive(){
    opNum1 = opNum1 + '5';
    num1 = num1 + '5';
    document.getElementById("calcResult").innerHTML = num1;
}

function printSix(){
    opNum1 = opNum1 + '6';
    num1 = num1 + '6';
    document.getElementById("calcResult").innerHTML = num1;
}

function printSeven(){
    opNum1 = opNum1 + '7';
    num1 = num1 + '7';
    document.getElementById("calcResult").innerHTML = num1;
}

function printEight(){
    opNum1 = opNum1 + '8';
    num1 = num1 + '8';
    document.getElementById("calcResult").innerHTML = num1;
}

function printNine(){
    opNum1 = opNum1 + '9';
    num1 = num1 + '9';
    document.getElementById("calcResult").innerHTML = num1;
}

function printZero(){
    opNum1 = opNum1 + '0';
    num1 = num1 + '0';
    document.getElementById("calcResult").innerHTML = num1;
}

function printPlus(){
    add = true;
    minus = false;
    multiply = false;
    divide = false;
    num1 = num1 + '+';
    document.getElementById("calcResult").innerHTML = num1;
}

function printMinus(){
    add = false;
    minus = true;
    multiply = false;
    divide = false;
    num1 = num1 + '-';
    document.getElementById("calcResult").innerHTML = num1;
}

function printMultiply(){
    add = false;
    minus = false;
    multiply = true;
    divide = false;
    num1 = num1 + '*';
    document.getElementById("calcResult").innerHTML = num1;
}

function printDivide(){
    add = false;
    minus = false;
    multiply = false;
    divide = true;
    num1 = num1 + '/';
    document.getElementById("calcResult").innerHTML = num1;
}

function clearDisplay(){
    num1 = document.getElementById("calcResult").innerHTML = '';
}


function solveDisplay(){
    if (add == true){
        document.getElementById("calcResult").innerHTML = opNum1 + 1000; 
    }
    
    if (minus == true){
        document.getElementById("calcResult").innerHTML = opNum1 - 1000;
    }
    
    if (multiply == true){
        document.getElementById("calcResult").innerHTML = opNum1 * 1000;
    }
    
    if (divide == true){
        document.getElementById("calcResult").innerHTML = opNum1 / 1000;
    }
}

