import brown from './icons/brown.png'
import dark from './icons/dark.png'
import orange from './icons/orange.png'
import pale from './icons/pale.png'

function populateBeers() {
    let beermenu = document.createElement("div")
    beermenu.classList.add("menu-content", "beer-menu")
    document.getElementById("content").appendChild(beermenu)
    beerList.forEach(beer => {
        formatBeer(beer, beermenu)

    })

}

function formatBeer(beerObj, parent) {
    let beerdiv = document.createElement("div")
    beerdiv.classList.add("beer")

    let header = document.createElement("div")
    header.classList.add("beer-header")

    let beerName = document.createElement("div")
    beerName.classList.add("beername")
    beerName.textContent = beerObj.name

    let beeralc = document.createElement("div")
    beeralc.classList.add("beeralc")
    beeralc.textContent = beerObj.alc

    let about = document.createElement("div")
    about.classList.add("beer-about")
    about.innerHTML = `${beerObj.type}<br>${beerObj.description}`

    let beerIcon = document.createElement("div")
    beerIcon.classList.add("beer-icon")
    let img = document.createElement("img")
    if (beerObj.color == "dark") {
        img.src = dark
    } else if (beerObj.color == "brown") {
        img.src = brown
    } else if (beerObj.color == "orange") {
        img.src = orange
    } else {
        img.src = pale
    }
    beerIcon.appendChild(img)
    header.appendChild(beerIcon)
    header.appendChild(beerName)
    header.appendChild(beeralc)

    beerdiv.appendChild(header)
    beerdiv.appendChild(about)

    parent.appendChild(beerdiv)












}

let beerList = [
    {
        name: "Burial Brew",
        type: "Smoked Porter",
        color: "dark",
        alc: "7.5%",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        name: "Idle Dereliction",
        color: "orange",
        type: "IPA",
        alc: "4.5%",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."

    },
    {
        name: "Wicked Weed",
        color: "pale",
        type: "Sour Ale",
        alc: "6.3%",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."

    },
    {
        name: "Camote's Paw",
        color: "dark",
        type: "Sweet Potato Porter",
        alc: "8.0",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        name: "Cecibaza Ale",
        color: "orange",
        type: "Pumpkin Ale",
        alc: "5.2%",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        name: "Green Man",
        type: "IPA",
        color: "pale",
        alc: "5.6%",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."

    },
    {
        name: "Hi-Wire Act",
        type: "Brown Ale",
        color: "brown",
        alc: "5.5%",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."

    },
    {
        name: "The Funkatorium",
        type: "Funky Sour Ale",
        color: "orange",
        alc: "5.6%",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."

    },
    {
        name: "French Broad",
        type: "Scotish Ale",
        color: "brown",
        alc: "7.4%",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."

    }

]

export { populateBeers }