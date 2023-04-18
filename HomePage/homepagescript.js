function toggleOverlay(clickedElement) {
    console.log("toggleOverlay called.");
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
        if (child.className == "project-image") {
            document.getElementById("project-overlay-image").setAttribute("src", child.getAttribute("src"));
        }
        else if (child.className == "project-desc-long") {
            document.getElementById("project-overlay-desc").innerText = child.innerText;
        }
       }
    }
}