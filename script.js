const messageBox = document.getElementById('messageBox');
const userInput = document.getElementById('userInput');
const sendMessageButton = document.getElementById('sendMessageButton');
const todayHistoryList = document.getElementById('todayHistory');
const yesterdayHistoryList = document.getElementById('yesterdayHistory');

// Placeholder for chat history
const chatHistory = {
    today: ['¿Cómo está el clima?'],
    yesterday: ['¿Qué es Bootstrap?']
};

// Function to update chat history
function updateHistory() {
    todayHistoryList.innerHTML = chatHistory.today.map(q => `<li>${q}</li>`).join('');
    yesterdayHistoryList.innerHTML = chatHistory.yesterday.map(q => `<li>${q}</li>`).join('');
}

// Function to add a message to the chat
function addMessage(message, isUser = true) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(isUser ? 'user-message' : 'bot-message');
    messageDiv.innerHTML = `<div class="message">${message}</div>`;
    messageBox.appendChild(messageDiv);
    messageBox.scrollTop = messageBox.scrollHeight;

    // Update chat history
    if (isUser) {
        chatHistory.today.push(message);
        updateHistory();
    }
}

// Send message event
sendMessageButton.addEventListener('click', function () {
    const message = userInput.value.trim();
    if (message !== '') {
        addMessage(message, true);
        userInput.value = '';

        // Simulate bot response
        setTimeout(() => {
            addMessage("Soy un bot de demostración. Dijiste: " + message, false);
        }, 500);
    }
});

// Send message on 'Enter' key press
userInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessageButton.click();
    }
});

// Initialize history
updateHistory();
