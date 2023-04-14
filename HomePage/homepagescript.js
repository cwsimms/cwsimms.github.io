function toggleOverlay(clickedElement, visibility) {
    const element = document.getElementById("project-overlay-bg");
    if (visibility == true) {
        element.style.display = "block";
        updateOverlay(clickedElement);
    }
    else {
        element.style.display = "none";
    }
}

function updateOverlay(element) {
    
}