const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

console.log('íº€ Starting AI Assistant Server...');
console.log('Port:', PORT);
console.log('Current directory:', __dirname);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// API Route
app.post('/api/chat', (req, res) => {
    const { message } = req.body;
    console.log('í³¨ Received:', message);

    let reply = "Hello! I'm your AI assistant. How can I help?";

    if (message.toLowerCase().includes('programming')) {
        reply = "I know JavaScript, Python, Node.js!";
    } else if (message.toLowerCase().includes('project')) {
        reply = "I've built web apps and AI projects!";
    } else if (message.toLowerCase().includes('experience')) {
        reply = "I have 2+ years of experience!";
    } else if (message.toLowerCase().includes('skill')) {
        reply = "My skills include coding and design!";
    } else if (message.toLowerCase().includes('contact')) {
        reply = "Reach me at email@example.com!";
    } else if (message.toLowerCase().includes('education')) {
        reply = "I have a Computer Science degree!";
    }

    res.json({ reply: reply, success: true });
});

// Serve frontend
app.get('/', (req, res) => {
    console.log('í³„ Serving index.html');
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Health check endpoint
app.get('/health', (req, res) => {
    console.log('â¤ï¸ Health check requested');
    res.json({ 
        status: 'healthy', 
        timestamp: new Date().toISOString(),
        node_version: process.version,
        port: PORT
    });
});

// Error handling
app.use((err, req, res, next) => {
    console.error('í²¥ Error:', err);
    res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log('âœ… Server running on port ' + PORT);
    console.log('âœ… AI Assistant is ready!');
}).on('error', (err) => {
    console.error('âŒ Server failed to start:', err);
});
