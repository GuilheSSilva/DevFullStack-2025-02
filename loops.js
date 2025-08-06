// let contadora = 0

// while(contadora < 10){
//     console.log(contadora)
//     contadora = contadora + 1
//     //contadora += 1
//     //contadora++
// }

// console.log("Salve o tricolor gaúcho")

const prompt = require('prompt-sync')()

// let numeroTabuada = Number(prompt('Qual o número que você quer saber a tabuada?'))

// let contadora = 1

// while(contadora <= 10) {
//     console.log(`${numeroTabuada} X ${contadora} = ${numeroTabuada * contadora}`)

//     contadora++
// }

// let contadora = 10

// while(contadora >= 0) {
//     console.log(contadora)
//     contadora--
// }

// inicialização, condição, incremento
// for(let contadora = 0; contadora <= 10; contadora++){
//     console.log(contadora)
// }


//façam a média aritmética de número inseridos até que o usuário digite 0.
// let resposta = null
// let contador = 0
// let soma = 0

// while(resposta != 0){
//     resposta = Number(prompt('Informe as médias: (para calcular a média final digite 0):'))

//     soma += resposta
//     contador ++
// }

// let mediaFinal = soma/(contador-1)
// console.log(`A média final é: ${mediaFinal}`)

// let contador = 11

// do {
//     console.log(contador, ++contador)
// } while(contado < 10)

// while(contador < 10) {
//     console.log(contador, contador++)
// }

//façam a média aritmética de número inseridos até que o usuário digite 0.
let resposta = 0
let soma = 0
let contador = 0

do{
    resposta = Number(prompt('Informe as médias(Para calcular as médias final digite 0:'))
    soma += resposta
    if(resposta !== 0){
        contador++
    }
} while(resposta != 0)

let mediaFinal = soma/(contador)
console.log(`A média final é: ${mediaFinal}`)