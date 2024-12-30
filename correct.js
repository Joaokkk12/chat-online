function detectDevice() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Verifica se é um dispositivo móvel
  if (/android|ipad|iphone|ipod/i.test(userAgent)) {
    return "mobile"; // Retorna "mobile" se for um dispositivo móvel
  } else {
    return "desktop"; // Retorna "desktop" se for um computador
  }
}

// Exemplo de uso
const deviceType = detectDevice();
const messagesDiv = document.getElementById('chat-container');
const fadeDiv = document.getElementById('blur-overlay');
if (deviceType === "mobile") {
 messagesDiv.style.width = "500px";
 fadeDiv.style.width = "84%";
} else {
  console.log("Você está usando um computador.");
  messagesDiv.style.width = "600px";
  fadeDiv.style.width = "95%";
}
