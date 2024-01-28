alert('Bem vindo ao jogo do número secreto!')

let numeroSecreto = 34;
console.log(numeroSecreto)
let chute = prompt('Tente adivinhar o número secreto! Escolha um número entre 1 e 100')

if (chute == numeroSecreto) {
    alert(`Você acertou! O número era ${numeroSecreto}`)
} else {
    alert('Você errou :/')
} 