<script>
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    let mailBody = `Name: ${name}%0D%0AEmail: ${email}%0D%0ASubject: ${subject}%0D%0AMessage: ${message}`;

    window.location.href = `mailto:basu.health.edu.fdn@gmail.com?subject=New Contact Form Message&body=${mailBody}`;
});
</script>
