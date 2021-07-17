import octocat from './gallery-images/octocat2.jpg';
import burial from './gallery-images/burial.jpg';
import delib from './gallery-images/Deliberate_Distortions_mock.jpg';
import camote from './gallery-images/camote.jpg';
import french1 from './gallery-images/french-broad-river-brewery.jpg';
import french2 from './gallery-images/french-broad.jpg';
import greenman1 from './gallery-images/greenman.jpg';
import greenman2 from './gallery-images/GreenMan2.jpg';
import sellick from './gallery-images/sellick.jpg';
import funk from './gallery-images/Wicked-Weed-Funkatorium-1.jpg';

// eslint-disable-next-line max-len
const images = [octocat, burial, camote, french1, delib, french2, greenman1, greenman2, sellick, funk];

function populateGallery(node) {
  images.forEach((image) => {
    const newimg = document.createElement('img');
    newimg.src = image;
    node.appendChild(newimg);
  });
}
function scroll() {
  document.getElementById('gallery').scrollLeft += 1;
}
let scroller;
function setScroll() {
  const galleryTab = document.getElementById('gallery-tab');
  galleryTab.addEventListener('click', () => {
    clearInterval(scroller);
    scroller = setInterval(scroll, 20);
  });
}

function gallerycontent() {
  const gallery = document.createElement('div');
  gallery.id = 'gallery';
  gallery.classList.add('menu-content', 'gallery');
  populateGallery(gallery);
  document.getElementById('content').appendChild(gallery);

  gallery.addEventListener('wheel', (e) => {
    e.preventDefault();
    gallery.scrollLeft += e.deltaY;
    clearInterval(scroller);
  });
}

export { gallerycontent, setScroll };
