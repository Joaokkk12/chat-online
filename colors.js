  const chat = document.getElementById('chat-container');
  const messagesDivc = document.getElementById('messages');
    const form = document.getElementById('form');
    const send = document.getElementById('send');
    const input = document.getElementById('message-input');
    const recebersom = document.getElementById("receber");
    const suggestion = document.getElementById("suggestion");
    const suggestioninput = document.getElementById("suggestion-input");
    const blueb = document.getElementById("blue");
    const pinkb = document.getElementById("pink");
    const yellowb = document.getElementById("yellow");
    const greenb = document.getElementById("green");
function yellow() {
  blueb.style.border = "none";
  pinkb.style.border = "none";
  greenb.style.border = "none";
  yellowb.style.border = "2px solid white";
  messagesDivc.style.color = "yellow";
  messagesDivc.style.backgroundColor = "rgba(30, 30,0 , 1)";
  
  messagesDivc.style.borderBottom = "1px solid darkkhaki";
  chat.style.boxShadow = "0 2px 10px darkkhaki";
  input.style.backgroundColor = "rgba(100, 100, 0, 1)";
  // Adiciona a regra CSS dinamicamente
  const style = document.createElement('style');
  style.innerHTML = `
    body {
    background-Color: rgba(50,50,0,1);
    }
    #form input:focus::placeholder {
      color: yellow;
      color: rgba(200,200,0,0,1);
    }
    #form input:focus {
      
      outline: none;
      border: 2px solid yellow;
    }
    #form button {
      padding: 8px 12px;
      border: none;
      background: yellow;
      color: white;
      border-radius: 15px;
      margin-left: 5px;
      cursor: pointer;
    }
    #form button:hover {
      background: lightgoldenrodyellow;
    }
    #blur-overlay {
  display:block;
  transition:1s;
  position: absolute;
border-bottom: radius(10px);
  width: 0%;
  height: 4%; /* Defina a altura da área com blur */
  background: linear-gradient(180deg, rgba(100, 100, 0, 1),rgba(0,0,0,0)); 
border-top-right-radius: 8px;
border-top-left-radius: 8px;

}
#chat-container {
  border: 5px solid darkkhaki;
}
#config .button {
  background-color: yellow;
}
#name {
        color:white;
      flex: 1;
      padding: 8px;
      border: 1px solid orange;
      border-radius: 15px;
      border: none;
      background-color: rgba(80, 70, 0, 1);
      
}
#name:focus {
  
      outline: none;
      border: 3px solid yellow;
}
  `;
  document.head.appendChild(style);
  localStorage.setItem("chatcolor",'blue');
}


function pink() {
  
  blueb.style.border = "none";
  pinkb.style.border = "2px solid white";
  greenb.style.border = "none";
  yellowb.style.border = "none";
  messagesDivc.style.color = "deeppink";
  messagesDivc.style.backgroundColor = "rgba(30, 0,30 , 1)";
  
  messagesDivc.style.borderBottom = "1px solid deeppink";
  chat.style.boxShadow = "0 2px 10px deeppink";
  input.style.backgroundColor = "rgba(100, 0, 100, 1)";
  // Adiciona a regra CSS dinamicamente
  const style = document.createElement('style');
  style.innerHTML = `
    body {
    background-Color: rgba(50,0,50,1);
    }
    #form input:focus::placeholder {
      color: yellow;
      color: rgba(200,0,200,1);
    }
    #form input:focus {
      
      outline: none;
      border: 2px solid deeppink;
    }
    #form button {
      padding: 8px 12px;
      border: none;
      background: deeppink;
      color: white;
      border-radius: 15px;
      margin-left: 5px;
      cursor: pointer;
    }
    #form button:hover {
      background: pink;
    }
    #blur-overlay {
  display:block;
  transition:1s;
  position: absolute;
border-bottom: radius(10px);
  width: 0%;
  height: 4%; /* Defina a altura da área com blur */
  background: linear-gradient(180deg, rgba(100, 0, 100, 1),rgba(0,0,0,0)); 
border-top-right-radius: 8px;
border-top-left-radius: 8px;

}
#chat-container {
  border: 5px solid deeppink;
}
#config .button {
  background-color: deeppink;
}
#name {
  color: white;
  flex: 1;
  padding: 8 px;
  border: 1 px solid deeppink;
  border-radius: 15 px;
  border: none;
  background-color: rgba(100, 0, 100, 1);

}
#name:focus {

  outline: none;
  border: 3px solid deeppink;
}
  `;
  document.head.appendChild(style);
  localStorage.setItem("chatcolor", 'pink');
}

