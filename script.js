 let inputAdultos = document.getElementById('adultos');
 let inputCriancas = document.getElementById('criancas');
 let inputDuracao = document.getElementById('duracao');

 let resultado = document.getElementById('resultado');

 function calcular(){
    console.log('calculando...');

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    

   let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
   let qdtTotalCerveja = cervejaPP(duracao) * adultos;
   let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);
   

   resultado.innerHTML  =  `<p>${qdtTotalCarne} g de carnes </p>`

   resultado.innerHTML += `<p>${qdtTotalCerveja} ml de cerveja </p>`
   resultado.innerHTML += `<p>${qdtTotalBebidas} ml de bebidas</p>`

}

function carnePP(duracao){
    if(duracao >=6){
        return 650;
    }else{
        return 500;
    }
    
 }    

 function cervejaPP(duracao){
    if(duracao >=6){
        return 2000;
    }else{
        return 1200;
    }
    
 } 

 function bebidasPP(duracao){
    if(duracao >=6){
        return 1500;
    }else{
        return 1000;
    }
    
 } 