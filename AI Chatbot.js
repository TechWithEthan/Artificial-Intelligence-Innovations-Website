function getResponse() {
    const userInput = document.getElementById("user-input").value;
    const chatBox = document.getElementById("chat-box");

    if (userInput.trim() !== "") {
        // Display user input in the chat
        chatBox.innerHTML += `<div class="user-msg">You: ${userInput}</div>`;

        // AI logic (simple response based on user input)
        let response = "I'm sorry, I didn't understand that.";

        // Sample extended responses for different inputs
        if (userInput.toLowerCase().includes("hello")) {
            response = "Hello there! How can I assist you today?";
        } else if (userInput.toLowerCase().includes("how are you")) {
            response = "I'm just a bot, but I'm doing great! How about you?";
        } else if (userInput.toLowerCase().includes("your name")) {
            response = "I'm your friendly chatbot!";
        } else if (userInput.toLowerCase().includes("thank you")) {
            response = "You're welcome! Let me know if you need anything else.";
        } else if (userInput.toLowerCase().includes("bye")) {
            response = "Goodbye! Have a great day!";
        } else if (userInput.toLowerCase().includes("weather")) {
            response = "I can check the weather for you! Just tell me your location.";
        } else if (userInput.toLowerCase().includes("time")) {
            response = `The current time is ${new Date().toLocaleTimeString()}.`;
        } else if (userInput.toLowerCase().includes("date")) {
            response = `Today's date is ${new Date().toLocaleDateString()}.`;
        } else if (userInput.toLowerCase().includes("how old are you")) {
            response = "I'm ageless, I'm just a bot!";
        } else if (userInput.toLowerCase().includes("tell me a joke")) {
            response = "Why don’t skeletons fight each other? They don’t have the guts!";
        }

        // 100 responses can be added in a similar manner
        // For instance:
        else if (userInput.toLowerCase().includes("what's your favorite color")) {
            response = "I don't have a favorite color, but I like all colors!";
        } else if (userInput.toLowerCase().includes("do you like music")) {
            response = "I think I'd enjoy music if I could listen to it!";
        } else if (userInput.toLowerCase().includes("tell me something interesting")) {
            response = "Did you know? A day on Venus is longer than a year on Venus!";
        }
        
        // And so on, up to 100 responses.

        // Display AI response in the chat
        setTimeout(() => {
            chatBox.innerHTML += `<div class="ai-msg">AI: ${response}</div>`;
            chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
        }, 500);
    }

    // Clear input field
}