import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './generateMarkdown.js';

// Array of questions
const questions = [
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: 'input',
    name: 'title',
    message: "What is your project's name?",
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please write a short description of your project:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What kind of license should your project have?',
    choices: ['MIT', 'GPL', 'Apache 2.0'],
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What command should be run to install dependencies?',
    default: 'npm install',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What command should be run to run tests?',
    default: 'npm test',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What does the user need to know about using the repo?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What does the user need to know about contributing to the repo?',
  },
];

// Function to generate HTML content
function generateHTML(data) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.title}</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            margin: 0;
            padding: 20px;
        }
        .container {
            background-color: #fff;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        header {
            background-color: #007bff;
            color: #ffffff;
            padding: 10px 20px;
            border-radius: 8px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        header h1 {
            margin: 0;
        }
        header span {
            background-color: #ffc107;
            padding: 5px 10px;
            border-radius: 5px;
        }
        section {
            padding: 10px 20px;
            border-radius: 8px;
            background-color: #e9ecef;
            margin-bottom: 10px;
        }
        a {
            color: #007bff;
        }
        ul {
            padding-left: 20px;
        }
    </style>
</head>
<body>
    <div class="container mt-5">
        <header>
            <h1>${data.title}</h1>
            <span>${data.license ? `${data.license}` : 'No License'}</span>
        </header>
        <section>
            <h2>Description</h2>
            <p>${data.description}</p>
        </section>
        <section id="installation">
            <h2>Installation</h2>
            <pre><code>${data.installation}</code></pre>
        </section>
        <section id="usage">
            <h2>Usage</h2>
            <pre><code>${data.usage}</code></pre>
        </section>
        <section id="license">
            <h2>License</h2>
            <p>${data.license ? `This project is licensed under the ${data.license} license.` : 'No license provided.'}</p>
        </section>
        <section id="contributing">
            <h2>Contributing</h2>
            <p>${data.contributing}</p>
        </section>
        <section id="tests">
            <h2>Tests</h2>
            <pre><code>${data.tests}</code></pre>
        </section>
        <section id="questions">
            <h2>Questions</h2>
            <p>If you have any questions, feel free to contact me:</p>
            <ul>
                <li>GitHub: <a href="https://github.com/${data.github}" target="_blank">${data.github}</a></li>
                <li>Email: <a href="mailto:${data.email}">${data.email}</a></li>
            </ul>
        </section>
    </div>
</body>
</html>
  `;
}

// Function to write README and HTML files
function writeToFile(fileName, markdownData, htmlData) {
  fs.writeFileSync(`${fileName}.md`, markdownData.trim(), 'utf8');
  fs.writeFileSync(`${fileName}.html`, htmlData.trim(), 'utf8');
}

// Initialize app
inquirer
  .prompt(questions)
  .then((answers) => {
    const markdownContent = generateMarkdown(answers);
    const htmlContent = generateHTML(answers);

    writeToFile('README', markdownContent, htmlContent);

    console.log('README.md and README.html generated successfully!');
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error("Prompt couldn't be rendered in the current environment.");
    } else {
      console.error('Something went wrong:', error);
    }
  });
