//Light on
let onbtn = document.querySelector(`.onbtn`)
let img = document.querySelector(`img`)
function turnOnLight () {
    img.src="./Images/light on.jpg"
}
onbtn.addEventListener(`click`, turnOnLight)

//Light off
let offbtn = document.querySelector(`.offbtn`)
function turnOffLight () {
    img.src="./Images/light off.jpg"
}
offbtn.addEventListener(`click`, turnOffLight)