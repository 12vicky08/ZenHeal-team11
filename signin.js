function showLogin() {
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}

function showSignup() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function signup() {
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const dob = document.getElementById('signup-dob').value;

    if (username.length < 3) {
        showError('username-error', 'Username must be at least 3 characters long');
        return;
    }
    if (!validateEmail(email)) {
        showError('email-error', 'Please enter a valid email address');
        return;
    }

    localStorage.setItem('userUsername', username);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userDOB', dob);
    alert('Signup successful!');
    window.location.href = 'loading.html';
}

function login() {
    const usernameOrEmail = document.getElementById('login-username').value;
    const storedUsername = localStorage.getItem('userUsername');
    const storedEmail = localStorage.getItem('userEmail');

    if (usernameOrEmail === storedUsername || usernameOrEmail === storedEmail) {
        alert('Login successful!');
        window.location.href = 'loading.html';
    } else {
        showError('login-error', 'Invalid credentials. Please try again.');
        document.getElementById('login-form').classList.add('shake');
        setTimeout(() => {
            document.getElementById('login-form').classList.remove('shake');
        }, 500);
    }
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    setTimeout(() => {
        errorElement.style.display = 'none';
    }, 3000);
}

function loginWithGoogle() {
    alert('log in successful');
    window.location.href = 'loading.html';
}

function loginWithFacebook() {
    alert('log in successful');
    window.location.href = 'loading.html';
}

function loginWithLinkedIn() {
    alert('log in successful');
    window.location.href = 'loading.html';
}
