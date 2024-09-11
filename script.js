document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting immediately

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Store form data (for demonstration purposes)
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    localStorage.setItem('username', username);
    localStorage.setItem('email', email);

    // Redirect to confirmation.html
    window.location.href = 'confirmation.html';
});

