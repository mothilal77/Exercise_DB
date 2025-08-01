
# 🏋️‍♂️ Fitness Exercise App

A responsive fitness web application built with **React.js** and **Material UI**, allowing users to explore over 1,000 exercises by muscle group or equipment, along with YouTube demo videos.

---

## 🔗 Live Demo & Repository

- GitHub: [https://github.com/mothilal77/Exercise_DB](https://github.com/mothilal77/Exercise_DB)

---

## 📁 Project Structure

```
exercise/
├── package-lock.json
├── README.md
├── .gitignore
├── eslint.config.js
├── index.html
├── vite.config.js
├── package.json
├── .env
├── public/
│   └── vite.svg
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── assets/
│   │   ├── react.svg
│   │   ├── icons/
│   │   │   ├── body-part.png
│   │   │   ├── equipment.png
│   │   │   ├── gym.png
│   │   │   ├── left-arrow.png
│   │   │   ├── right-arrow.png
│   │   │   ├── target.png
│   │   └── images/
│   │       ├── Logo-1.png
│   │       ├── banner.png
│   │       └── Logo.png
│   ├── utils/
│   │   └── fetchData.js
│   ├── pages/
│   │   ├── ExerciseDetail.jsx
│   │   └── Home.jsx
│   └── components/
        └── ...
```

---

## 📡 APIs Used

### 🔹 ExerciseDB API
- Provides data on 1000+ exercises.
- Search by body part, equipment, or target muscle.
- [https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb)

### 🔹 YouTube Search API
- Fetches related workout demo videos.
- Integrated for better user understanding and guidance.

---

## 🚀 Features

- Browse exercises by **body part**, **equipment**, or **target muscle**.
- View **demo videos** fetched dynamically from YouTube.
- **Clean UI** built with Material UI components.
- Fully **responsive** and **mobile-friendly** design.
- Optimized data fetching using `fetchData.js` utility.
- Modular code structure for components and pages.

---

## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mothilal77/Exercise_DB.git
   cd Exercise_DB
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up API keys:**
   - Create a `.env` file in the root directory.
   - Add your RapidAPI keys:
     ```env
     VITE_REACT_APP_RAPID_API_KEY=your_key_here
     ```

4. **Run the app locally:**
   ```bash
   npm run dev
   ```

---

## 👨‍💻 Developer

**Mothilal Lavudya**  
📧 lavudyamothilalchowhan@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/mothilal-lavudya-8934a2264)  
🐙 [GitHub](https://github.com/mothilal77)

---
