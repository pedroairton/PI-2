// function mediaUm() {
//     // Obter os valores das respostas
//     let response1 = Number(document.getElementById('response1').value);
//     let response2 = Number(document.getElementById('response2').value);
//     let response3 = Number(document.getElementById('response3').value);
  
//     // Calcular a média
//     let media = (response1 + response2 + response3) / 3;
  
//     // Exibir a média
//     alert('A média das respostas é: ' + media);
//   }

// let pgt = document.querySelectorAll('#star')


let nota1
let nota2
let nota3
let nota4
let nota5

function ativaV() {
    let opt = document.querySelector('#star5')
    opt.classList.toggle('ativo')
    nota1 = 5
    console.log(nota1)

}
function ativaIV() {
    let opt = document.querySelector('#star4')
    opt.classList.toggle('ativo')
    nota1 = 4
    console.log(nota1)

}
function ativaIII() {
    let opt = document.querySelector('#star3')
    opt.classList.toggle('ativo')
    nota1 = 3
    console.log(nota1)

}
function ativaII() {
    let opt = document.querySelector('#star2')
    opt.classList.toggle('ativo')
    nota1 = 2
    console.log(nota1)

}
function ativaI() {
    let opt = document.querySelector('#star1')
    opt.classList.toggle('ativo')
    nota1 = 1
    console.log(nota1)
}

let i = 1
let pergunta = []

while(i<6) {
    
    pergunta[i] = document.querySelector(`#star${i}`)
    pergunta[i].addEventListener('click',function() {
        let nota = pergunta.value
        console.log(nota)
    })
    console.log(pergunta[i].value)
    i++

}

  
