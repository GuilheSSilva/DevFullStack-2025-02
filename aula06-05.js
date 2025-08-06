// let listaCoisas = Array()
// listaCoisas['hardware'] = ['Placa de Vídeo']
// listaCoisas['hardware'][1] = 'Smartwach'
// listaCoisas['games'] = ['GTA VI']
// listaCoisas['games'][1] = 'The Witcher'

// console.table(listaCoisas)

//  function RetornaParOuImpar(valor) {
//     let resultado

//     if(valor % 2 ===0){
//         resultado = 'PAR'
//     } else{
//         resultado = 'ÍMPAR'
//     }
//     return resultado
// }
//  let numero = 10
// let resultado = RetornaParOuImpar(numero)
// console.log(resultado)

// function RetornaParOuImpar(valor) {
//     let resultado

//     if(valor % 2 ===0){
//         resultado = 'PAR'
//     } else{
//         resultado = 'ÍMPAR'
//     }
    
//     console.log(resultado)
// }
//  let numero = 10
// let resultado = RetornaParOuImpar(numero)

// function calculaArea(altura, largura) {
//     return altura * largura
// }

// console.log(calculaArea(10, 10))

// //Façam uma função que retorna um array ordenado
// function ordernaArray(arr){
//     return arr.sort((a, b) => a - b)
// }

// console.log(ordernaArray([1, 3, 2, 10, 7]))

// fuction exibeNome(nome = 'Sarcedote'){
//      console.log(nome)
//}

//exibeNome()

// let exibeNome = function(nome){
//     console.log(nome)
// }

// let exibeNome1 = (nome) => console.log(nome)

// exibeNome1('Jaques')

// let sucesso = () => console.log('Requisição foi um sucesso')

// let erro = function(){
//      console.log('Requisição deu erro')
// }

// function requisicao(sucesso, erro) {
//     if(false){
//         sucesso()
//     } else {
//         erro()
//     }
// }

//requisicao(sucesso, erro)

//let sucesso = (message) => console.log(message)

// let erro = function() {
//     console.log('Requisição deu errado')
// }

// function erro() {
//     console.log('Requisição deu errado')
// }


// function requisicao(sucesso, erro) {
//     if(true) {
//         sucesso('Requisição deu certo mesmo')
//     }else {
//         erro()
//     }
// }

// requisicao((message) => console.log(message), erro)

//Criar uma função que soma os elementos de um Array e retorna esse valor

// function somaArray(arr) {
//     let soma = 0

//     for(let i = 0; i < arr.length; i++) {
//         soma += arr[i]
//     }

//     return soma
// }

// console.log(somaArray([1, 2, 3, 4, 5]))

//Retorna o maior número em um array

function maiorValor(arr){
    let maior = arr[0]

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > maior) {
            maior = arr[i]
        }
    }

    console.log(maior)
}

maiorValor([1, 100, -3, 2, 0])