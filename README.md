# AI-Powered Resume Analyzer (MERN Stack)

[![Repo](https://img.shields.io/badge/GitHub-Repo-blue)](https://github.com/pushapraina123/Resume_Analyzer)

## Project Overview
The AI-Powered Resume Analyzer is a full-stack web application that allows users to upload their resumes (PDFs) along with Job Description and receive **instant AI-based scoring and personalized feedback**. The system leverages **Cohere AI embeddings** to evaluate keyword relevance, semantic similarity, and overall alignment with a provided job description. 

This tool helps job seekers understand how well their resumes match target roles and provides actionable insights to improve them.

---

## Features
- **PDF Upload:** Users can upload resumes in PDF format.  
- **Instant Scoring:** Backend parses the resume and evaluates it against a provided job description using a fixed prompt with Cohere AI.  
- **Personalized Feedback:** Generates a match score (0–100) along with brief recommendations for improvement.  
- **Resume History:** Tracks uploaded resumes, scores, and feedback for each user.  
- **Frontend Dashboard:** Displays scores and feedback in a clear, user-friendly interface.

---

## Tech Stack
- **Frontend:** React.js  
- **Backend:** Node.js, Express  
- **Database:** MongoDB  
- **AI/NLP:** Cohere AI (for embeddings and resume scoring)  
- **File Handling:** PDF parsing with `pdf-parse`  
- **Deployment:** (Optional) Can be deployed on AWS or any cloud hosting platform

---

## How It Works
1. User uploads a resume (PDF) through the frontend.  
2. Backend parses the PDF to extract text.  
3. The extracted text is combined with the provided job description using a fixed backend prompt.  
4. Cohere AI evaluates the resume for **keyword relevance**, **semantic similarity**, and provides a **match score with feedback**.  
5. Score and feedback are saved in MongoDB and returned to the frontend dashboard.  

---


---

✅ Key points:
- `.env` is used to securely store credentials.
- Users can change `MONGO_URI` anytime to point to their own database.
- Also get `COHERE_API_KEY` for Cohere AI access.

---


## Installation
```bash
# Clone the repository
git clone https://github.com/pushapraina123/ResuFit.git

# Navigate to backend
cd backend
npm install
npm start

# Navigate to frontend
cd frontend
npm install
npm run dev
