
import{content} from "./content"
import{homecontent} from "./home"
import { populateBeers } from "./beer-menu"
import './style.css'
import { gallerycontent } from "./gallery"

content()
homecontent()
populateBeers()
gallerycontent()


const galleryTab = document.getElementById("gallery-tab")
let scroller 
galleryTab.addEventListener("click", ()=>{
    clearInterval(scroller)
    scroller = setInterval(scroll, 20)
})

function scroll(){
    document.getElementById("gallery").scrollLeft+=1
}

