let navbar = document.querySelector(".nb-mobile");
let sidebar = document.querySelector(".sidebar-inner--wrapper");
let overlay = document.querySelector(".sidebar-overlay");
let cross = document.querySelector(".sb-top-icon");
let containers = document.querySelectorAll(".sb-bottom-link");
navbar.addEventListener("click", () => {
  sidebar.style.transform = "translateX(0%)";
  overlay.style.display = "block";
});
cross.addEventListener("click", () => {
  sidebar.style.transform = "translateX(100%)";
  overlay.style.display = "none";
});
containers.forEach((container) => {
  container.addEventListener("click", () => {
    sidebar.style.transform = "translateX(100%)";
    overlay.style.display = "none";
  });
});
