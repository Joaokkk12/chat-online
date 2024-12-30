function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
let configBollean = false;

async function config() {
  if (configBollean == false) {
    configBollean = true;
  const configdiv = document.getElementById('config');
  const messagesDiv = document.getElementById('chat-container');
  const github = document.getElementById('github');
  const buttonsDiv = document.getElementById('buttons');
  const configButton = document.getElementById('configbutton');
  const X = document.getElementById('X');// Único elemento pelo ID

  if (messagesDiv) {
    messagesDiv.classList.add("blurred"); // Aplica a classe diretamente no elemento
  }
  github.style.left = "50px";
github.style.opacity = 0;
buttonsDiv.style.width = "300px";
configButton.style.left = "-50px";

  document.getElementById("buttons").style.filter = "blur(0px)";

  configdiv.style.display = "grid";
  await esperar(200);
  configdiv.style.opacity = 1;
  await esperar(1000);
  
  if (configBollean == false) {
  github.style.visibility = "hidden";
  }
  await esperar(700)
    X.style.visibility = "visible";
    await esperar(100);
    X.style.opacity = 1;
    
  console.log(configBollean);
  } else {
  }
}

async function configB() {
  if (configBollean == true) {
    configBollean = false;
  const configdiv = document.getElementById('config');
  const messagesDiv = document.getElementById('chat-container');
   const github = document.getElementById('github');
  const buttonsDiv = document.getElementById('buttons');
  const configButton = document.getElementById('configbutton');// Único
  const X = document.getElementById('X');//Único elemento pelo ID
 if (configBollean == true) {
 github.style.visibility = "visible";
 } 
  github.style.opacity = 1;
  github.style.left = "0px";
configButton.style.left = "0px"
buttonsDiv.style.width = "500px";
  if (messagesDiv) {
    messagesDiv.classList.remove("blurred"); // Aplica a classe diretamente no elemento
  }

  document.getElementById("buttons").style.filter = "blur(0px)";
configdiv.style.opacity = 0;
  
  await esperar(200);
  configdiv.style.display = "none";
  console.log(configBollean);
  X.style.opacity = 0;
  await esperar(300);
  X.style.visibility = "hidden";
  } else {
    
  }
}



