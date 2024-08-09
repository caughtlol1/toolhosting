const API_URL = 'https://your-backend-api-url.com'; // Replace with your API URL

function showLogin(role) {
    document.getElementById('login-form').style.display = 'none';
    const loginContainer = document.getElementById('login-container');
    const loginTitle = document.getElementById('login-title');

    loginTitle.textContent = `${role.charAt(0).toUpperCase() + role.slice(1)} Login`;
    loginContainer.style.display = 'block';
}

function submitLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('login-title').textContent.replace(' Login', '').toLowerCase();

    fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, role })
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            document.getElementById('message').textContent = `Login successful! Role: ${data.role}`;
            document.getElementById('message').style.color = 'green';
        } else {
            document.getElementById('message').textContent = 'Invalid credentials or server error!';
            document.getElementById('message').style.color = 'red';
        }
    })
    .catch(error => {
        document.getElementById('message').textContent = 'Network error!';
        document.getElementById('message').style.color = 'red';
    });
}

