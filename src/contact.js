function contact(){
    
}
function map(node){
    let newmap = document.createElement("iframe")
    newmap.src = "https://www.google.com/maps/d/embed?mid=173T-M3Nim6oysQFsZ4U_bNVe-_m4ogtx"
    newmap.id = "map"
    node.appendChild(newmap)
}
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