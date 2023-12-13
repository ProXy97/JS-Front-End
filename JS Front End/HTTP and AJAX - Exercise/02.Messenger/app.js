function attachEvents() {
    
    const baseURL = 'http://localhost:3030/jsonstore/messenger';

    const messagesBox = document.getElementById('messages');
    
    const [inputAuthor, inputMessage, sendBtn, refreshBtn] = document.getElementsByTagName('input');

    sendBtn.addEventListener('click', async () => {
        const messageFormat = {
            author: inputAuthor.value,
            content: inputMessage.value
        };

        let isValidMessage = inputAuthor.value !== '' && inputMessage.value !== '';

        if (isValidMessage) {
            await fetch(baseURL, {
                method: 'POST',
                body: JSON.stringify(messageFormat)
            });
        }


        inputAuthor.value = '';
        inputMessage.value = '';

    });

    refreshBtn.addEventListener('click', async () => {

        const response = await fetch(baseURL);
        const messages = await response.json();
        const messagesToDisplay = [];

        for (const messageInfo of Object.values(messages)) {
            
            messagesToDisplay.push(`${messageInfo.author}: ${messageInfo.content}`);
        }
        messagesBox.textContent = messagesToDisplay.join('\n');

    });

}

attachEvents();