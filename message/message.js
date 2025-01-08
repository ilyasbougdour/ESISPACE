const sendButton = document.getElementById('send-button');
const messageInput = document.getElementById('message-input');
const chatMessages = document.querySelector('.chat-messages');

// Envoyer un message
sendButton.addEventListener('click', () => {
    const messageText = messageInput.value.trim();
    if (messageText) {
        // Ajouter le message envoyé
        addMessage(messageText, 'sent');
        // Simuler la réception d'un message après un délai
        setTimeout(() => {
            addMessage("Message reçu !", 'received');
        }, 1000);
        messageInput.value = '';
    }
});

// Ajouter un message à l'historique
function addMessage(text, type) {
    const message = document.createElement('div');
    message.className = `message ${type}`;
    message.innerHTML = `<p>${text}</p>`;
    chatMessages.appendChild(message);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Appuyer sur Entrée pour envoyer un message
messageInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendButton.click();
    }
});
