function contact(){
    let contact = document.createElement("div")
    contact. id = "contact"
    contact.classList.add("menu-content")
}


function map(node){
    let newmap = document.createElement("iframe")
    newmap.src = "https://www.google.com/maps/d/embed?mid=173T-M3Nim6oysQFsZ4U_bNVe-_m4ogtx"
    newmap.id = "map"
    node.appendChild(newmap)
}
function contactList(){
    const contactInfo = document.createElement("div")
    contactInfo.class = "contact-info"
    h1 = document.createElement("h1")
    h1.textContent = "Want to check out some of Aseville best breweries? Links below to the places that inspired this site:"
    const breweryLinks = document.createElement("ul")
    pubList.forEach(pub=>{
        let li =document.createElement("li")
        li.class = "brewery-link"
        let link =document.createElement("a")
        link.textContent = pub.name
        link.href = pub.site
        li.appendChild(link)
        breweryLinks.appendChild(li)
    })

    contactInfo.appendChild(h1)
    contactInfo.appendChild(breweryLinks)    
}

const pubList = [
    {
        name: "Burial Beer Co. ",
        site: "https://burialbeer.com/"
    },
    {
        name: "Wedge Brewing Co.",
        site: "https://www.wedgebrewing.com/"
    },
    {
        name: "High-Wire Brewing",
        site: "https://hiwirebrewing.com/south-slope/"
    },
    {
        name: "Green Man Brewery",
        site: "https://www.greenmanbrewery.com/"
    },
    {
        name: "The Funkatorium",
        site: "https://www.wickedweedbrewing.com/location/funkatorium/"
    },
    {
        name: "Catawba Brewing Company",
        site: "https://catawbabrewing.com/"
    },
    {
        name: "Wicked Weed Brewing Pub",
        site: "https://www.wickedweedbrewing.com/"
    },
]