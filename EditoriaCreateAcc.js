function handleCreateAccount(event) {
  event.preventDefault();
  const newUsername = document.getElementById('new-username').value;
  const newPassword = document.getElementById('new-password').value;
  const errorMessage = document.getElementById('signup-error-message');

  if (localStorage.getItem(newUsername)) {
      errorMessage.style.display = "block";
  } else {
      localStorage.setItem(newUsername, newPassword);
      alert('Account Created! WELCOME.');
      window.location.href = 'Editor.html'; 
  }
}

function redirectToLogin() {
    window.location.href = 'Editorialogin.html'; // Update with the correct path to your login page
}


