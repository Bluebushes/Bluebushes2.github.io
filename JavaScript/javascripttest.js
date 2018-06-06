function soundFunction(){
    var beep = new Audio("sound.mp3");
    beep.play();
}
$("#beepbutton").on("click",soundFunction);