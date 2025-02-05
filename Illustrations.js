document.addEventListener("DOMContentLoaded", function () {
    // Show a welcome message when the page loads
    alert("Welcome to Illustrations for AI! 🚀 Let's make AI fun!");

    // Add hover effect to illustration cards
    const cards = document.querySelectorAll(".illustration-card");
    cards.forEach(card => {
        card.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.1)";
            this.style.transition = "0.3s ease-in-out";
        });
        card.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });

    // Add click effect to show more details
    cards.forEach(card => {
        card.addEventListener("click", function () {
            const title = this.querySelector("h3").innerText;
            alert(`You clicked on: ${title}\nLearn more about AI and have fun! 🎉`);
        });
    });
});
