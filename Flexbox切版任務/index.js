let mainNav = document.querySelector(".menu");
let navBarToggle = document.querySelector(".hamburger-icon");
navBarToggle.addEventListener("click", () => {
  mainNav.classList.toggle("active");
});
