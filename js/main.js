// Show/hide chat window
const chatIcon = document.getElementById('chatIcon');
const chatWindow = document.getElementById('chatWindow');
const closeButton = document.getElementById('closeButton');

chatIcon.addEventListener('click', () => {
  chatWindow.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  chatWindow.style.display = 'none';
});

// Handle sending messages
const sendButton = document.getElementById('sendButton');
const messageInput = document.getElementById('messageInput');
const chatBody = document.querySelector('.chat-body');

sendButton.addEventListener('click', () => {
  const message = messageInput.value.trim();
  if (message !== '') {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', 'user');
    messageElement.textContent = message;
    chatBody.appendChild(messageElement);
    messageInput.value = '';
  }
});
