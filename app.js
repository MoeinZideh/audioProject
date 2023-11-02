new Audio();

const container = document.getElementById("container")
const title = document.querySelector("h1")
const soundNameArea = document.getElementById("soundNameArea")

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
    boom.style.boxShadow = "2px 5px 14px #fff"
    boom.innerHTML = "Boom"
    setTimeout(function(){
        boom.style.boxShadow = "none"
        boom.innerHTML = "b"
    },600)
}

clap.addEventListener("click", calpSound)
function calpSound(){
    clapPath.play();
    clap.style.boxShadow = "2px 5px 14px #fff"
    clap.innerHTML = "clap"
    setTimeout(function(){
        clap.style.boxShadow = "none"
        clap.innerHTML = "c"
    },600)
}

hihat.addEventListener("click", hihatSound)
function hihatSound(){
    hihatPath.play();
    hihat.style.boxShadow = "2px 5px 14px #fff"
    hihat.innerHTML = "Hihat"
    setTimeout(function(){
        hihat.style.boxShadow = "none"
        hihat.innerHTML = "h"
    },600)
}

kick.addEventListener("click", kickSound)
function kickSound(){
    kickPath.play();
    kick.style.boxShadow = "2px 5px 14px #fff"
    kick.innerHTML = "Kick"
    setTimeout(function(){
        kick.style.boxShadow = "none"
        kick.innerHTML = "k"
    },600)
}

openhat.addEventListener("click", openhatSound)
function openhatSound() {
    openhatPath.play();
    openhat.style.boxShadow = "2px 5px 14px #fff"
    openhat.innerHTML = "Openhat"
    setTimeout(function(){
        openhat.style.boxShadow = "none"
        openhat.innerHTML = "o"
    },600)
}

ride.addEventListener("click", rideSound)
function rideSound(){
    ridePath.play();
    ride.style.boxShadow = "2px 5px 14px #fff"
    ride.innerHTML = "Ride"
    setTimeout(function(){
        ride.style.boxShadow = "none"
        ride.innerHTML = "r"
    },600)
}

snare.addEventListener("click", snareSound)
function snareSound(){
    snarePath.play();
    snare.style.boxShadow = "2px 5px 14px #fff"
    snare.innerHTML = "Snare"
    setTimeout(function(){
        snare.style.boxShadow = "none"
        snare.innerHTML = "s"
    },600)
}

tink.addEventListener("click", tinkSound)
function tinkSound(){
    tinkPath.play();
    tink.style.boxShadow = "2px 5px 14px #fff"
    tink.innerHTML = "tink"
    setTimeout(function(){
        tink.style.boxShadow = "none"
        tink.innerHTML = "t"
    },600)
}

tom.addEventListener("click", timSound)
function timSound(){
    tomPath.play();
    tom.style.boxShadow = "2px 5px 14px #fff"
    tom.innerHTML = "Tom"
    setTimeout(function(){
        tom.style.boxShadow = "none"
        tom.innerHTML = "m"
    },600)
}

function resetPage() {
    title.style.color = '#fff';
    title.textContent = "please click on buttons or press the letters on your keyboard"
    title.style.backgroundColor = "inherit"
    title.style.border = "none"

}

function errorMassage() {
    title.textContent = "Please press the correct key.Press 'Enter' and try again"
    title.style.color = "#ff0000"
    title.style.backgroundColor = "#ffdddd"
    title.style.border = "1px solid #ff0000"
    title.style.padding = "10px"
    title.style.borderRadius = "5px"
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