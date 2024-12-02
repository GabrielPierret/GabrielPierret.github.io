function openModal(id) {
  document.getElementById(id).style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  const menuHamburger = document.querySelector(".menu-hamburger");
  const navLinks = document.querySelector(".nav-links");

  menuHamburger.addEventListener("click", function () {
    navLinks.classList.toggle("active"); // Affiche/cache la nav
  });
});
