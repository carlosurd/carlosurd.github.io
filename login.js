document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const loginError = document.getElementById('login-error');
    const loginContainer = document.getElementById('login-container');
    const homeContainer = document.getElementById('home-container');
    const loginMessage = document.createElement('p'); // Elemento para mostrar mensajes
    loginMessage.style.marginTop = "20px";

    // Credenciales válidas
    const validUsername = "monkeynovia";
    const validPassword = "papoe2203";

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Limpiar mensajes previos
        loginError.style.display = 'none';
        loginMessage.textContent = '';

        if (username === validUsername && password === validPassword) {
            loginMessage.textContent = "✅ Acceso autorizado monkeynovia ❤️";
            loginMessage.style.color = "green";
            loginContainer.appendChild(loginMessage);

            setTimeout(() => {
                loginContainer.style.display = 'none';
                homeContainer.style.display = 'block';
            }, 4500);
        } else {
            loginMessage.textContent = "❌ Acceso único y exclusivo para mi monkeynovia 😤";
            loginMessage.style.color = "red";
            loginContainer.appendChild(loginMessage);
        }
    });
});
