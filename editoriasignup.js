function handleSignUp(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const storedUsername = localStorage.getItem('username');
  const storedPassword = localStorage.getItem('password');
  const errorMessage = document.getElementById('error-message');

  if (username === "Kamlesh Pawar" && password === "Kamlesh@123") {
      window.location.href = "Editor.html";
  } else if (username === storedUsername && password === storedPassword) {
      alert(' WELCOME! ');
      window.location.href = "Editor.html";
  } else {
      errorMessage.style.display = "block";
  }
}
function handleLogin() {
  window.location.href = 'Editorialogin.html';
}
function handlecreateACC() {
  window.location.href = 'EditoriaCreateACC.html';
}

