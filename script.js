document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message, Vaibhav will reply soon!');
    this.reset();
  });

  document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById('menu-toggle');
    const closeBtn = document.getElementById('menu-close');
    const navList = document.getElementById('navbar').querySelector('ul');
    const navLinks = navList.querySelectorAll('a');
  
    const isMobile = () => window.innerWidth <= 768;
  
    toggle.addEventListener('click', () => {
      navList.classList.add('active');
      closeBtn.classList.add('show');
      if (isMobile()) toggle.style.display = 'none';
    });
  
    closeBtn.addEventListener('click', () => {
      navList.classList.remove('active');
      closeBtn.classList.remove('show');
      if (isMobile()) toggle.style.display = 'block';
    });
  
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navList.classList.remove('active');
        closeBtn.classList.remove('show');
        if (isMobile()) toggle.style.display = 'block';
      });
    });
  
    // Reset toggle visibility if resizing to desktop
    window.addEventListener('resize', () => {
      if (!isMobile()) {
        toggle.style.display = 'none';
        closeBtn.classList.remove('show');
        navList.classList.remove('active');
      } else {
        toggle.style.display = 'block';
      }
    });
  });
  
  const scrollToTopBtn = document.getElementById('scrollToTop');

  // Show/hide arrow based on scroll position
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });
  
  // Smooth scroll to top on click
  scrollToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  