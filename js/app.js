function openModal(id) {
  document.getElementById(id).style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

document.addEventListener('DOMContentLoaded', () => {
    const menuHamburger = document.querySelector('.menu-hamburger');
    const navLinks = document.querySelector('.nav-links');
  
    menuHamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      // Option : ajouter un effet visuel au hamburger
      menuHamburger.classList.toggle('active');
    });
  });