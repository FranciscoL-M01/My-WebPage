const collapsibles = document.querySelectorAll(".nav-collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("nav-collapsible-expanded");
  })
);