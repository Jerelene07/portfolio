// js 
document.addEventListener("DOMContentLoaded", function () {
    console.log("working");

    const contactForm = document.querySelector(".contact-form");
    
    if (contactForm) {
        contactForm.addEventListener("submit", function () {
            // web3forms will handle the backend processing and send it to your email automatically!
            alert("sending message to jerelene...");
        });
    }
});