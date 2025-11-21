// Smooth Scrolling
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Form Handling - Custom Request
document.getElementById('requestForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('aiResponse').style.display = 'block';
    // Mock AI response - integrate real API here later
});

// Messaging System
let messages = JSON.parse(localStorage.getItem('messages')) || [];
let currentChat = 'Provider: Mia';

function sendMessage() {
    const input = document.getElementById('messageInput');
    const msg = input.value.trim();
    if (msg) {
        messages.push({ from: 'You', text: msg, time: new Date().toLocaleTimeString() });
        localStorage.setItem('messages', JSON.stringify(messages));
        displayMessages();
        input.value = '';
    }
}

function displayMessages() {
    const chatDiv = document.getElementById('chatMessages');
    chatDiv.innerHTML = messages.map(m => `<p><strong>${m.from}:</strong> ${m.text} <small>${m.time}</small></p>`).join('');
}
displayMessages(); // Load on init

// Login Mock
document.getElementById('loginBtn').addEventListener('click', function() {
    alert('Mock Login: Welcome! You can now message and upload.');
    this.textContent = 'Dashboard';
});

// Upload Mock
document.getElementById('uploadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Upload successful! Mock earnings added: +$5 commission.');
    document.querySelector('.earnings h3').textContent = 'Your Earnings: $5.00';
});

// Search Mock
document.getElementById('searchInput').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const results = document.getElementById('searchResults');
    if (query) {
        results.innerHTML = '<div>Mock Result: JOI Scenario for "' + query + '"</div>';
    } else {
        results.innerHTML = '';
    }
});

// Auto-engage: Fade in on load
window.addEventListener('load', function() {
    document.querySelector('.hero').style.opacity = '1';
});
