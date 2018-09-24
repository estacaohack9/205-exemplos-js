let tabuada = Number(prompt("Digite um número para ver a tabuada"));
let limite = Number(prompt("Até quando vai a tabuada pra você?"));
let i = 0;


while(i <= limite){
  console.log(`${tabuada} X ${i} = ${tabuada*i}`);
  
  // i = i + 1;
  // i += 1;
  i++;
}
