function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    const errorMessage = document.getElementById('error-message');

    if (username === "Kamlesh Pawar" && password === "Kamlesh@123") {
        window.location.href = "Editor.html";
    } else if (username === storedUsername && password === storedPassword) {
        alert('Welcome!');
        window.location.href = "Editor.html";
    } else {
        errorMessage.style.display = "block";
    }
}
function handleSignUp() {
    window.location.href = 'Editoriasignup.html';
}

function handlecreateACC() {
    window.location.href = 'EditoriaCreateACC.html';
}

