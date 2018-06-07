var noun1 = ["Brendan", "Kevin", "GlobalHack", "A dog", "A cat", "BTS"];
var verb = ["ran to", "walked to", "flew to", "ate", "kicked", "washed"];
var noun2 = ["a park", "a home", "a person", "some food", "you", "Kevin Tan"];
var cont = 0;




function printSent(){
if (cont < 1){
    cont = 1;
    var i = Math.floor(Math.random() * 6);
    var x = Math.floor(Math.random() * 6);
    var y = Math.floor(Math.random() * 6);
}
    document.getElementById("randSent").innerHTML = noun1[i] + " " + verb[x] + " " + noun2[y];

}

function clearSent(){
    document.getElementById("randSent").innerHTML = "";
    cont = 0;
}

