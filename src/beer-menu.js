function populateBeers(){
    let beermenu = document.createElement("div")
    beermenu.classList.add("menu-content, beer-menu, active")
    beerList.forEach(beer=>{
        let beerdiv = document.createElement("div")
        beerdiv.classList.add("beer")
        
        let header = document.createElement("div")
        header.classList.add("beer-header")


    })

}

let beerList =[
    {
        name: "Sepultura",
        type: "Porter",
        color: "dark",
        alc: "7.5%",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos vero explicabo earum sit rem sint distinctio?"
    },
    {
        name: "Idle Dereliction",
        color: "orange",
        type: "IPA",
        alc: "4.5%",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos vero explicabo earum sit rem sint distinctio?"

    },
    {
        name: "Wicked Weed",
        color: "pale",
        type: "Sour Ale",
        alc: "6.3%",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos vero explicabo earum sit rem sint distinctio?"

    },
    {
        name: "Camote's Revenge",
        color: "dark", 
        type: "Sweet Potato Porter",
        alc: "8.0",
        description:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos vero explicabo earum sit rem sint distinctio?"
    },
    {
        name: "Cecibaza",
        color: "orange",
        type: "Pumpkin Ale",
        alc: "5.2%",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos vero explicabo earum sit rem sint distinctio?"
    }, 
    {
        name: "Green Man",
        type: "IPA",
        color: "pale",
        alc: "5.6%",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos vero explicabo earum sit rem sint distinctio?"

    },
    {
        name: "Hi-Wire",
        type: "Brown Ale",
        color: "brown",
        alc: "5.5%",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos vero explicabo earum sit rem sint distinctio?"

    },
    {
        name: "Funkatorium",
        type: "Funky Sour Ale",
        color: "orange",
        alc: "5.6%",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos vero explicabo earum sit rem sint distinctio?"

    },
    {
        name: "French Broad",
        type: "Scotish Ale",
        color: "Brown",
        alc: "7.4%",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos vero explicabo earum sit rem sint distinctio?"

    }

]