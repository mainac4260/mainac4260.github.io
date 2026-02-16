document.addEventListener('DOMContentLoaded', function () {

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 70;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });

                // Close mobile menu if open
                if (window.innerWidth <= 768) {
                    navUl.classList.remove('active');
                }
            }
        });
    });

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navUl = document.querySelector('#nav ul');

    menuToggle.addEventListener('click', function () {
        navUl.classList.toggle('active');
    });

    // Form Validation
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        let isValid = true;
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        // Simple validation helper
        const validateField = (field, condition) => {
            if (!condition) {
                field.parentElement.classList.add('error');
                isValid = false;
            } else {
                field.parentElement.classList.remove('error');
            }
        };

        validateField(name, name.value.trim() !== '');
        validateField(email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()));
        validateField(message, message.value.trim() !== '');

        if (isValid) {
            // Simulation of form submission
            alert('お問い合わせありがとうございます。送信が完了しました。\n（これはデモです。実際の送信は行われません。）');
            form.reset();
        }
    });

    // Remove error class on input
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', function () {
            if (this.parentElement.classList.contains('error')) {
                this.parentElement.classList.remove('error');
            }
        });
    });
});
