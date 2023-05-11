

function mostra(frase){
    document.write(frase)
    pulalinha()
}

function calculaimc(pesohumano, alturahumano){

   return pesohumano / (alturahumano * alturahumano)
}

let nome = prompt("informe seu nome")
let alturainformada = prompt("informe sua altura")
let pesoinformado = prompt("informe o seu peso")

var imc = calculaimc(pesoinformado, alturainformada)


document.write(nome + ", seu imc é  " + imc)