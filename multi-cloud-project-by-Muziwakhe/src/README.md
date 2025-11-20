# AI Portfolio Assistant

## Project Overview

The **AI Portfolio Assistant** is a web-based tool that helps users automatically generate professional materials such as *personal bios* and *“About Me”* sections. The project demonstrates our ability to apply Agile project management (Kanban), use Git and GitHub for collaboration, and integrate a Generative AI API using JavaScript.

This project was completed as part of **Week 1 of the Fullstack Developer Program**, focusing on the following courses:

* **Version Control with Git** – Atlassian
* **Agile with Atlassian Jira** – Atlassian
* **Introduction to Generative AI** – Google Cloud
* **ChatGPT Prompt Engineering for Developers** – DeepLearning.AI

---

## Features

* Generate a professional bio or “About Me” section automatically.
* Choose tone (Formal, Friendly, or Neutral) to personalize the text.
* Responsive and simple user interface built with HTML, CSS, and JavaScript.
* Backend built with Node.js and Express to handle AI API calls securely.
* API key stored in environment variables (not exposed on the frontend).
* Easy deployment setup for future hosting on Render or Railway.

---

## Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript (Vanilla)

### Backend

* Node.js
* Express.js
* dotenv (for environment variables)
* Fetch or Axios (for API calls)

---

## Installation & Setup

Follow the steps below to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ai-portfolio-assistant.git
cd ai-portfolio-assistant
```

### 2. Install Dependencies (Backend)

```bash
cd backend
npm install
```

### 3. Create an `.env` File

Inside the `backend` folder, create a file named `.env` and add your API key:

```bash
API_KEY=your_openai_or_gemini_api_key_here
PORT=5000
```

### 4. Start the Backend Server

```bash
node server.js
```

You should see:

```
Server running on http://localhost:5000
```

### 5. Open the Frontend

Open the `index.html` file in your browser or use Live Server in VS Code.

Ensure that your frontend fetches from:

```
http://localhost:5000/generate-bio
```

---

## Project Structure

```
ai-portfolio-assistant/
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── .env
│   └── README.md
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── .gitignore
├── README.md
└── LICENSE
```

---

## 💡 How It Works

1. The user enters their **name**, **skills**, and **career goals** in the frontend form.
2. The frontend sends this data to the **backend API** using a POST request.
3. The backend formats the prompt and calls the **Generative AI API** (Gemini).
4. The AI’s response (a professional bio paragraph) is returned and displayed on the frontend.

---

## Example Prompt

```
Generate a professional “About Me” section for a software developer named Katleho who is passionate about AI, technology, and creativity. Use a friendly and professional tone.
```

**Example Output:**

> Hi, I’m John — a passionate developer who loves blending creativity and technology to build meaningful solutions. I’m fascinated by the potential of AI to empower people and make digital experiences smarter.

---

## Team Members & Roles

| Name     | Role                  | Responsibilities                            |
| -------- | --------------------- | ------------------------------------------- |

| Katleho  | Documentation & Project Management| project structure setup, documentation, coordinating merges & Testing|

| Muzi   | Frontend     | HTML/CSS layout, JavaScript form handling, Styling, responsiveness, UI components   |

| Celimpilo | Backend      | Node.js setup, API integration, deployment  |


---

## Kanban Workflow Summary

We managed the project using a **Kanban board** in Github:

* **Columns:** Backlog → To Do → In Progress → In Review → Done
* **WIP Limits:** In Progress (3), In Review (2)
* **Daily Workflow:** Cards moved across stages as tasks progressed.
* **Blockers:** Backend deployment link inaccessible due to localhost hosting — fix in progress.

---

## Known Issues

* Backend currently runs only locally — deployment pending.
* API rate limit restrictions may apply for free API keys.

---

## Future Improvements

* Deploy fullstack app on Render or Railway.
* Add user authentication and portfolio saving feature.
* Extend functionality to generate resumes or cover letters.
* Improve prompt templates for more dynamic outputs.


## Lessons Learned

* Practical understanding of **Agile with Kanban**.
* Hands-on use of **GitHub collaboration and branching**.
* Experience in **fetching AI API responses** using JavaScript.
* Importance of **CORS configuration** and **environment variable security**.

---

## Submission Package Includes

* README.md (this file)
* Sprint Planning / Agile Kanban Document
* Trello Board Screenshots
* GitHub Repository Link
* Deployed App (if available)
* Demo GIF or Screenshots

---

## License

This project is licensed under the MIT License 

---

**Created by INNIT!
