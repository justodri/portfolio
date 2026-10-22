document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Mobile Hamburger Menu Toggle
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });

        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
            });
        });
    }

    // 2. Active Navigation Link Highlighting on Scroll
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navItems.forEach(item => {
            item.classList.remove("active");
            if (item.getAttribute("href").includes(current)) {
                item.classList.add("active");
            }
        });
    });

    // 3. Contact Form Validation
    const contactForm = document.getElementById("contactForm");
    const formStatus = document.getElementById("formStatus");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            let isValid = true;

            const name = document.getElementById("name");
            const email = document.getElementById("email");
            const message = document.getElementById("message");

            document.querySelectorAll(".error-message").forEach(el => el.textContent = "");
            if (formStatus) formStatus.textContent = "";

            if (name.value.trim() === "") {
                name.nextElementSibling.textContent = "Please enter your name.";
                isValid = false;
            }

            if (email.value.trim() === "") {
                email.nextElementSibling.textContent = "Please enter your email.";
                isValid = false;
            } else if (!email.value.includes("@") || !email.value.includes(".")) {
                email.nextElementSibling.textContent = "Please enter a valid email address.";
                isValid = false;
            }

            if (message.value.trim() === "") {
                message.nextElementSibling.textContent = "Please write a message.";
                isValid = false;
            }

            if (isValid) {
                if (formStatus) {
                    formStatus.textContent = "Thank you! Your message has been sent successfully.";
                }
                contactForm.reset();
            }
        });
    }
});