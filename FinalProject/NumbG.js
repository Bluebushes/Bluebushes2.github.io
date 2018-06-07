var cont = 0;

function printNum(){
if (cont < 1){
    cont = 1;
    var i = Math.floor(Math.random() * 100) + 1;
}
    document.getElementById("randNum").innerHTML = i;

}

function clearNum(){
    document.getElementById("randNum").innerHTML = "";
    cont = 0;
}

