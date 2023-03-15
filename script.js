function goBack() {
  window.history.back();
}

const routeContainer = document.querySelector(".route-container");
routeContainer.addEventListener("click", function () {
  routeContainer.classList.toggle("selected");
});
