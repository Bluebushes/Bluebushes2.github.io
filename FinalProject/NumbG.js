var cont = 0;
var maxNum = 0;

function setmaxNum(){
    maxNum = document.getElementById("maxNum").value;
}

function printNum(){
    if (cont < 1){
        cont = 1;
        var i = Math.floor(Math.random() * maxNum) + 1;
}
    document.getElementById("randNum").innerHTML = i;

}

function clearNum(){
    document.getElementById("randNum").innerHTML = "";
    cont = 0;
}

