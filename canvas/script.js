let tela = document.getElementById("tela")
let retangulo = document.getElementById("retangulo")
let alou = document.getElementById("alou")
let circulo = document.getElementById("circulo")
let animacao = document.getElementById("animacao")
let imagem = document.getElementById("imagem")

let i = imagem.getContext("2d")
let a = animacao.getContext("2d")
let ctx = tela.getContext("2d")
let s = alou.getContext("2d")
let r = retangulo.getContext("2d")
let c = circulo.getContext("2d")

////////////////////////////////  LARGURA X ALTURA  ///////////////////////////////////////////////////////////////

ctx.moveTo(0,0)
ctx.lineTo(250,250)
ctx.lineWidth = 5
ctx.lineTo(500, 0)
ctx.strokeStyle = "#FF0000"
ctx.stroke()
ctx.closePath()

//////////////////////////////////  RETANGULO  ////////////////////////////////////////////////////////////


r.rect(10, 10, 100, 200)

r.fillStyle = "aqua"
// r.fillRect(10, 10, 100, 200) //solido
r.lineWidth = 5;
r.strokeStyle = "black"
// r.strokeRect(10,10, 100, 200) //só a borda

r.fill();
r.stroke();
r.clearRect(20, 20, 30, 30)
r.closePath()
/////////////////////////////////  INICIO E FIM PATH  ////////////////////////////////////////////////////////////////////////

s.beginPath()

s.lineWidth = 4
s.strokeStyle = "aqua"
s.moveTo(10,10)
s.lineTo(400, 400)

s.stroke()

//novo caminho
s.beginPath() // sem isso, pegaria o move to de cima

s.lineWidth = 7
s.strokeStyle = "blue"
s.fillStyle = "green"
s.moveTo(50,10) // e muito importante
s.lineTo(300, 300)
s.lineTo(200, 300)
s.closePath()
s.stroke()
s.fill()
s.closePath()

///////////////////////////////////  CIRCULO  ///////////////////////////////////////////////////////////////

c.beginPath()

c.strokeStyle = "black"
c.fillStyle= "red"

let x2 = 250
let y2 = 250
let raio2 = 100

let inicio2 = 0
let fim2 = 2 * Math.PI

c.arc(x2,y2, raio2, inicio2, fim2)

c.stroke()
c.fill()

c.beginPath()
c.strokeStyle = "black"
c.fillStyle= "aqua"

let x = 250
let y = 250
let raio = 100

let inicio = 0
let fim = 1.5 * Math.PI

c.arc(x,y, raio, inicio, fim)

c.fill()

c.closePath()

////////////////////////////  CANVAS ANIMAÇÃO  ////////////////////////////////////////////////////////////////////

let circle2 = {
    x: 250,
    y: 250,
    raio: 100,
    inicio: 0,
    fim: 0 * Math.PI,
    antiHour: true,
}

function drawCircle(c) {

    a.beginPath()
    a.rect(0, 0, 500,500)
    a.fillStyle = "beige"
    a.fill()


    a.beginPath();
    a.strokeStyle = "black";
    a.fillStyle = "aqua"
    a.arc(c.x, c.y, c.raio, c.inicio, c.fim, c.antiHour);

    a.fill();
    a.stroke();
}

setInterval(function(){

    if(circle2.fim < 2* Math.PI){
        circle2.fim += 0.1;
        circle2.x += 1
    }

    drawCircle(circle2)
}, 50);

//////////////////////////  IMAGENS ////////////////////////////////////////////////////////////////////////////

let imgg = document.getElementById("read")
// primaira maneira de carregar imagem no canvas precisa ter a imagem no html
// i.drawImage(imgg, 20, 20)

// outra maneira sem o html
let img = new Image()
img.src = "./464e7c27f61bf8c6a0ab57c7bade1305.jpg"

img.onload = desenharImg;

function desenharImg(){
    i.drawImage(this, 20, 20, this.naturalWidth / 2, this.naturalHeight / 2)
}