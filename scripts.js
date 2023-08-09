// Add JavaScript code to open modal/popup for detailed information
document.addEventListener("DOMContentLoaded", function () {
    const learnMoreLinks = document.querySelectorAll(".learn-more");
    const modal = document.getElementById("game-modal");

    learnMoreLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            modal.style.display = "block";
            // Load and display detailed game information in the modal
            // You can use AJAX or predefined content for this
        });
    });

    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
