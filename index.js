const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/ask', (req, res) => {
  const { question } = req.body;
  
  // Validate input
  if (!question || typeof question !== 'string' || question.trim() === '') {
    return res.status(400).json({ 
      error: 'Invalid request. Question must be a non-empty string.' 
    });
  }
  
  // Simple echo response for now
  res.json({ 
    question: question,
    answer: `You asked: "${question}". This is a placeholder response.`
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Ask the Manuel app is running on http://localhost:${PORT}`);
});
