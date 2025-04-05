// Add smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Optional: Dynamic navbar shadow on scroll
  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 10) {
      navbar.classList.add('shadow');
    } else {
      navbar.classList.remove('shadow');
    }
  });
// Scroll to Contact section when a nav link is clicked
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll("a[href^='#']");
  
    links.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });
  
  // Form Submit Alert (you can replace this with backend code later)
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for contacting us!");
  });
    // script.js

// Get necessary elements
const toggleButton = document.getElementById("toggle-btn");
const chatBox = document.getElementById("chatbox");
const sendButton = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatLog = document.getElementById("chatlog");

// Toggle chat window open/close
toggleButton.addEventListener("click", () => {
    if (chatBox.style.display === "none" || chatBox.style.display === "") {
        chatBox.style.display = "block";
        toggleButton.textContent = "Close Chat";
    } else {
        chatBox.style.display = "none";
        toggleButton.textContent = "Ask Us";
    }
});

// Function to add messages to the chat log
function addMessage(content, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.textContent = content;
    messageDiv.classList.add(sender === "user" ? "user-message" : "bot-message");
    chatLog.appendChild(messageDiv);
    chatLog.scrollTop = chatLog.scrollHeight; // Scroll to the latest message
}

// Handle sending the user's input
sendButton.addEventListener("click", () => {
    const userText = userInput.value.trim();
    if (userText !== "") {
        addMessage(userText, "user");
        userInput.value = "";

        // Simple bot logic (can be expanded later with more complex logic)
        setTimeout(() => {
            let botResponse = "I'm sorry, I didn't understand that.";
            
            if (userText.toLowerCase().includes("gst")) {
                botResponse = "GST stands for Goods and Services Tax. It is a value-added tax applied to most goods and services in India.";
            } else if (userText.toLowerCase().includes("tax filing")) {
                botResponse = "To file taxes, you need to log in to the government portal and follow the necessary steps based on your tax category.";
            } else if (userText.toLowerCase().includes("compliance")) {
                botResponse = "Compliance refers to adhering to the tax laws and regulations set by the government, including timely filings and payments.";
            }

            addMessage(botResponse, "bot");
        }, 1000); // Simulate a delay for bot response
    }
});
