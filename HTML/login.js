function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Replace these with your actual credentials
    var validUsername = 'sambhav';
    var validPassword = 'spotify';

    if (username === validUsername && password === validPassword) {
        document.getElementById('error-msg').innerText = 'Login successful!';
        window.location.href = 'code.html'; 
    } else {
        document.getElementById('error-msg').innerText = 'Invalid username or password';
        alert(document.getElementById('error-msg').innerText);
    }

 
    return false;
}
