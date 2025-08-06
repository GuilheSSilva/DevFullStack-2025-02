//console.log("A gíria 'Mané' é muito utilizada no RJ")
//console.log('A gíria "Mané" é muito utilizada no RJ')
//console.log('Jaques Hyago')

//console.log(typeof("Olá, mundo!"))
//console.log(typeof(1.5))

//console.log(1.5)
//console.log(typeof('10'), 1000, 'Geralt de Rívia')

// let name = 'Jaques'
// console.log(name)

// var anotherName = 'Hyago'
// console.log(anotherName)

// const CITY = "Alagoas"
// //CITY = "Mossoró"

// let test
// console.log(test)
// test = 'teste'
// console.log(test)

// let titulosDoInter = null
// console.log(typeof(titulosDoInter))

// let num1 = 2
// let num2 = 3

// console.log(num1 + num2)
// console.log(num1 - num2)
// console.log(num1 * num2)
// console.log(num1 / num2)
// console.log(num1 ** num2)
// console.log(num1 % num2)

//()
//**
//* /
//+ -
// let num = "10"
// console.log(parseInt(num) +10)

// let counter = 1;

// console.log(counter--)
// console.log(counter)

// let step = 12

// counter += 12
// console.log(counter)
// counter += 12
// console.log(counter)
// counter += step
// console.log(counter)
// counter += step
// console.log(counter)
// counter += step

// console.log(counter)

// console.log(10 > 5)
// console.log(10 < 5)
// console.log(10 <= 5)
// console.log(10 >= 5)
// console.log(10 == 5)
// console.log(10 == 10)
// console.log(10 == '10')
// console.log(10 === '10')
// console.log(10 != 10)
// console.log(10 !== '10')

// console.log((10 < 5) && (10 > 2))
// console.log((10 < 5) && !(10 > 2))
// console.log((10 > 2) || (10 < 5))
// console.log(!(10 > 2) || (10 < 5))

// let usuario = "jaques"
// let senha = "1234"

// let autenticacao = usuario === "jaques" && senha === "1234"

// console.log(autenticacao)

// const nota = 60

// if(nota < 60) {
//     console.log('reprovado')
// }else {
//     console.log('aprovado')
// }

// (nota < 60) ? console.log('reprovado') : console.log('aprovado')


// Exercício 1: Verificar se um número é par ou ímpar.
// let numeroParImpar = 17

// numeroParImpar % 2 === 0 ? console.log('PAR!') : console.log('ÍMPAR') 

// Exercício 2: Encontrar o maior entre três números.
// let n1 = 2
// let n2 = 1
// let n3 = 5

// if((n1 > n2) && (n1 > n3)){
//     console.log("O primeiro número é o maior!")
// } else if ((n2 > n1) && (n2 > n3)){
//     console.log("O segundo número é o maior!")
// }else if ((n3 > n1) && (n3 > n2)) {
//     console.log("O terceiro número é o maior!")
// }else{
//     console.log('Os números são iguais ou há empate entre dois ou mais números')
// }

// let maior = (n1 > n2 && n1 > n3) ? n1 : (n2 > n3 ? n2 : n3)
// console.log(maior)

//Exerício 3: Façam uma calcularado simples utilizando entrada de usuário.

const prompt = require('prompt-sync')()

// let valor1 = Number(prompt("Insira o primeiro valor: "))
// let valor2 = Number(prompt("Insira o segundo valor: "))
// let op = prompt('Informe a opetação desejada: (+, - , /, * : ')
// let resultado = 0

// if(op === '+'){
//     resultado = valor1 + valor2
// }else if(op === '-'){
//     resultado = valor1 - valor2
// }else if(op === '*'){
//     resultado = valor1 * valor2
// }else if(op === '/'){
//     if(valor2 !== 0){
//         resultado = valor1/valor2
//     }else{
//         console.log('Erro: divisão por zero')
//         resultado = undefined 
//     }
// } else{
//     console.log('Operação inválida')
//     resultado = undefined
// }

// if(resultado !== undefined){
//     console.log("Resultado: ", resultado)
// }

// let opcao = 3

// switch(opcao){
//     case 1:
//         console.log('Você seklecionou a primeira opção')
//         break
//     case 2:
//         console.log('Você selecionou a segunda opção')
//         break
//     default:
//         console.log('Você não escolheu nenhuma opção válida!')
//         break
//}

let valor1 = Number(prompt("Insira o primeiro valor: "))
let valor2 = Number(prompt("Insira o segundo valor: "))
let op = prompt('Informe a opetação desejada: (+, - , /, * : ')
let resultado = 0

switch(op){
    case '+':
        resultado = valor1 + valor2
        break
    case '-':
        resultado = valor1 - valor2
        break
    case '*':
        resultado = valor1 * valor2
        break
    case '/':
        if(valor2 == 0){
            console.log('Erro: divisão por zero')
            resultado = undefined
        }else{
            resultado = valor1 / valor2
        }
        break        
    default:
        console.log('Operação inválida')
        resultado = undefined
        break
}

if(resultado !== undefined){
    console.log("Resultado: ", resultado)
}

//Exercício 2: Verificar se um número é positivo, negativo ou zero
//Exercício 3: Verificar é bissexto
//Exercício 4: Definam faixas etárias para crianças, adultos e idosos e com switch apresentem na tela se a pessoa que informou a idade está em uma e qual a faixa etária
