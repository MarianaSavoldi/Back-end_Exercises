const readline = require('readline-sync');

function calculaImc () {
  const peso = readline.questionFloat('Digite seu peso (kg):');
  const altura = readline.questionInt('Digite sua altura (cm):');

  console.log(`Peso: ${peso}, Altura: ${altura}`);

  const imc = (peso / Math.pow((altura / 100), 2)).toFixed(2);

  console.log(`IMC: ${imc}`);

  if(imc < 18.5) {
    console.log('Você está: Abaixo do peso (magreza)');
    return;
  }
  if(imc >= 18.5 && imc <= 24.9) {
    console.log('Você está: Peso normal');
    return;
  }
  if(imc >= 25 && imc <= 29.9) {
    console.log('Você está: Acima do peso (sobrepeso)');
    return;
  }
  if(imc >= 30 && imc <= 34.9) {
    console.log('Você está: Obesidade grau I');
    return;
  }
  if(imc >= 35 && imc <= 39.9) {
    console.log('Você está: Obesidade grau II');
    return;
  }
  console.log('Você está: Obesidade graus III e IV')
}

calculaImc();

// tabela IMC: 
// | IMC                                       | Situação                  |
// | ----------------------------------------- | ------------------------- |
// | Abaixo de 18,5                            | Abaixo do peso (magreza)  |
// | Entre 18,5 e 24,9                         | Peso normal               |
// | Entre 25,0 e 29,9                         | Acima do peso (sobrepeso) |
// | Entre 30,0 e 34,9                         | Obesidade grau I          |
// | Entre 35,0 e 39,9                         | Obesidade grau II         |
// | 40,0 e acima                              | Obesidade graus III e IV  |