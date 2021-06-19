let mainNav = document.querySelector(".menu");
let navBarToggle = document.querySelector(".hamburger_icon");
navBarToggle.addEventListener("click", () => {
  mainNav.classList.toggle("active");
});
