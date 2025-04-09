let botao  = document.querySelector("#botao");
   botao.style.background="blue";
let estaQuebrado=false;
botao.addEventListener("mouseover",e =>{
    if(estaQuebrado===false)
    botao.style.background="green"; 
});

botao.addEventListener("mouseout",e =>{
    if(estaQuebrado===false)
    botao.style.background="blue"; 
});

botao.addEventListener("click",e =>{
    botao.style.background="red";
    botao.innerHTML="quebrou";
    estaQuebrado=true;
});



const campo1 = document.querySelector("#campo1");
const campo2 = document.querySelector("#campo2");
const seletor = document.querySelector("#operacao");
const botao1 = document.querySelector("#igual");
let resposta = document.querySelector("#resposta");

botao1.addEventListener("click",calcular);

function calcular(){
    const valor1 = parseInt(campo1.value);
    const valor2 = parseInt(campo2.value);
    resposta.innerHTML = valor1 + valor2;
    const operacao = seletor.value;
    if(operacao==="somar")
    resposta.innerHTML = valor1 + valor2; 
    if(operacao==="subtrair")
        resposta.innerHTML = valor1 - valor2; 
        if(operacao==="dividir")
            resposta.innerHTML = valor1 / valor2; 
            if(operacao==="multiplicar")
                resposta.innerHTML = valor1 * valor2; 
    
        
}








