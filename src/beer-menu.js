import brown from './icons/brown.png'
import dark from './icons/dark.png'
import orange from './icons/orange.png'
import pale from './icons/pale.png'

function populateBeers() {
    let beermenu = document.createElement("div")
    beermenu.id = "beer-menu"
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
        name: "Highland Thunderstruck",
        type: "Coffee Porter",
        color: "dark",
        alc: "5.8%",
        description: "This coffee porter is brewed with 1.5 lbs of Dynamite Roasting coffee per barrel."

    },
    {
        name: "Burial Brew",
        type: "Imperial Stout",
        color: "dark",
        alc: "15%",
        description: "Maple coconut pralines, pecan pie covered in white chocolate glaze and a rinsing of salted caramel coconut shake."
    },
    {
        name: "Idle Dereliction",
        color: "orange",
        type: "Double IPA",
        alc: "6.2%",
        description: " A West Coast-style made with barley and Riverbend malted rye."

    },
    {
        name: "Wicked Weed",
        color: "pale",
        type: "Session IPA",
        alc: "4.5%",
        description: "Huge hop flavor and aroma from Amarillo, Citra, Mosaic, and Motueka hops, with low bitterness and low ABV."

    },
    {
        name: "Camote's Paw",
        color: "dark",
        type: "Sweet Potato Porter",
        alc: "8.0%",
        description: "A rich and robust porter brewed with roasted sweet potatoes, featuring notes of caramel, chocolate and coffee."
    },
    {
        name: "Cecibaza Ale",
        color: "orange",
        type: "Pumpkin Ale",
        alc: "5.2%",
        description: "A hearty, deeply balanced ale with a cornucopia of fall aromas."
    },
    {
        name: "Green Man",
        type: "IPA",
        color: "pale",
        alc: "5.6%",
        description: "A legendary India Pale Ale, the Green Man IPA is very hoppy with a properly balanced malt body."

    },
    {
        name: "Hi-Wire Act",
        type: "Brown Ale",
        color: "brown",
        alc: "5.5%",
        description: "Crafted as an American ode to a traditional English brown."

    },
    {
        name: "The Funkatorium",
        type: "Saison",
        color: "orange",
        alc: "5.6%",
        description: "Inspired by rosé wines. This farmhouse ale is fermented with our house brettanomyces culture."

    },
    {
        name: "French Broad",
        type: "Scotish Ale",
        color: "brown",
        alc: "7.4%",
        description: "Roasty and sweet with a silky mouth feel."

    },
    

]

export { populateBeers }