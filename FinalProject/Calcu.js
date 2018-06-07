



var x = 0;
var op = '+';
var y = 0;


if ($("#1").on("click")){
    x = x + 1;
} else{
    
}

if ($("#2").on("click")){
    x = x + 2;
} else{
    
}





if (op == '+'){
   function calcResultPrint(){
    document.getElementById("calcResult").innerHTML = x + y;
   }
   $("#enter").on("click",calcResultPrint);
}

if (op == '-'){
    function calcResultPrint(){
        document.getElementById("calcResult").innerHTML = x - y;
    }
    $("#enter").on("click",calcResultPrint);
}

if (op == '*'){
    function calcResultPrint(){
        document.getElementById("calcResult").innerHTML = x * y;
    }
    $("#enter").on("click",calcResultPrint);
}

if (op == '/'){
    function calcResultPrint(){
        document.getElementById("calcResult").innerHTML = x / y;
    }
    $("#enter").on("click",calcResultPrint);
}