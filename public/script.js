async function askQuestion() {
    const questionInput = document.getElementById('question');
    const responseDiv = document.getElementById('response');
    const question = questionInput.value.trim();

    if (!question) {
        alert('Please enter a question!');
        return;
    }

    try {
        const response = await fetch('/ask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ question }),
        });

        const data = await response.json();
        
        responseDiv.innerHTML = `
            <h3>Response:</h3>
            <p><strong>Your Question:</strong> ${data.question}</p>
            <p><strong>Answer:</strong> ${data.answer}</p>
        `;
        responseDiv.classList.add('show');
    } catch (error) {
        responseDiv.innerHTML = `
            <h3>Error:</h3>
            <p>Failed to get a response. Please try again.</p>
        `;
        responseDiv.classList.add('show');
    }
}

// Allow Enter key to submit (with Shift+Enter for new line)
document.getElementById('question').addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        askQuestion();
    }
});
