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
        const tileChildren = [];
        tileChildren.push(inElement.childNodes);
        //Set the title text of the overlay to that of the project tile clicked
        //apparently childNodes does not return an array but a NodeList?
        document.getElementById("project-overlay-title").innerText = tileChildren.find(element => element.className == "project-title").innerText;
        let tileImg = tileChildren.find(element => element.className == "project-img");

        //I know this should probably be a function, but I'm only using this once so far. If I use it again I'll make it a function.
        let imgAttributes = [tileImg.getAttribute("src"), tileImg.getAttribute("alt")];
        let overlayImg = document.getElementById("project-overlay-img");
        overlayImg.setAttribute("src", imgAttributes[0]);
        overlayImg.setAttribute("alt", imgAttributes[1]);

        document.getElementById("project-overlay-desc").innerText = tileChildren.find(element => element.className == "project-desc-long").innerText;
    }
}