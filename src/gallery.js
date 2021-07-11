import burial from './gallery-images/burial.jpg'
import delib from './gallery-images/Deliberate_Distortions_mock.jpg'
import doges from './gallery-images/doges.jpg'
import french1 from './gallery-images/french-broad-river-brewery.jpg'
import french2 from './gallery-images/french-broad.jpg'
import greenman1 from './gallery-images/greenman.jpg'
import greenman2 from './gallery-images/GreenMan2.jpg'
import sellick from './gallery-images/sellick.jpg'
import funk from './gallery-images/Wicked-Weed-Funkatorium-1.jpg'

const images = [burial, delib, doges, french1, french2, greenman1, greenman2, sellick, funk]





function gallerycontent() {
    let gallery = document.createElement("div")
    gallery.id = "gallery"
    gallery.classList.add("menu-content", "gallery")
    populateGallery(gallery)
    document.getElementById("content").appendChild(gallery)

    gallery.addEventListener("wheel", (e) => {
        e.preventDefault();
        gallery.scrollLeft += e.deltaY;
        clearInterval(scroller)
    })

}

function populateGallery(node) {
    images.forEach(image => {
        const newimg = document.createElement("img")
        newimg.src = image
        node.appendChild(newimg)
    })
}







export { gallerycontent }