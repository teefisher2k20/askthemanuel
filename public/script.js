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
        
        // Clear previous content
        responseDiv.innerHTML = '';
        
        // Create elements safely to prevent XSS
        const heading = document.createElement('h3');
        heading.textContent = 'Response:';
        
        const questionPara = document.createElement('p');
        const questionStrong = document.createElement('strong');
        questionStrong.textContent = 'Your Question: ';
        questionPara.appendChild(questionStrong);
        questionPara.appendChild(document.createTextNode(data.question));
        
        const answerPara = document.createElement('p');
        const answerStrong = document.createElement('strong');
        answerStrong.textContent = 'Answer: ';
        answerPara.appendChild(answerStrong);
        answerPara.appendChild(document.createTextNode(data.answer));
        
        responseDiv.appendChild(heading);
        responseDiv.appendChild(questionPara);
        responseDiv.appendChild(answerPara);
        responseDiv.classList.add('show');
    } catch (error) {
        // Clear previous content
        responseDiv.innerHTML = '';
        
        const heading = document.createElement('h3');
        heading.textContent = 'Error:';
        
        const errorPara = document.createElement('p');
        errorPara.textContent = 'Failed to get a response. Please try again.';
        
        responseDiv.appendChild(heading);
        responseDiv.appendChild(errorPara);
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
