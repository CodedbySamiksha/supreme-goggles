# Slab 1 Frontend Project

A React-based frontend application developed as part of the Slab 1 requirement for the internship at Qskill.
This project focuses on clean UI design, React fundamentals, and real-world API integration.

---

## ✨ Features

### 🧵 String Generator
- Generates random alphanumeric strings
- User can control the length of the string
- Copy-to-clipboard functionality
- Built using React hooks (`useState`)

### 🌍 Translator
- Translates text between multiple languages
- Supports language selection (English, Hindi,       French, Spanish, Malayalam)
- Uses a real-world public translation API
- Handles loading states and API errors gracefully
- Built using async/await and fetch

---

## 🛠️ Tech Stack

- React (Vite)
- Tailwind CSS
- JavaScript (ES6+)
- MyMemory Translation API

---

## 🚀 The Process


### 1.Clone the repository

git clone : https://github.com/CodedbySamiksha/supreme-goggles

### 2.Install dependencies:
npm install

### 3.Run the project:
npm run dev

## 🌐 Translation API Used

This project uses the **MyMemory Translation API** for text translation.

API Endpoint:
https://api.mymemory.translated.net/

The API was chosen because it is free, browser-friendly, and does not require an API key.

## How it works:

- The user enters text and selects source and target languages
- A fetch request is sent with query parameters (q and langpair)
- The translated text is retrieved from responseData.translatedText
- No API key is required

#### The app runs locally on:

[http://localhost:5173](http://localhost:5173)


### 📚 What I Learned

- React component structure and routing
- State management using hooks (`useState`)
- Handling asynchronous API calls with `fetch`
- Implementing loading and error states
- Debugging common frontend issues (CORS, API failures, syntax errors)
- Improving UI/UX using Tailwind CSS
- Writing clean and readable project documentation using Markdown

### 👩‍💻 Author

Sameeksha

### 📌 Notes

This project was built for learning purposes.

## 📸 Screenshots

### Home Page
![Home Page](./screenshots/home.png)

### String Generator
![String Generator](./screenshots/string-generator.png)

### Translator
![Translator](./screenshots/translator.png)




