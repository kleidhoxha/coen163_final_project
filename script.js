function goBack() {
  window.history.back();
}

const routeContainer = document.querySelector(".route-container");
routeContainer.addEventListener("click", function () {
  routeContainer.classList.toggle("selected");
});

function toggleBackgroundColor(element) {
  // Deselect other elements with the same class
  var otherElements = document.getElementsByClassName("route-container2");
  for (var i = 0; i < otherElements.length; i++) {
    if (otherElements[i] !== element) {
      otherElements[i].style.backgroundColor = "transparent";
    }
  }

  // Toggle background color of the clicked element
  var currentColor = element.style.backgroundColor;
  var newColor =
    currentColor === "rgba(0, 0, 0, 0)" ? "transparent" : "rgba(8,68,168, .2)";
  element.style.backgroundColor = newColor;
}
