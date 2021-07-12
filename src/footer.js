import gitIcon from './icons/githubwhite2.png'

function footer(){
    let foot = document.createElement("div")
    foot.id = "footer"
    foot.classList.add("footer")
    let me= document.createElement("h5")
    me.innerHTML = '<h5>Created by Nick Place</h5><div>\u00A9</div><h5>2021</h5>'
    me.classList.add("creator-info")
    foot.appendChild(me)
    let imgcontainer = document.createElement("div")
    let img = document.createElement("img")
    img.src = gitIcon
    imgcontainer.appendChild(img)
    foot.appendChild(imgcontainer)
    document.getElementById("content").appendChild(foot)

    //<div class="footer" id="footer"> Created by me heres my github and copyright</div>
    
}

export { footer }