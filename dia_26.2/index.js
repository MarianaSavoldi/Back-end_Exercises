// Exercício 1
function exercicio1(a, b, c) {
  return new Promise((resolve, reject) => {
  /* Caso o tipo de algum parâmetro não seja `number`, rejeitamos a Promise */
    if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number'){
      reject("Informe apenas números");
    }
    const resultado = (a + b) * c;

    if(resultado < 50){
      return reject('Valor muito baixo')
    }

    resolve(resultado);
  });
}

// exercicio1(10, 10, 10)
// .then(resolve => console.log(resolve))
// .catch(error => console.log(error))

// exercicio1(1, 1, 'a')
// .then(resolve => console.log(resolve))
// .catch(error => console.log(error))

// exercicio1(1, 1, 1)
// .then(resolve => console.log(resolve))
// .catch(error => console.log(error))

// -----------------------------------------

// Exercício 2
function numero() {
  return Math.floor(Math.random() * 100 + 1)
}

function exercicio2() {
  const numeros = Array.from({length: 3}).map(numero)
  exercicio1(...numeros)
    .then(res => console.log(res))
    .catch(err => console.error(err.message))
}

exercicio2();

