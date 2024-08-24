document.addEventListener('DOMContentLoaded', () => {
    // Configuração de usuário e senha corretos
    const correctUsername = 'usuario';
    const correctPassword = 'senha123';

    // Obtendo referência ao formulário
    const form = document.getElementById('loginForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Obtendo os valores dos campos
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Validação
        if (username === correctUsername && password === correctPassword) {
            alert('Login bem-sucedido!');
        } else {
            alert('Usuário ou senha incorretos.');
        }
    });
});
