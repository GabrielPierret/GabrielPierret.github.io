// Animations des modales avec effet fade
function openModal(id) {
  const modal = document.getElementById(id);
  modal.style.display = "block";
  modal.style.opacity = "0";
  modal.style.transform = "scale(0.8)";
  
  setTimeout(() => {
    modal.style.transition = "all 0.3s ease";
    modal.style.opacity = "1";
    modal.style.transform = "scale(1)";
  }, 10);
}

function closeModal(id) {
  const modal = document.getElementById(id);
  modal.style.transition = "all 0.3s ease";
  modal.style.opacity = "0";
  modal.style.transform = "scale(0.8)";
  
  setTimeout(() => {
    modal.style.display = "none";
  }, 300);
}

// Smooth scrolling pour la navigation
function smoothScroll(target) {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// Animation d'apparition au scroll
function animateOnScroll() {
  const elements = document.querySelectorAll('.skill, .formation-item, .realisation');
  
  elements.forEach((element, index) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < window.innerHeight - elementVisible) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
}

// Détection de la section active pour le menu
function updateActiveNavLink() {
  const sections = document.querySelectorAll('#apropos, #competences, #formation, #realisations, #contact');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  let currentSection = '';
  
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionHeight = section.offsetHeight;
    
    // Détection plus précise : section visible dans le premier tiers de l'écran
    if (sectionTop <= 200 && sectionTop + sectionHeight > 200) {
      currentSection = section.getAttribute('id');
    }
  });
  
  // Si on est tout en bas de la page, activer le contact
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    currentSection = 'contact';
  }
  
  // Si on est tout en haut (slider), activer "À propos"
  if (window.scrollY < 100) {
    currentSection = 'apropos';
  }
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}

// Effet de scroll sur la navbar
function updateNavbarOnScroll() {
  const navbar = document.querySelector('.navbar');
  const scrollY = window.scrollY;
  
  if (scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

// Initialisation des animations
function initAnimations() {
  const elements = document.querySelectorAll('.skill, .formation-item, .realisation');
  elements.forEach(element => {
    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "all 0.6s ease";
  });
}

document.addEventListener('DOMContentLoaded', () => {
    const menuHamburger = document.querySelector('.menu-hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    // Menu hamburger
    menuHamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuHamburger.classList.toggle('active');
    });
    
    // Navigation smooth scroll
    const navLinks_a = document.querySelectorAll('.nav-links a');
    navLinks_a.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('href');
        
        // Fermer le menu mobile après clic
        if (window.innerWidth <= 900) {
          navLinks.classList.remove('active');
          menuHamburger.classList.remove('active');
        }
        
        // Scroll vers la section
        smoothScroll(target);
        
        // Mettre à jour l'état actif après un délai
        setTimeout(() => {
          updateActiveNavLink();
        }, 100);
      });
    });
    
    // Initialiser les animations
    initAnimations();
    
    // Animation au scroll
    window.addEventListener('scroll', () => {
      animateOnScroll();
      updateActiveNavLink();
      updateNavbarOnScroll();
    });
    
    // Fermer les modales en cliquant à l'extérieur
    window.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal')) {
        const modalId = e.target.id;
        closeModal(modalId);
      }
    });
    
    // Fermer les modales avec Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const openModals = document.querySelectorAll('.modal[style*="block"]');
        openModals.forEach(modal => {
          closeModal(modal.id);
        });
      }
    });
});