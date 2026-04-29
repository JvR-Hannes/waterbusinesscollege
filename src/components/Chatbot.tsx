'use client';

import { useEffect } from 'react';

export default function Chatbot() {
  useEffect(() => {
    const chatBox = document.getElementById('chatbox');
    if (!chatBox) return;

    chatBox.innerHTML = `
      <button id="chatButton" style="z-index:1000; position: fixed; bottom: 20px; right: 110px; background-color: rgb(47,83,141); color: #fff; border: none; border-radius: 10px; width: 60px; height: 50px; font-size: 18px; cursor: pointer; box-shadow: 0 4px 8px rgba(0,0,0,0.2); display: flex; align-items: center; justify-content: center;">
        <span style="font-size:12px; line-height: 1;">Chat</span>
      </button>
      <div id="chatPopup" style="z-index:1000; display: none; position: fixed; bottom: 20px; right: 110px; width: 300px; border: 3px solid rgb(47,83,141); border-radius: 5px; padding: 10px; background-color: rgb(109,190,251); box-shadow: 0 0 10px rgba(0,0,0,0.1); font-family: inherit; font-size: 15px;">
        <button id="closeChat" style="position: absolute; top: 5px; right: 5px; background-color: transparent; border: none; font-size: 16px; font-weight: bold; cursor: pointer;">✖</button>
        <h1 style="text-align: center; color: #333; font-size: 18px;">WBC AI Chatbox</h1>
        <div id="chatContent" style="height: 300px; overflow-y: auto; border: 1px solid rgb(47,83,141); border-radius: 5px; padding: 10px; margin-bottom: 10px; background-color: #fff;"></div>
        <div style="display: flex; gap: 10px;">
          <input type="text" id="chatInput" style="flex-grow: 1; padding: 5px; border-radius: 5px; border: 1px solid rgb(47,83,141);" placeholder="Enter your question...">
          <button id="sendButton" style="padding: 5px 10px; border-radius: 15px; border: none; background-color: rgb(47,83,141); color: #fff; cursor: pointer;">Send</button>
        </div>
      </div>
    `;

    const chatButton = document.getElementById('chatButton') as HTMLButtonElement | null;
    const chatPopup = document.getElementById('chatPopup') as HTMLDivElement | null;
    const closeChat = document.getElementById('closeChat');
    const chatContent = document.getElementById('chatContent') as HTMLDivElement | null;
    const chatInput = document.getElementById('chatInput') as HTMLInputElement | null;
    const sendButton = document.getElementById('sendButton') as HTMLButtonElement | null;
    const messages: { role: 'user' | 'assistant'; content: string }[] = [];

    if (!chatButton || !chatPopup || !closeChat || !chatContent || !chatInput || !sendButton) return;

    chatButton?.addEventListener("click", () => {
      if (chatPopup) chatPopup.style.display = "block";
    });

    closeChat?.addEventListener("click", () => {
      if (chatPopup) chatPopup.style.display = "none";
      if (chatButton) chatButton.style.display = "flex";
    });

    function renderMessages() {
      if (!chatContent) return;
      chatContent.innerHTML = '';
      messages.forEach((message) => {
        const div = document.createElement('div');
        div.textContent = message.content;
        div.style.padding = '5px';
        div.style.margin = '5px 0';
        div.style.borderRadius = '5px';
        div.style.backgroundColor = message.role === 'user' ? '#e6f7ff' : '#e6ffe6';
        chatContent.appendChild(div);
      });
      chatContent.scrollTop = chatContent.scrollHeight;
    }

    function showTyping() {
      if (!chatContent) return;
      const typingDiv = document.createElement('div');
      typingDiv.id = 'typingIndicator';
      typingDiv.textContent = 'Typing...';
      typingDiv.style.fontStyle = 'italic';
      typingDiv.style.color = '#888';
      typingDiv.style.fontSize = '12px';
      typingDiv.style.margin = '5px 0';
      chatContent.appendChild(typingDiv);
      chatContent.scrollTop = chatContent.scrollHeight;
    }

    function hideTyping() {
      const typingDiv = document.getElementById('typingIndicator');
      if (typingDiv) typingDiv.remove();
    }

    async function sendMessage() {
      if (!chatInput) return;
      const userMessage = chatInput.value.trim();
      if (!userMessage) return;
      messages.push({ role: 'user', content: userMessage });
      renderMessages();
      chatInput.value = '';
      showTyping();

      try {
        const response = await fetch('https://wbcfaq-hr6y6xzkha-uc.a.run.app', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages }),
        });
        const data = await response.json();
        hideTyping();
        if (data.choices && data.choices.length > 0) {
          messages.push({ role: 'assistant', content: data.choices[0].message.content });
          renderMessages();
        } else {
          console.error('Unexpected response:', data);
        }
      } catch (error) {
        hideTyping();
        console.error('Error:', error);
      }
    }

    sendButton?.addEventListener('click', sendMessage);
    chatInput?.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') sendMessage();
    });
  }, []);

  return <div id="chatbox" />;
}