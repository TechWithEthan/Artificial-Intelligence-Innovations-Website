document.addEventListener('DOMContentLoaded', () => {
  // Navbar toggler functionality
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarNav = document.querySelector('#navbarNav');

  if (navbarToggler && navbarNav) {
    navbarToggler.addEventListener('click', () => {
      navbarNav.classList.toggle('show');
    });
  }

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault(); // Prevent default link behavior
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth',
        });
      }
    });
  });

  // Add dynamic year in footer
  const footerYear = document.querySelector('footer p');
  if (footerYear) {
    footerYear.innerHTML = `&copy; ${new Date().getFullYear()} AI Innovations | All Rights Reserved | Privacy Policy`;
  }

  // Preloader functionality
  let myVar;

  function myFunction() {
    myVar = setTimeout(showPage, 3000); // Delay for 3 seconds
  }

  function showPage() {
    const loader = document.getElementById('loader');
    const content = document.getElementById('myDiv');
    if (loader && content) {
      loader.style.display = 'none'; // Hide loader
      content.style.display = 'block'; // Show content
    }
  }

  // Expose the preloader function to the global scope
  window.myFunction = myFunction;
});
