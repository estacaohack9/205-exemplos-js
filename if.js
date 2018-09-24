// let nome = prompt("Digite aqui seu nome");

// console.log(`O nome digitado foi ${nome}`);

// alert(`Olá! Seja bem vindo, ${nome}!!!`);

let entrada = prompt("Digite um número:");
let continuar = true;

while( (!entrada || !entrada.trim() || isNaN(Number(entrada))) && continuar){
   continuar = confirm("Você deveria digitar um valor válido. Clique OK para tentar novamente ou Cancelar para sair.");
  if(continuar){
    entrada = prompt("Digite um número:");
  }
}

if(entrada && entrada.trim()){
  let numero = Number(entrada);
  if(numero > 15){
    console.log("Número maior que quinze.");
  }
  else if(numero < 15){
    console.log("Número menor que quinze.");
  }
  else if(numero === 15){
    console.log("Número igual a quinze.");
  }
  else{
    console.log("Valor inválido.");
  }
}
else{
  console.log("Nenhum valor digitado.");
}
