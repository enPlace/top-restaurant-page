function homecontent() {
    let home = document.createElement("div")
    home.classList.add("menu-content", "home", "active")
    home.id = "home"


    const title = document.createElement("h1")
    title.textContent = "Blue Ridge Brewery"
    const titlediv = document.createElement("div")
    titlediv.classList.add("title")
    titlediv.appendChild(title)

    const description = document.createElement("p")
    description.textContent = "An homage to the miriad of great breweries in Asheville, North Carolina. This project was compiled using Webpack, and you can see the github repository here."
    const descdiv = document.createElement("div")
    descdiv.classList.add("description")
    descdiv.appendChild(description)

    const info = document.createElement("div")
    info.classList.add("info")
    info.appendChild(titlediv)
    info.appendChild(descdiv)
    home.appendChild(info)

    const img = document.createElement("div")
    img.classList.add("home-image")
    home.appendChild(img)
    document.getElementById("content").appendChild(home)

}

export { homecontent }
