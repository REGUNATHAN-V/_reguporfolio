// Initialize AOS (Animate On Scroll) library
AOS.init({
    duration: 1000, // Animation duration
    easing: 'ease-in-out', // Easing function
});

// Smooth scrolling for internal links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
});

// Contact form submission handling
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // You can implement an API call here to send the data to your backend server
    console.log('Form submitted:', { name, email, message });

    // Clear form fields after submission
    this.reset();
    alert('Thank you for your message, ' + name + '! I will get back to you shortly.');
});
