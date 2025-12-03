# askthemanuel

A simple web application for asking questions about a manual.

## Features

- Clean and modern user interface
- Question submission form
- API endpoint for handling questions
- Express.js backend
- Static file serving

## Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/teefisher2k20/askthemanuel.git
cd askthemanuel
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

Start the server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Development with VS Code

This project includes VS Code configuration files for easy development:

1. Open the project in VS Code
2. Press `F5` or go to Run → Start Debugging
3. Select "Launch Program" or "Launch via npm" from the debug configurations

## Project Structure

```
askthemanuel/
├── index.js           # Main server file
├── package.json       # Project dependencies
├── public/            # Static files
│   ├── index.html     # Main HTML page
│   ├── style.css      # Styles
│   └── script.js      # Client-side JavaScript
└── .vscode/           # VS Code configuration
    ├── launch.json    # Debug configuration
    └── settings.json  # Editor settings
```

## API Endpoints

- `GET /` - Serves the main application page
- `POST /ask` - Accepts questions and returns responses
  - Request body: `{ "question": "your question here" }`
  - Response: `{ "question": "...", "answer": "..." }`

## License

ISC