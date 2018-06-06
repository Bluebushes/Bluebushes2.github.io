function mouseClickSound(){
    var click = new Audio("mouseClick.mp3")
    click.play()
}

$("#mouseSound").on("click",mouseClickSound)