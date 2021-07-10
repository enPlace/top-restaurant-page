
function homecontent(){
    let home = document.createElement("div")
    home.classList.add("menu-content", "home")
    
    
    const title = document.createElement("h1")    
    title.textContent = "Burial Beer Co."
    const titlediv = document.createElement("div")
    titlediv.classList.add("title")
    titlediv.appendChild(title)

    const description = document.createElement("p")
    description.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolor quasi tenetur consequatur! Minima sit reiciendis iste dolores rem, cum impedit iusto minus provident saepe! Molestias, vitae impedit. Est, beatae?"
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

export {homecontent}