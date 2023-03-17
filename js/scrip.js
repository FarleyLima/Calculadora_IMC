function clicar() {
  const altura = document.querySelector('#altura')
  const peso = document.querySelector('#peso')

  // variável para fazer o calculo da altura ao quadrado
  var calcAltura = Math.pow(altura.value, 2)
  // passando o valar do peso para altura
  var calcPeso = peso.value
  // variável para calcular o IMC
  var resultado = calcPeso / calcAltura
  // passando o resuçtado para ser exibido no campo
  document.querySelector('#msg').innerHTML = tableImc(resultado.toFixed(2))
}

// função para verificação e classificação do IMC
function tableImc(result) {
  if (result < 16.9) {
    return `Seu imc é ${result}, você está muito abaixo do peso`
  } else if (result >= 17 && result <= 18.4) {
    return `Seu imc é ${result}, você astá abaixo do peso`
  } else if (result >= 18.5 && result <= 24.9) {
    return `Seu imc é ${result}, seu peso está normal`
  } else if (result >= 25 && result <= 29.9) {
    return `Seu imc é ${result}, você está acima do peso`
  } else if (result >= 30 && result <= 34.9) {
    return `Seu imc é ${result}, você é considerado uma pessoa obesa gral 1`
  } else if (result >= 35 && result <= 40) {
    return `Seu imc é ${result}, você é considerado uma pessoa obesa gral 2`
  } else if (result > 40) {
    return `Seu imc é ${result}, você é considerado uma pessoa obesa gral 3`
  }
}
