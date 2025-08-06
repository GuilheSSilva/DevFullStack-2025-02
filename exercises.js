const prompt = require('prompt-sync')()
// //Escreva um algoritmo que leia uma temperatura em graus Celsius e devolva em Fahrenheit

// let temperatura = Number(promt('Informe a temperatura em graus celsius: '))

// let fahrenheit = (temperatura * 9/5) + 32

// console.log(`A temperatura em Fahrenheit é: `, fahrenheit)

//Escreva um algoritmo para ler o número de eleitores de uma município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.

// let totalEleitores = Number(prompt('Informe o número total de eleitores: '))
// let votosBrancos = Number(prompt('Informe o número total de votos em brancos: '))
// let votosNulos = Number(prompt('Informe o número total votos nulos: '))
// let votosValidos = Number(prompt('Informe o número total de votos válidos: '))

// console.log('O percentual de votos em branco é:', (votosBrancos/totalEleitores) * 100)
// console.log('O percentual de votos nulos é:', (votosNulos/totalEleitores) * 100)
// console.log('O perecentual de votos válidos é:', (votosValidos/totalEleitores) * 100)

// A turma C é composta de 60 alunos, e a turma D de 20 alunos. Escreva um algoritmo que leia o percentual de alunos reprovados na turma C, o percentual de aprovados na turma D, calcule e escreva:

//a) O número de alunos reprovados na turma C.
//b) O número de alunos reprovados na turma D.
//c) A porcentagem de alunos reprovados em relação ao total de alunos das duas turmas.

//[Exemplo de dados de entrada]
//10 (percentual de alunos reprovados na turma C)
//85 (percentual de alunos aprovados na turma D)

//[Saída para os dados de entrada acima]
//6 (quantidade de alunos reprovados na turma C)
//3 (quantidade de alunps reprovados na turma D)
//11.25 (Percentual de alunos reprovados em relação ao total de alunos das duas)

// let turmaC = 60
// let turmaD = 20


// let percentualReprovadosC = Number(prompt('Escreva o percentual de alunos reprovados na turma C:'))

// let percentualAprovadosD = Number(prompt('Escreva o percentual de alunos aprovados na turma D:'))

// let qtdReprovadosC = (turmaC * percentualReprovadosC)/100
// let qtdReprovadosD = ((100 - percentualAprovadosD) * turmaD )/100

// let totalAlunos = turmaC + turmaD

// let relacaoReprovadosTotal = ((qtdReprovadosC + qtdReprovadosD ) / totalAlunos) * 100

// console.log('A quantidade de alunos reprovados na turma C é de : ', qtdReprovadosC)

// console.log('A quantidade de alunos reprovados na turma D é de : ', qtdReprovadosD)

// console.log('percentual de alunos reprovados em relação ao total de alunos das duas é de:', relacaoReprovadosTotal)

//Faça um programa que leia o dia da semana(Domingo, Segunda, Terça, Quarta, Quinta, Sexta e Sabado). Esse dia deve ser um texto. Se for Sabado ou Domingo imprimir "Final de Semana", senão imprimir "Dia Útil."

// let diaDaSemana = prompt ('Informe o dia da semana: ')

// switch(diaDaSemana){
//     case 'Sabado':
//         console.log('Final de semana!')
//         break
//     case 'Domingo':
//         console.log('Final de Semana!')
//         break
//     default:
//         console.log('Dia útil')
// }

//Escreva um algoritmo para repetir a leitura de um número enquanto o valor fornecido for diferente de 0. Para cada número fornecido, imprimir se ele é NEGATIVO ou POSITIVO. Quando o número 0 for fornecido a repetição deve ser encerrada sem imprimir mensagem alguma.
// let valor
// do {
//     valor = Number(prompt('Informe um valor: '))

//     if(valor > 0){
//         console.log('Positivo!')
//     }else if(valor == 0){
//         break
//     }else {
//         console.log('Negativo')
//     }

// } while (valor !== 0)

//Escreva um algoritmo para repetir a leitura de uma senha até que ela seja válida. Para cada leitura da senha incorreta informa escrever a mensagem "SENHA INVÁLIDA". Quanto a senha for informada corretamente deve ser impressa a mensagem "ACESSO PERMITIDO" e o algoritmo encerrado. Considere que a senha correta é o valor 2007.

let senha

do{
    senha = prompt('Informe a senha: ')

    if(senha != 2807){
        console.log('Senha incorreta.')
    }else {
        console.log('Acesso permitido!')
    }
}while(senha != 2807)