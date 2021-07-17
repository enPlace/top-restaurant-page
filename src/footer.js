import gitIcon from "./icons/githubwhite2.png";

function footer() {
  const foot = document.createElement("div");
  foot.id = "footer";
  foot.classList.add("footer");

  const me = document.createElement("h5");
  me.innerHTML = "<h5>Created by Nick Place</h5><div>\u00A9</div><h5>2021</h5>";
  me.classList.add("creator-info");
  foot.appendChild(me);

  const link = document.createElement("a");
  link.href = "https://github.com/enPlace/top-restaurant-page";
  link.target = "_blank";
  const img = document.createElement("img");
  img.src = gitIcon;
  link.appendChild(img);
  foot.appendChild(link);
  document.getElementById("content").appendChild(foot);
}

export { footer };
