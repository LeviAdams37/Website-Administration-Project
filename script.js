document.getElementById("loginBtn").addEventListener("click", () => openPopup("loginPopup"));
document.getElementById("createBtn").addEventListener("click", () => openPopup("createPopup"));

function openPopup(id) {
  document.getElementById(id).style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

function closePopup() {
  document.querySelectorAll(".popup").forEach(p => p.style.display = "none");
  document.getElementById("overlay").style.display = "none";
}

function createAccount() {
  const username = document.getElementById("createUsername").value;
  const password = document.getElementById("createPassword").value;

  if (!username || !password) {
    alert("Please fill out both fields.");
    return;
  }

  if (localStorage.getItem(username)) {
    alert("Username already exists!");
    return;
  }

  localStorage.setItem(username, password);
  alert("Account created successfully!");
  closePopup();
}

function login() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;
  const storedPassword = localStorage.getItem(username);

  if (storedPassword === password) {
    alert(`Welcome back, ${username}!`);
    closePopup();
  } else {
    alert("Invalid username or password.");
  }
}
