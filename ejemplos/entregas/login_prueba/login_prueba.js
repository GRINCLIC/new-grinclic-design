const loginForm = document.getElementById('loginForm');
const loginBtn = document.getElementById('loginBtn');
const loginSpinner = document.getElementById('loginSpinner');
const loginBtnLabel = document.querySelector('.login-btn-label');
const loginFormView = document.getElementById('loginFormView');
const successView = document.getElementById('successView');
const restartBtn = document.getElementById('restartBtn');
const toggleUser = document.getElementById('toggleUser');
const togglePassword = document.getElementById('togglePassword');
const userInput = document.getElementById('usuario');
const passwordInput = document.getElementById('contrasena');

function toggleVisibility(input, button, visibleLabel, hiddenLabel) {
  const reveal = input.type === 'password';
  input.type = reveal ? 'text' : 'password';
  button.innerHTML = reveal ? '<i class="bi bi-eye-slash"></i>' : '<i class="bi bi-eye"></i>';
  button.setAttribute('aria-label', reveal ? hiddenLabel : visibleLabel);
}

toggleUser.addEventListener('click', () => {
  toggleVisibility(userInput, toggleUser, 'Mostrar usuario', 'Ocultar usuario');
});

togglePassword.addEventListener('click', () => {
  toggleVisibility(passwordInput, togglePassword, 'Mostrar contraseña', 'Ocultar contraseña');
});

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!loginForm.checkValidity()) {
    loginForm.classList.add('was-validated');
    return;
  }

  loginBtn.disabled = true;
  loginSpinner.classList.remove('d-none');
  loginBtnLabel.textContent = 'Ingresando...';

  window.setTimeout(() => {
    loginBtn.disabled = false;
    loginSpinner.classList.add('d-none');
    loginBtnLabel.textContent = 'Iniciar sesión';
    loginFormView.classList.add('d-none');
    successView.classList.remove('d-none');
  }, 900);
});

restartBtn.addEventListener('click', () => {
  loginForm.reset();
  loginForm.classList.remove('was-validated');
  userInput.type = 'password';
  passwordInput.type = 'password';
  toggleUser.innerHTML = '<i class="bi bi-eye"></i>';
  togglePassword.innerHTML = '<i class="bi bi-eye"></i>';
  toggleUser.setAttribute('aria-label', 'Mostrar usuario');
  togglePassword.setAttribute('aria-label', 'Mostrar contraseña');
  successView.classList.add('d-none');
  loginFormView.classList.remove('d-none');
});
