//desafio 10 - 04. Boas práticas de programação
//Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

function verificaNota(nota){
  const resultadoNota = nota >= 7 ? 'Aprovado' : 'Reprovado';
  return console.log(resultadoNota);
}

verificaNota(10);