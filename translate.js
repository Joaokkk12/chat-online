// Obtém o idioma do navegador ou do dispositivo
const linguagem = navigator.language || navigator.userLanguage;

// Elemento onde o texto será alterado
const textoElemento = document.getElementById('ConfigTitle');
const hora = document.getElementById('hourtext');
const show = document.getElementById('show');
const hide = document.getElementById('hide');
const user = document.getElementById('usernameText');
// Define os textos de acordo com a linguagem
const textos = {
  'pt-BR': 'configurações do chat',
  'en-US': 'Chat configurations',
  'es-ES': 'configuración de chat',
  'fr-FR': 'paramètres de discussion'
};
const horah = {
  'pt-BR': 'hora:',
  'en-US': 'Hour:',
  'es-ES': 'tiempo:',
  'fr-FR': 'temps:'
};
const showh = {
  'pt-BR': 'mostrar',
  'en-US': 'show',
  'es-ES': 'mostrar',
  'fr-FR': 'montrer'
};
const hideh = {
  'pt-BR': 'esconder',
  'en-US': 'hide',
  'es-ES': 'esconderse',
  'fr-FR': 'se cacher'
};
const usertrans = {
  'pt-BR': 'nome',
  'en-US': 'username',
  'es-ES': 'nombre de usuario',
  'fr-FR': "nom d'utilisateur"
};
// Verifica se a linguagem é suportada; caso contrário, usa o padrão (inglês)
const textoAlterado = textos[linguagem] || 'Configurations';

// Altera o texto no elemento HTML
textoElemento.textContent = textoAlterado;



const horaal = horah[linguagem] || 'hour:';

// Altera o texto no elemento HTML
hora.textContent = horaal;

const showal = showh[linguagem] || 'show';

// Altera o texto no elemento HTML
show.textContent = showal;


const hideal = hideh[linguagem] || 'hide';

// Altera o texto no elemento HTML
hide.textContent = hideal;

const usercon = usertrans[linguagem] || 'hide';

// Altera o texto no elemento HTML
user.textContent = usercon;