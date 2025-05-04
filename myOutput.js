// const input1 = document.querySelector('.input1')
// const input2 = document.querySelector('.input2')
// const input3 = document.querySelector('.input3')
// const picture = document.querySelector('.picture')
// const data = []

// function makeMeme() {
//     picture.innerHTML = ''

//     let obj = {
//         image : input1.value,
//         topText : input2.value,
//         bottomText : input3.value,
//     }

//     data.push(obj)

//     data.map((e) => {
//         picture.innerHTML += `

//             <div class = "main_image">
//                 <img class = "image1" src="${e.image}" alt="">
//             </div>
//             <div class = "top_text">
//                 <h1>${e.topText}</h1>
//             </div>
//             <div class = "bottom_text">
//                 <h1>${e.bottomText}</h1>
//             </div>

        
//         `
//     })

// }

// const input1 = document.querySelector('.input1')
// const input2 = document.querySelector('.input2')
// const input3 = document.querySelector('.input3')
// const picture = document.querySelector('.image1')
// const topText = document.querySelector(".top_text") 
// const bottomText = document.querySelector(".bottom_text") 

// function makeMeme() {
//     picture.setAttribute('src', input1.value)
//     topText.innerHTML = input2.value
//     bottomText.innerHTML = input3.value
// }

const inp1 = document.querySelector('.input1')
const inp2 = document.querySelector('.input2')
const inp3 = document.querySelector('.input3')
const img = document.querySelector('.image1')
const topText = document.querySelector('.top_text')
const bottomText = document.querySelector('.bottom_text')

function makeMeme() {
    img.setAttribute('src', inp1.value)
    topText.innerHTML = inp2.value
    bottomText.innerHTML = inp3.value
}