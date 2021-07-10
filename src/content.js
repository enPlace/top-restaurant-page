function maketabs(node){
    let tabs = document.createElement("div")
    tabs.classList.add("tabs")
    tabs.id = "tabs"
    let hometab =document.createElement("div")
    let beerMenutab =document.createElement("div")
    let gallerytab =document.createElement("div")
    let contacttab =document.createElement("div")

    hometab.class = "tab"
    beerMenutab.classList.add ("tab")
    gallerytab.classList.add("tab")
    contacttab.classList.add("tab")

    hometab.dataset.target="home"
    beerMenutab.dataset.target = "beer-menu"
    gallerytab.dataset.target = "gallery"
    contacttab.dataset.target = "contact"

    hometab.textContent = "Home"
    beerMenutab.textContent = "Beer"
    gallerytab.textContent = "Gallery"
    contacttab.textContent = "Contact"

    let tablist = [hometab, beerMenutab, gallerytab, contacttab]
    tablist.forEach(tab =>{
        tab.classList.add("tab")
        tabs.appendChild(tab)
    })
    node.appendChild(tabs)


}
const content = ()=>{
    let cont = document.createElement("div")
    cont.classList.add("content")
    cont.id = "content"
    maketabs(cont)
    document.body.appendChild(cont)
}

export {content}