var websites = ["https://store.steampowered.com/", "https://www.huffingtonpost.com/", "http://tencents.info/", "http://www.electricboogiewoogie.com/", "http://ninjaflex.com/", "https://crouton.net/", "http://www.theuselessweb.com/", "https://en.wikipedia.org/wiki/Wikipedia/", "https://www.instagram.com/", "https://www.forbes.com/", "https://www.nytimes.com", "https://www.google.com/", "https://www.bing.com/", "https://www.yahoo.com/", "https://www.aol.com/", "https://www.youtube.com/watch?v=BVwAVbKYYeM&t=0s&list=PL7urOgP8pdZayjA0TuyPkToWift8mFpyS&index=2"];
var cont = 0
var i = 0

function rndWb(){
    if (cont < 1){
        cont = 1;
        i = Math.floor(Math.random() * 16);
    }
    cont = 0;
    window.open(websites[i]);
}