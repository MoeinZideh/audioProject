new Audio();

const container =document.getElementById("container")
const title =document.querySelector("h1")

const boom = document.getElementById("boom")
const playBoom = document.getElementById("playBoom")
const clap = document.getElementById("clap")
const playCalp = document.getElementById("playCalp")
const hihat = document.getElementById("hihat")
const playHihat = document.getElementById("playHihat")
const kick = document.getElementById("kick")
const playKick = document.getElementById("playKick")
const openhat = document.getElementById("openhat")
const playOpenhat = document.getElementById("playOpenhat")
const ride = document.getElementById("ride")
const playRide = document.getElementById("playRide")
const snare = document.getElementById("snare")
const playSnare = document.getElementById("playSnare")
const tink = document.getElementById("tink")
const playTink = document.getElementById("playTink")
const tom = document.getElementById("tom")
const playTom = document.getElementById("playTom")

let boomPath = new Audio('./sounds/boom.wav')
let clapPath = new Audio('./sounds/clap.wav')
let hihatPath = new Audio('./sounds/hihat.wav')
let kickPath = new Audio('./sounds/kick.wav')
let openhatPath = new Audio('./sounds/openhat.wav')
let ridePath = new Audio('./sounds/ride.wav')
let snarePath = new Audio('./sounds/snare.wav')
let tinkPath = new Audio('./sounds/tink.wav')
let tomPath = new Audio('./sounds/tom.wav')

boom.addEventListener("click", boomSound)
function boomSound(){
    boomPath.play();
}

clap.addEventListener("click", calpSound)
function calpSound(){
    clapPath.play();
}

hihat.addEventListener("click", hihatSound)
function hihatSound(){
    hihatPath.play();
}

kick.addEventListener("click", kickSound)
function kickSound(){
    kickPath.play();
}

openhat.addEventListener("click", openhatSound)
function openhatSound() {
    openhatPath.play();
}

ride.addEventListener("click", rideSound)
function rideSound(){
    ridePath.play();
}

snare.addEventListener("click", snareSound)
function snareSound(){
    snarePath.play();
}

tink.addEventListener("click", tinkSound)
function tinkSound(){
    tinkPath.play();
}

tom.addEventListener("click", timSound)
function timSound(){
    tomPath.play();
}

function resetPage() {
    container.style.backgroundColor = '#F4DFB6';
    title.style.color = '#000';
    title.textContent = "please click on buttons or press the first letter key"
    title.style.backgroundColor = "inherit"
}

function errorMassage() {
    container.style.backgroundColor = 'pink';
    title.textContent = "Please press the correct key.Press 'Enter' and try again"
    title.style.color = "#000"
    title.style.backgroundColor = "red"
}

document.addEventListener("keydown", (event) => {
    if(event.key == "b"){
        boomSound()
    } else if(event.key == "c") {
        calpSound()
    }else if(event.key == "h") {
        hihatSound()
    }else if(event.key == "k") {
        kickSound()
    }else if(event.key == "o") {
        openhatSound()
    }else if(event.key == "r") {
        rideSound()
    }else if(event.key == "s") {
        snareSound()
    }else if(event.key == "t") {
        tinkSound()
    }else if(event.key == "m") {
        timSound()
    } else if (event.key == 'Enter') {
        resetPage()
    }else {
        errorMassage()
    }
})