let hourHidden = "show";


function setToshow() {
  hourHidden = "show";
  localStorage.setItem("hourChosen",hourHidden);
  window.location.reload();
}

function setTohidden() {
  hourHidden = "hidden";
  localStorage.setItem("hourChosen",hourHidden);
  window.location.reload();
}

window.addEventListener("load", () => {
 const chosen = localStorage.getItem("hourChosen");

  if (chosen) {
    console.log(chosen)
    if (chosen == "show") {
      const style = document.createElement('style');
  style.innerHTML = `
  #config #show {
    border:4px solid white;

}
#config #hide {
    border:0px solid white;

}
  `;
  document.head.appendChild(style);
    } else {
      const style = document.createElement('style');
  style.innerHTML = `
  #config #show {
    border:0px solid white;

}
#config #hide {
    border:4px solid white;

}
  `;
  document.head.appendChild(style);
    }
  } else {
   localstorage.setItem("hourChosen",hourHidden);
   
  }
});