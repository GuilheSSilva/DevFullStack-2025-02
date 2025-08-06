// let livro = {
//     nome: 'Marley e Eu',
//     anoLancamento: '2024',
//     autor: 'Will Smith',
//     nrPaginas: 12,
//     genero: 'comedia',
//     atores: ['Scooby', 'Super Cão', 'Batcão'],

//     mostrarCaracteristicas: function(){
//         return `${this.nome} é um livro para ficar alegre.`
//     }
// }

// // //console.log(livro.mostrarCaracteristicas())
// // //console.log(livro.nome)

// // let livro2 = livro
// // livro2.preco = 20.2
// // console.log(livro)
// // console.log(livro2)

// // let filme = {
// //     titulo: "High School Musical",
// //     anoLancamento: 2007,
// //     atores: ['Zac Efron', 'Árthur Morgan', 'Cloud Strife'],
// //     genero: 'guerra',

// //     mostrarCaracteristicas: function(){
// //         return `${this.titulo} é um filme de drama.`
// //     }
// // }

// // console.log(filme.mostrarCaracteristicas())

// function Anime(nome, maisForte, maisFraco, nota) {
//     return {
//         nome,
//         maisForte,
//         maisFraco,
//         nota
//     }
// }

// let anime1 = Anime("Naruto", "Gemna", "Konohamaru", 5)
// let anime2 = Anime("One Piece", 'Coby', 'Ace', 5)
// // console.log(anime1)
// // console.log(anime2)

// let jogadores = ['Caça-Rato', 'Ganso', 'Pato']

// // for(let key in jogadores) {
// //     console.log(jogadores[key])
// // }

// // for(let value in anime2) {
// //     console.log(anime2[value])
// // }

// let palavra = 'Grêmio'

// // for(let value of Object.keys(anime1)){
// //     console.log(anime1[value])
// // }

// for(let i = 0; i < Object.keys(anime1).length; i++ ) {
//     console.log(anime1.keys)
// }

// // Calculem as médias das notas dos alunos de um professor e digam se o Professor está na média.

// let professor = {
//     nome: 'Stark Paker',
//     materia: 'Física',
//     notas: {
//         aluno1: [5, 2],
//         aluno2: [3, 7]
//     }
// }

// let somaNotas = 0
// let numeroAlunos = 0
// for(let aluno in professor.notas){
//     somaNotas += Array.isArray(professor.notas[aluno]) ? professor.notas[aluno].reduce((acc, nota) => acc + nota, 0)/professor.notas[aluno].length : professor.notas[aluno]

//     numeroAlunos ++
// }

// let media = somaNotas/numeroAlunos

// if(media >= 6){
//     console.log(`a média da turma é ${media} e está acima do padrão`)
// } else {
//     console.log(`a média da turma é ${media} e está abaixo do padrão`)
// }
    

let livraria = [
    {titulo: "1984", autor: "George Orwell", ano: 1984},
    {titulo: "O Profeta", autor: "Endrew Berthold", ano: 2001},
    {titulo: "Código Limpo", autor: "Martin", ano: 2010},
    {titulo: "O Velho e o Mar", autor: "Hemingway", ano: 1910},
    {titulo: "O Principe", autor: "Maquiavel", ano: 2002},
]

//For Of para iterar e verificar os livros publicados antes do ano 2000.

// for(let livro of livraria) {
//     if(livro.ano < 2000) {
//         console.log(livro)
//     }
// }

let filmes = [
    {titulo:"Sempre ao seu lado", genero:"De chorar"},
    {titulo:"Massacre da Serra Eletrica", genero:"Terror"},
    {titulo:"Minha mãe é uma peça", genero:"Comédia"},
    {titulo:"Tarzan", genero:"Aventura"},
    {titulo:"Como eu Era Antes de Você", genero:"De chorar"},
    {titulo:"Jogo da Imitação", genero:"Histórico"},
    {titulo:"Top Gun", genero:"Guerra"},
    {titulo:"Your Name", genero:"Romance"},
    {titulo:"Deadpool", genero:"Herói"},
    {titulo:"Batman Forever", genero:"Herói"},
]

let contagemFilmes = {}
//Voces listem a contagem de generos desses filmes.
// filmes.forEach((filmes) => {
//     if(contagemFilmes[filmes.genero]){
//         contagemFilmes[filmes.genero]++
//     }else{
//         contagemFilmes[filmes.genero]=1
//     }
// })

//console.table(contagemFilmes)
// for(let genero in contagemFilmes) {
//     console.log(`Estão presentes na lista ${contagemFilmes[genero]} filmes do gênero ${genero}`)
// }

//Construam uma função que calcule o fatorial de um número - 5 = 1x2x3x4x5 = 120
function fatorial(numero){
    let fatorial = 1

    for(let i = 1; i <= numero; i++) {
        fatorial = fatorial * i
    }

    console.log(fatorial)
}

//fatorial(5)

//Imprimam os primeiros 10 números da sequencia de Fibonacci
//o terceiro elemento é a soma dos dois anteiores.

function fibonnaci(){
    let a =0, b = 1, temp
    
    for(let i = 3; i <= 10; i++){
        temp = a + b
        console.log(temp)
        a = b
        b = temp 
    }
}

//fibonnaci()

//função de PA - Progressão Aritmética
// function pa(primeiroTermo, razao){
//     let soma = 0
//     for(let i = 0; i < 10; i++){
//         let termo = primeiroTermo + i * razao
//         console.log(termo)
//         soma += termo
    
//     }
    
//     console.log(`A soma dos termos é ${soma}`)
// }

//     pa(1, 3)

function fatorial(n){
    if( n === 0) {
        return 1
    } else{
        return n * fatorial(n-1)
    }
}

// 5 * fatorial(4)
// 4 * fatorial(3)
// 3 * fatorial(2)
// 2 * fatorial(1)
// 1 * fatorial(0)

// 1 * 1 = 1
// 2 * 1 = 2
// 3 * 2 = 6
// 4 * 6 = 24
// 5 * 24 = 120

//console.log(fatorial(5))

// Soma dos números de 1 até N

// function soma(n){
//     if(n === 1){
//         return 1
//     } else {
//         return n + soma(n-1)
//     }
// }

//1 + 2 + 3 + 4 + 5 = 15
//console.log(soma(5))

//fibonacci

// function fibo(n){
//     if(n === 0){
//         return 0
//     } else if(n === 1){
//         return 1
//     }else {
//         return fibo(n-1) + fibo(n - 2)
//     }
// }

let categorias = [
    {
        id: 1,
        nome: "Eletrônicos",
        filhos: [
            {id: 2, nome: "Celulares", filhos: []},
            {id: 3, nome: "Computadores", filhos: [
                {id: 4, nome: "Tablets", filhos: []},
            ]}
        ]
    },
    {
        id: 5,
        nome: "Louças",
        filhos: []
    }
]

function imprimirCategorias(lista, nivel = 0){
    for(let categoria of lista) {
        console.log(" ".repeat(nivel * 2) + categoria.nome)
        if(categoria.filhos.length > 0){
            imprimirCategorias(categoria.filhos, nivel + 1)
        }
    }
}
imprimirCategorias(categorias)

// Eletrônicos
//     Celulares
//     Computadores
//         Tablets
// Louças