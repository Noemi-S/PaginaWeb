//Calculos para el cuadrado
function calcularPerimetroCuadrado(){
    const input=document.getElementById("inputCuadrado");
    const value=input.value;//Obtenemos el valor escrito
    const perimetro=perimetroCuadrado(value); //Llamamos la funcion perimentro cuadrado
    const result = document.getElementById("ResulCuadrado");
    result.innerText = "El perimetro del cuadrado es: " + perimetro;
}
function calcularAreaCuadrado(){
    const input=document.getElementById("inputCuadrado");
    const value=input.value;//Obtenemos el valor escrito
    const area=areaCuadrado(value); //Llamamos la funcion area cuadrado
    const result = document.getElementById("ResulCuadrado");
    result.innerText = "El área del cuadrado es: " +area;
    
}

//Calculos para el triangulo
function calcularPerimetroTriangulo(){
    let inputlado1=document.getElementById("inputLadoTriangulo");//Se ubica el elemento por el id
    let lado1=parseInt(inputlado1.value);
    let inputlado2=document.getElementById("inputLado2Triangulo");
    let lado2=parseInt(inputlado2.value);
    let inputbase=document.getElementById("inputbaseTriangulo");
    let base=parseInt(inputbase.value);
    const pTriangulo=perimetroTriangulo(lado1,lado2,base);
    const result = document.getElementById("ResulTriangulo");
    result.innerText = "El perimetro del triángulo es: " +pTriangulo;
}
function calcularAreaTriangulo(){
    let inputbase=document.getElementById("inputbaseTriangulo");
    let base=inputbase.value;
    let inputaltura=document.getElementById("inputAlturaTriangulo");
    let altura=inputaltura.value;
    const aTriangulo=areaTriangulo(base,altura);
    const result = document.getElementById("ResulTriangulo");
    result.innerText = "El área del triángulo es: " +aTriangulo;
}

//Calculos para el circulo
function calcularDiametroCirculo(){
    let inputRadio=document.getElementById("inputRadio");
    let radio=inputRadio.value;
    const dCirculo=diametroCirculo(radio);
    const result = document.getElementById("ResulCirculo");
    result.innerText = "El diametro del circulo es: " +dCirculo;    
}
function calcularPerimetroCirculo(){
    let inputRadio=document.getElementById("inputRadio");
    let radio=inputRadio.value;
    const pCirculo=perimetroCirculo(radio);
    const result = document.getElementById("ResulCirculo");
    result.innerText = "El perimetro del circulo es: " +pCirculo;   
}
function calcularAreaCirculo(){
    let inputRadio=document.getElementById("inputRadio");
    let radio=inputRadio.value;
    const aCirculo=areaCirculo(radio);
    const result = document.getElementById("ResulCirculo");
    result.innerText = "El área del circulo es: " +aCirculo;    
}

console.group("Cuadrados")
//Perimetro cuadrado
function perimetroCuadrado(lado){
    return lado*4;
}
//Area cuadrado
function areaCuadrado(lado){
    return lado*lado;
}
console.groupEnd();

console.group("Triangulos")
//Perimetro triangulo
function perimetroTriangulo(lado1, lado2, base){
    return lado1+lado2+base;
}
//Area triangul
function areaTriangulo(base, altura){
    return (base*altura)/2;
}
console.groupEnd();

console.group("Circulos")
//Diametro
function diametroCirculo(radio){
    return radio*2;
}
//Perimetro circulo
const PI=Math.PI;
function perimetroCirculo(radio){
    const diametro=diametroCirculo(radio);//Llamamos la funcion creada anteriormente
    return diametro*PI;
}
//Area circulo
function areaCirculo(radio){
    return (radio*radio)*PI;
}
console.groupEnd();

