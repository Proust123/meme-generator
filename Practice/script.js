const inp1 = document.querySelector('.input1')
const inp2 = document.querySelector('.input2')
const inp3 = document.querySelector('.input3')
const img = document.querySelector('.image1')
const topText = document.querySelector('.top_text')
const bottom = document.querySelector('.bottom_text')

function makeMeme() {
    let image = inp1.value
    let text1 = inp2.value
    let text2 = inp3.value

    img.src = image
    topText.innerText = text1
    bottom.innerText = text2
}
