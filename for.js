let nomes = ["Waldisney", "Hayane", "Oligopoldo", "Policarpo", "Katia"];

let usuario = {
  nome: "Zé",
  idade: 46,
  vivo: true //Significa que o celular é da vivo
}

// FOR para percorrer a lista:
for(let i = 0; i<nomes.length; i++){
  console.log(nomes[i]);
}

console.log('--------------------');

// FOR IN -> percorre todos os índices de uma lista.
for(let i in nomes){
  console.log(nomes[i]);
}

console.log('--------------------');

// FOR OF -> percorre todos os valores de uma lista.

for(let nome of nomes){
  console.log(nome);
}

// FOR IN -> percorrer chaves de um objeto.

for(let chave in usuario){
  console.log(`O valor da chave ${chave} é: ${usuario[chave]}`);
}

console.log('--------------------');