/*
//seleciona o elemento do canvas
var canvas = document.getElementById("desenho");

//variável de contexto 2d
var ctx = canvas.getContext("2d");

//desenha um retângulo
ctx.fillStyle = "rgb(180, 0, 0)";
ctx.fillRect(20, 20, 100, 100);

//segundo retângulo
ctx.fillStyle = "rgba(0, 0, 180, 0.7)";
ctx.fillRect(30, 30, 100, 100); */

/*
//seleciona o elemento do canvas e cria contexto
var ctx=document.getElementById("desenho").getContext("2d");

//inicia um novo path
ctx.beginPath();

//configurações
var x=100;
var y=100;
var raio=50;
var angulo=0;
var angulo_inicio = 0;
var angulo_fim = Math.PI * 2;

//desenha um arco
ctx.arc(x, y, raio, angulo_inicio, angulo_fim);

//desenha as linhas
ctx.stroke();

 */

/*
var ctx=document.getElementById("desenho").getContext("2d");

//configurações
var x = 20;
var y = 100;

//tamanho da fonte e tipo
ctx.font = "72px serif";

//inserindo o texto
ctx.fillText("Olá mundo!", x, y);

 */

/*
//iniciando o canvas
var canvas = document.getElementById("desenho");
var ctx = canvas.getContext("2d");

//configurações
var x = 0;
var y = 0;
var altura = 50;
var largura = 0;

function animacao(){
    ctx.fillRect(x, y, largura++, altura)
}
setInterval(animacao, 100);

 */

//iniciando o canvas
var canvas = document.getElementById("desenho");
var ctx = canvas.getContext("2d");

//configurações
var x = 0;
var y = 0;
var altura = 100;
var largura = 100;

function animacao(){
    //apagando o retangulo
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //desenhando um novo retangulo
    ctx.fillRect(x++, y, largura, altura)
}
setInterval(animacao, 100);