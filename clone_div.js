function cloneDiv(element) {
    // Clone the clicked div
    var clonedDiv = element.cloneNode(true);
    
    // Generate a random color
    var randomColor = getRandomColor();
    
    // Change the background color of the cloned div
    clonedDiv.style.backgroundColor = randomColor;
    
    // Update the text content to indicate it's a clone
    clonedDiv.innerHTML = "Clone with color: " + randomColor;
    
    // Append the cloned div to the body
    document.body.appendChild(clonedDiv);
}

function getRandomColor() {
    // Generate random RGB values
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    
    // Return the color in RGB format
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

