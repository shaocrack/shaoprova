const romanticMessages = [
  "Desde que te conocí, mi mundo cambió,\nUn destello de luz en la noche, llegó.",
  "Tu risa se convirtió en mi canción,\nY en cada latido, siento tu presencia.",
  "Eres el milagro que nunca esperé,\nPero eres el milagro que necesitaba mi vida.",
];
const finalMessage = "Te lo dice Shaopro";

document.getElementById('animateButton').addEventListener('click', function() {
  const messagesContainer = document.getElementById('messages');
  messagesContainer.innerHTML = ''; // Limpiar mensajes anteriores

  function displayMessages(messages, index) {
      if (index < messages.length) {
          const messageBox = document.createElement('div');
          messageBox.classList.add('message-box');
          messageBox.textContent = messages[index];
          messagesContainer.appendChild(messageBox);
          setTimeout(() => {
              displayMessages(messages, index + 1);
          }, 5000); // Cambiar 5000 por el tiempo deseado entre mensajes (en milisegundos)
      } else {
          // Mostrar el botón para ver el video al finalizar los mensajes
          const videoButton = document.getElementById('videoButton');
          videoButton.style.display = 'block';
          videoButton.addEventListener('click', function() {
              window.location.href = 'https://youtu.be/78AtIbSh1es?t=23';
          });
          // Agregar mensaje final
          const finalMessageBox = document.createElement('div');
          finalMessageBox.classList.add('message-box');
          finalMessageBox.textContent = finalMessage;
          messagesContainer.appendChild(finalMessageBox);
      }
  }

  displayMessages(romanticMessages, 0);
});
