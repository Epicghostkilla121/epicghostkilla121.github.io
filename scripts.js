document.addEventListener("DOMContentLoaded", function() {
    const readMoreButtons = document.querySelectorAll(".read-more");
    
    readMoreButtons.forEach(button => {
        button.addEventListener("click", function() {
            const description = this.previousElementSibling; // Get the description element
            description.classList.toggle("expanded");
            this.textContent = description.classList.contains("expanded") ? "Read Less" : "Read More";
        });
    });
});
