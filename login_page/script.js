// External JavaScript
function validateLogin() {
    // Get values from inputs
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simple validation
    if (username === 'user' && password === 'pass') {
        document.getElementById('message').innerText = 'Login successful!';
        document.getElementById('message').style.color = '#4CAF50';
    } else {
        document.getElementById('message').innerText = 'Invalid username or password.';
        document.getElementById('message').style.color = '#FF5733';
    }
}