function green() {
  
  blueb.style.border = "none";
  pinkb.style.border = "none";
  greenb.style.border = "2px solid white";
  yellowb.style.border = "none";
  messagesDivc.style.color = "limegreen";
  messagesDivc.style.backgroundColor = "rgba(0, 30,0 , 1)";
  
  messagesDivc.style.borderBottom = "1px solid darkkhaki";
  chat.style.boxShadow = "0 2px 10px darkkhaki";
  input.style.backgroundColor = "rgba(00, 100, 0, 1)";
  // Adiciona a regra CSS dinamicamente
  const style = document.createElement('style');
  style.innerHTML = `
    body {
    background-Color:rgba(0,50,0,1);
    }
    background-Color: rgba(0,0,50,1);
    #form input:focus::placeholder {
      color: yellow;
      color: rgba(0,200,0,1);
    }
    #form input:focus {
      
      outline: none;
      border: 2px solid green;
    }
    #form button {
      padding: 8px 12px;
      border: none;
      background: limegreen;
      color: white;
      border-radius: 15px;
      margin-left: 5px;
      cursor: pointer;
    }
    #form button:hover {
      background: lightgreen;
    }
    #blur-overlay {
  display:block;
  transition:1s;
  position: absolute;
border-bottom: radius(10px);
  width: 0%;
  height: 4%; /* Defina a altura da área com blur */
  background: linear-gradient(180deg, rgba(0, 100, 0, 1),rgba(0,0,0,0)); 
border-top-right-radius: 8px;
border-top-left-radius: 8px;

}
#chat-container {
  border: 5px solid darkgreen;
}
#config .button {
  background-color: green;
}
#name {
  color: white;
  flex: 1;
  padding: 8 px;
  border: 1 px solid limegreen;
  border-radius: 15 px;
  border: none;
  background-color: rgba(0, 100, 0, 1);

}
#name:focus {

  outline: none;
  border: 3px solid limegreen;
}
  `;
  document.head.appendChild(style);
  localStorage.setItem("chatcolor",'green');
}
function blue() {
  
  blueb.style.border = "2px solid white";
  pinkb.style.border = "none";
  greenb.style.border = "none";
  yellowb.style.border = "none";
  messagesDivc.style.color = "blue";
  messagesDivc.style.backgroundColor = "rgba(0, 0,30 , 1)";
  
  messagesDivc.style.borderBottom = "1px solid skyblue";
  chat.style.boxShadow = "0 2px 10px darkblue";
  input.style.backgroundColor = "rgba(0, 0, 100, 1)";
  // Adiciona a regra CSS dinamicamente
  const style = document.createElement('style');
  style.innerHTML = `
  body {
    background-Color: rgba(0,0,50,1);
  }
    #form input:focus::placeholder {
      color: blue;
      color: rgba(0,0,200,0,1);
    }
    #form input:focus {
      
      outline: none;
      border: 2px solid blue;
    }
    #form button {
      padding: 8px 12px;
      border: none;
      background: blue;
      color: white;
      border-radius: 15px;
      margin-left: 5px;
      cursor: pointer;
    }
    #form button:hover {
      background: darkblue;
    }
    #blur-overlay {
  display:block;
  transition:1s;
  position: absolute;
border-bottom: radius(10px);
  width: 0%;
  height: 4%; /* Defina a altura da área com blur */
  background: linear-gradient(180deg, rgba(0, 0, 100, 1),rgba(0,0,0,0)); 
border-top-right-radius: 8px;
border-top-left-radius: 8px;

}
#chat-container {
  border: 5px solid darkblue;
}
#config .button {
  background-color: blue;
}
#name {
  color: white;
  flex: 1;
  padding: 8 px;
  border: 1 px solid darkblue;
  border-radius: 15 px;
  border: none;
  background-color: rgba(0, 0, 100, 1);

}
#name: focus {

  outline: none;
  border: 3px solid blue;
}
  `;
  document.head.appendChild(style);
  localStorage.setItem("chatcolor", 'blue');
}


window.addEventListener("load", () => {
const color =  localStorage.getItem("chatcolor");
  if (color == "blue") {
    blue()
  } else if (color == "pink") {
    pink()
  } else if (color == "green") {
    green()
  } else if (color == "yellow") {
    yellow()
  }
});