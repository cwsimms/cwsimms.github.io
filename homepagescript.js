function toggleOverlay(clickedElement) {
    const element = document.getElementById("project-overlay-bg");
    if (clickedElement.className == "project-title") {
        element.style.display = "block";
        updateOverlay(clickedElement);
    }
    else {
        element.style.display = "none";
    }
}

function updateOverlay(inElement) {
    if (inElement.className == "project-title") {
       document.getElementById("project-overlay-title").innerText = inElement.innerText;
       const tile = inElement.parentElement.parentElement;
       for (const child of tile.children) {
        if (child.className == "project-image-wrapper") {
            let tileImage = child.children[0];
            document.getElementById("project-overlay-image").setAttribute("src", tileImage.getAttribute("src"));
        }
        else if (child.className == "project-desc-long") {
            document.getElementById("project-overlay-desc").innerHTML = child.innerHTML;
        }
       }
    }
}