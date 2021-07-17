import webpackIcon from "./icons/webpack-logo-svg-vector.svg";
import reaper from "./background-imgs/3d0f9ab08fae06cffe5a24c53db22fd7.png";

function homecontent() {
  const home = document.createElement("div");
  home.classList.add("menu-content", "home", "active");
  home.id = "home";

  const title = document.createElement("h1");
  title.textContent = "Blue Ridge Brewery";
  const titlediv = document.createElement("div");
  titlediv.classList.add("title");
  titlediv.appendChild(title);

  const description = document.createElement("div");
  description.classList.add("description");
  const p1 = document.createElement("p");
  p1.innerHTML =
    '<span class ="four-space"></span>As a part of The Odin Project curriculum, this simple restaurant page is dynamically rendered, and all of its content is generated using JavaScript. The menu itself is an homage to the miriad of great breweries in Asheville, North Carolina, and the beer names on the menu come from either breweries there, my wife, or my dog.';

  description.appendChild(p1);
  const p2 = document.createElement("p");
  p2.innerHTML = '<span class ="four-space">This project was compiled using ';
  // Webpack, and you can see the github repository here.'
  const span = document.createElement("span");
  const webpack = document.createElement("img");
  webpack.src = webpackIcon;
  span.appendChild(webpack);
  p2.appendChild(span);
  description.appendChild(p2);

  const span2 = document.createElement("span");
  span2.innerHTML = "Webpack, and you can see the github repository";
  p2.appendChild(span2);

  const span3 = document.createElement("span");

  const link = document.createElement("a");
  link.textContent = "here.";
  link.href = "https://github.com/enPlace/top-restaurant-page";
  link.target = "_blank";
  span3.appendChild(link);
  p2.appendChild(span3);

  const descdiv = document.createElement("div");
  descdiv.classList.add("description");
  descdiv.appendChild(description);

  const info = document.createElement("div");
  info.classList.add("info");
  info.appendChild(titlediv);
  info.appendChild(descdiv);
  home.appendChild(info);

  const img = document.createElement("img");
  img.src = reaper;
  home.appendChild(img);
  document.getElementById("content").appendChild(home);
}

export { homecontent };
