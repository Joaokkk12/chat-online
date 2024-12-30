const usuario = document.getElementById('name');

function usuariochange() {
  localStorage.setItem('username', usuario.value);
}

const savedusername = localStorage.getItem('username');
if (savedusername) {
  usuario.value = "";
  usuario.value = savedusername;
}