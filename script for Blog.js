// Example of adding a small interaction, such as a scroll-to-top button or other JS features
document.addEventListener('DOMContentLoaded', function() {
    // Scroll to top button functionality
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.textContent = '↑';
    scrollToTopButton.style.position = 'fixed';
    scrollToTopButton.style.bottom = '20px';
    scrollToTopButton.style.right = '20px';
    scrollToTopButton.style.padding = '10px 15px';
    scrollToTopButton.style.fontSize = '16px';
    scrollToTopButton.style.display = 'none';
    scrollToTopButton.style.cursor = 'pointer';
    document.body.appendChild(scrollToTopButton);

    // Show button when scrolled down 100px
    window.addEventListener('scroll', function() {
        if (document.documentElement.scrollTop > 100) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    // Scroll to top when button clicked
    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}