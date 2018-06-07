var websites = ["https://www.google.com/", "https://www.bing.com/", "https://www.yahoo.com/", "https://www.aol.com/"];
var cont = 0
var i = 0

function rndWb(){
    if (cont < 1){
        cont = 1;
        i = Math.floor(Math.random() * 4);
    }
    cont = 0;
    window.open(websites[i]);
}