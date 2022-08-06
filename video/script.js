
let video = document.getElementById("video")

function retroceder(){
    video.currentTime -= 15;
}
function avancar(){
    video.currentTime += 15;
}
function diminuir_vel(){
    video.playbackRate -= 0.5
}
function aumentar_vel(){
    video.playbackRate += 0.5
}
function play(){
    video.play();
}
function sstop(){

    video.pause(); //pausa

}

// var controle = document.getElementById()

function over(element){
    console.log("dentro")
    element.style.visiblity = 'hidden'
}
function out(element){
    
    console.log("fora")
    
    element.style.visiblity = 'visible'
}