let tablist
function maketabs(node){
    let tabs = document.createElement("div")
    tabs.classList.add("tabs")
    tabs.id = "tabs"
    let hometab =document.createElement("div")
    let beerMenutab =document.createElement("div")
    let gallerytab =document.createElement("div")
    let contacttab =document.createElement("div")

    hometab.dataset.target="home"
    beerMenutab.dataset.target = "beer-menu"
    gallerytab.dataset.target = "gallery"
    gallerytab.id = "gallery-tab"
    contacttab.dataset.target = "contact"

    hometab.textContent = "Home"
    beerMenutab.textContent = "Beer"
    gallerytab.textContent = "Gallery"
    contacttab.textContent = "Contact"

    tablist = [hometab, beerMenutab, gallerytab, contacttab]//contacttab
    tablist.forEach(tab =>{
        tab.classList.add("tab")
        tab.addEventListener("click", (e)=>{
            console.log(e.target.dataset.target)
            activator(e.target.dataset.target)
        })
        tabs.appendChild(tab)
        
    })
    node.appendChild(tabs)
}
function activator(target){
    tablist.forEach(tab=>{
        document.getElementById(tab.dataset.target).classList.remove("active")
        
    })
   document.getElementById(target).classList.add("active")
    

}
const content = ()=>{
    let cont = document.createElement("div")
    cont.classList.add("content")
    cont.id = "content"
    maketabs(cont)
    document.body.appendChild(cont)
}


export {content}