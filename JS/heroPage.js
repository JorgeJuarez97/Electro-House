const btn_arrow_guest = document.getElementById('arrow_guest');
const btn_registro = document.getElementById('boton_registro');
const btn_login = document.getElementById('boton_login');

const redirect_guest = () => {
    window.location.href = "../index.html"
}

const redirect_login = () => {
    
    window.location.href = "../Paginas/login.html"
}
const redirect_register = () => {
    
    window.location.href = "../Paginas/register.html"
}

btn_arrow_guest.addEventListener('click', () => redirect_guest())
btn_login.addEventListener('click', () => redirect_login())
btn_registro.addEventListener('click', () => redirect_register())
