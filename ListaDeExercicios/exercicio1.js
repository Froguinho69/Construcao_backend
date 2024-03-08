var prompt = require('prompt-sync')()
let nome = prompt("Qual o seu nome? ")

console.log("Olá, " + nome + ". Salve")

let idade = prompt("Tem quantus anus? ")

if(idade >= 18){
    console.log("Você já pode ser preso, pivete!")
} else {
    console.log("Ta muleke ainda!")
}

let notaProva1 = Number(prompt("Nota prova a1? "))
let notaProva2 = Number(prompt("Nota prova a2? "))

let media = (notaProva1 + notaProva2) / 2
    if(media >= 6){
        console.log("Passou mizerave")
    } else {
        console.log("vacilão morre cedo!")
    }
