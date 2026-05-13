
// // Conversões:
// let numero = "123";
// console.log(typeof numero); // 123
// console.log(typeof parseInt(numero)); // 123
// console.log(typeof parseFloat("12.5")); // 12.5
// console.log(typeof numero.toString()); // “123”

// console.log("TIPOS"); 
// console.log(typeof null); 
// console.log(typeof {}); 
// console.log(typeof []); 
// console.log(typeof 'a');
// console.log(typeof true);

// // reatribuição de valores direto:
// numero = false;
// console.log(numero);

// // Métodos de texto:
// let frase = "Estão chegando as provas!";
// console.log(frase.length); // 26 – Retorna a quantidade de caracteres da string
// console.log(frase.indexOf("as")); // 15 – Retorna a posição da string encontrada
// console.log(frase.replace("provas", "férias")); // “Estão chegando as férias!”
// // Formatação de número:
// let valor = 123.456;
// console.log(valor.toFixed(2)); // “123.46”
// console.log(valor.toPrecision(4)); // “123.5”

//Diferença entre var e let
//HOISTING
//Não utilizar var por causa do HOISTING
// var nome1 = "Alê";
// let nome2 = "Jonas";

// if(true){
//     var nome1 = "Carlos";
//     let nome2 = "Matos";
// }

// console.log(nome1);
// console.log(nome2);

const pessoa = {
    nome  : "José",
    idade : 33,
    casado: true,
    email : "email@email.com"
}

//Imprimindo os dados do objeto:
//Concatenação padrão:
console.log(pessoa.nome + " tem " + pessoa.idade + " anos de idade e " + (pessoa.casado ? "é casado " : "não é casado " ) + " caso queira entrar em contato com ele envie um email para " + pessoa.email);

//Template literals com interpolação:
console.log(`${pessoa.nome}  tem  ${pessoa.idade}  anos de idade e  ${(pessoa.casado ? "é casado " : "não é casado " )}, caso queira entrar em contato com ele envie um email para ${pessoa.email}`);


