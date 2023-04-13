let qt = []

qt[0] = document.querySelectorAll('.star.p1')

qt[0].forEach(function(element) {
    element.addEventListener('click',function() {
        console.log(element.value)
        // element.classList.add('ativo')
        qt[0] = Number(element.value)
    })
})

// PERGUNTA 2 

qt[1] = document.querySelectorAll('.star.p2')

qt[1].forEach(function(element) {
    element.addEventListener('click',function() {
        console.log(element.value)
        // element.classList.add('ativo')
        qt[1] = Number(element.value)
    })
})

// PERGUNTA 3

qt[2] = document.querySelectorAll('.star.p3')

qt[2].forEach(function(element) {
    element.addEventListener('click',function() {
        console.log(element.value)
        // element.classList.add('ativo')
        qt[2] = Number(element.value)
    })
})

// PERGUNTA 4

qt[3] = document.querySelectorAll('.star.p4')

qt[3].forEach(function(element) {
    element.addEventListener('click',function() {
        console.log(element.value)
        // element.classList.add('ativo')
        qt[3] = Number(element.value)
    })
})

// PERGUNTA 5

qt[4] = document.querySelectorAll('.star.p5')

qt[4].forEach(function(element) {
    element.addEventListener('click',function() {
        console.log(element.value)
        // element.classList.add('ativo')
        qt[4] = Number(element.value)
    })
})

const rst1 = document.querySelector('.result.f1')


function calculo() {
    let media = (qt[0]+qt[1]+qt[2]+qt[3]+qt[4]) / qt.length
    console.log(media)
    rst1.innerHTML = (`A média é ${media}`)
}

// ESTILIZAÇÃO


let label = []

label[0] = document.querySelectorAll(`.rating .label.p1`)

label[1] = document.querySelectorAll('.rating .label.p2')

label[2] = document.querySelectorAll('.rating .label.p3')

label[3] = document.querySelectorAll('.rating .label.p4')

label[4] = document.querySelectorAll('.rating .label.p5')

label[5] = document.querySelectorAll('.rating .label.p6')

label[6] = document.querySelectorAll('.rating .label.p7')

label[7] = document.querySelectorAll('.rating .label.p8')

label[8] = document.querySelectorAll('.rating .label.p9')

label[9] = document.querySelectorAll('.rating .label.p10')


label.forEach(function(emt,idx,ary) {
  label[idx].forEach(function(element,index,array) {
  element.addEventListener('click',function() {
    console.log(array)
    let i = 0
    while(i <= array.length - 1) {
      array[i].classList.remove('ativo')
      i++
    }
    for (let ix = 0; ix <= index; ix++) {
        array[ix].classList.add('ativo')
    }
  })
})
})



// label.forEach(function(element,index,array) {
//   element.addEventListener('click',function() {
//     // console.log(array)
//     let i = 0
//     while(i <= array.length - 1) {
//       array[i].classList.remove('ativo')
//       i++
//     }
//     array[index].classList.add('ativo')
//   })
// })








