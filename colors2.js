  const chat = document.getElementById('chat-container');
  const messagesDivc = document.getElementById('messages');
    const form = document.getElementById('form');
    const send = document.getElementById('send');
    const input = document.getElementById('message-input');
    const recebersom = document.getElementById("receber");
    const suggestion = document.getElementById("suggestion");
    const suggestioninput = document.getElementById("suggestion-input");
    const blueb = document.getElementById("blue");
    const greenb = document.getElementById("green");

function green() {
  
  blueb.style.border = "none";

  greenb.style.border = "2px solid white";

  messagesDivc.style.color = "lightgray";
  messagesDivc.style.backgroundColor = "rgba(30, 30,30 , 1)";
  
  messagesDivc.style.borderBottom = "1px solid lightgray";
  chat.style.boxShadow = "0 2px 10px lightgray";
  input.style.backgroundColor = "rgba(100, 100, 100, 1)";
  // Adiciona a regra CSS dinamicamente
  const style = document.createElement('style');
  style.innerHTML = `
    body {
    background-Color: rgba(20,20,20,1);
    color:white;
    }
    #form input:focus::placeholder {
      color: white;
      color: rgba(200,200,200,0,1);
    }
    #form input:focus {
      
      outline: none;
      border: 2px solid gray;
    }
    #form button {
      padding: 8px 12px;
      border: none;
      background: lightgray;
      color: white;
      border-radius: 15px;
      margin-left: 5px;
      cursor: pointer;
    }
    #form button:hover {
      background: lightgray;
    }
    #blur-overlay {
  display:block;
  transition:1s;
  position: absolute;
border-bottom: radius(10px);
  width: 0%;
  height: 4%; /* Defina a altura da área com blur */
  background: linear-gradient(180deg, rgba(100, 100,  100, 1),rgba(0,0,0,0)); 
border-top-right-radius: 8px;
border-top-left-radius: 8px;

}
#chat-container {
  border: 5px solid darkgray;
}
#config .button {
  background-color: gray;
}
#name {
  color: white;
  flex: 1;
  padding: 8 px;
  border: 1 px solid lightgray;
  border-radius: 15 px;
  border: none;
  background-color: rgba(100,100, 100, 0, 1);

}
#name:focus {

  outline: none;
  border: 3px solid lightgray;
}
#buttons button {
      color:white;
      transition:0.5s;
      position: relative;
      background-color: rgba(200,200,200,0);
      padding: 10px 20px;
      border-radius: 25px;
      bottom:6px;
      border: none;
      cursor: pointer;
    }
  `;
  document.head.appendChild(style);
  localStorage.setItem("chatcolor",'black');
}
function blue() {
  
  blueb.style.border = "2px solid black";

  greenb.style.border = "none";

  messagesDivc.style.color = "white";
  messagesDivc.style.backgroundColor = "rgba(30, 30,30 , 1)";
  
  messagesDivc.style.borderBottom = "1px solid lightgray";
  chat.style.boxShadow = "0 2px 10px darkgray";
  input.style.backgroundColor = "rgba(100, 100, 100, 1)";
  // Adiciona a regra CSS dinamicamente
  const style = document.createElement('style');
  style.innerHTML = `
  body {
    background-Color: rgba(255,255,255,1);
    color:black;
  }
    #form input:focus::placeholder {
      color: white;
      color: rgba(200,200,200,0,1);
    }
    #form input:focus {
      
      outline: none;
      border: 2px solid white;
    }
    #form button {
      padding: 8px 12px;
      border: none;
      background: gray;
      color: white;
      border-radius: 15px;
      margin-left: 5px;
      cursor: pointer;
    }
    #form button:hover {
      background: darkgray;
    }
    #blur-overlay {
  display:block;
  transition:1s;
  position: absolute;
border-bottom: radius(10px);
  width: 0%;
  height: 4%; /* Defina a altura da área com blur */
  background: linear-gradient(180deg, rgba(100, 100, 100, 1),rgba(0,0,0,0)); 
border-top-right-radius: 8px;
border-top-left-radius: 8px;

}
#chat-container {
  border: 5px solid darkgray;
}
#config .button {
  background-color: gray;
}
#name {
  color: white;
  flex: 1;
  padding: 8 px;
  border: 1 px solid dargray;
  border-radius: 15 px;
  border: none;
  background-color: rgba(100, 100, 100, 1);

}
#name: focus {

  outline: none;
  border: 3px solid white;
}
#messages {
      transition:1s;
      color:white;
      height: 570px;
      overflow-y: auto;
      padding: 10px;
      border-bottom: 1px solid lightgray;
      background-color: rgba(30, 30, 30, 1);
    } 
    #buttons button {
  color: black;
  transition: 0.5 s;
  position: relative;
  background-color: rgba(200, 200, 200, 0);
  padding: 10 px 20 px;
  border-radius: 25 px;
  bottom: 6 px;
  border: none;
  cursor: pointer;
}
  `;
  document.head.appendChild(style);
  localStorage.setItem("chatcolor", 'white');
}


window.addEventListener("load", () => {
const color =  localStorage.getItem("chatcolor");
  if (color == "white") {
    blue()
  
  } else {
    green()
  }
});