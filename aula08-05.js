// let nome = 'Julio César'

// console.log(nome.length)
// console.log(nome.charAt(0))
// console.log(nome.indexOf('C'))

// console.log(nome.replace('Julio', 'Cleyton'))
// console.log(nome.substr(6, 5))
// console.log(nome.toUpperCase())
// console.log(nome.toLowerCase())

// console.log("   Wesley".trim())

// //Façam uma função que inverta uma string.
// function reverseString(str){
//     let reversed = ''

//     for(let i = str.length - 1; i >= 0; i-- ) {
//         reversed += str[i]
//     }

//     return reversed
// }

// console.log(reverseString("Olá, mundo!"))
// function reverseString(str) {
//     return str.split('').reverse().join('')
// }

// console.log(reverseString('Olá mundo!'))

//Encontrem o número de vogais de uma String
// function countVowels(str) {
//     let vowels = str.match(/[aeiou]/gi)
//     return vowels ? vowels.length : 0
// }

// console.log(countVowels('Dragon Age'))

// console.log(Math.ceil(100.2))
// console.log(Math.floor(100.2))
// console.log(Math.round(100.2))

// console.log(Math.sqrt(81))
// console.log(Math.cbrt(81))
// console.log(Math.pow(9, 2))

// console.log(Math.abs(-100.2))

// console.log(Math.random() * 100)

//Gerar um número aleatório entre dois valores
// function randomBetween(min, max) {
//     return Math.floor(Math.random()) * (max - min + 1) + min
// }

// console.log(randomBetween(1, 3))

let date = new Date()

// console.log(date.getDate())
// console.log(date.getMonth())
// console.log(date.getFullYear())
// console.log(date.toString())

// let date1 = new Date(2015, 7, 7)
// let date2 = new Date(2025, 7, 7)

// console.log(date1.getTime())
// console.log(date2.getTime())

// let milissegundosEntreDatas = Math.abs(date1.getTime() - date2.getTime())

// console.log(milissegundosEntreDatas)

// let milissegundosPorDia = (1 * 24 * 60 * 60 * 1000)

// console.log(`A diferença entre as datas é de: ${milissegundosEntreDatas/milissegundosPorDia}`)

//Formatar uma data. 

function formatDate(date) {
    let day = date.getDate().toString().padStart(2, '0')
    let month = (date.getMonth()+1).toString().padStart(2, '0')
    let year = date.getFullYear().toString()

    return `${day}/${month}/${year}`
}

console.log(formatDate(date))

//A soma de duas matrizes.