document.addEventListener("DOMContentLoaded", function() {
    const readMoreButtons = document.querySelectorAll(".read-more");
    
    readMoreButtons.forEach(button => {
        button.addEventListener("click", function() {
            const description = this.parentElement.querySelector(".description");
            description.classList.toggle("expanded");
            this.textContent = description.classList.contains("expanded") ? "Read Less" : "Read More";
        });
    });
});
