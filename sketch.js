//variáeis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

//variáveis movimento da bolinha
let valocidadeXBolinha = 7;
let velocidadeYBolinha = 7;

function setup() {
  createCanvas(600, 400);
  }

function draw() {
  background ('black');
  circle (xBolinha, yBolinha, diametro);
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
  if(xBolinha + raio > width || xBolinha - raio < 0){
     velocidadeXBolinha *= -1;
 }
  if(yBolinha + raio > height || yBolinha - raio < 0);{
  velocidadeYBolinha *= -1;
 }
  
}