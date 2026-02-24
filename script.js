// Animation smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Message de confirmation formulaire
document.querySelector(".contact-form")?.addEventListener("submit", e => {
    e.preventDefault();
    alert("Merci ! Votre message a bien été envoyé 🚀");
});
