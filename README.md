# Password Security Analyzer

A hybrid application using JavaScript for instant frontend visual feedback and a Python backend to cross-reference inputs against databases of common or compromised passwords. Strength analysis happens client-side in real time — leak detection runs server-side through a Flask API.

---

## How It Works

As you type, the frontend evaluates your password against three criteria and updates a color-coded strength bar instantly. On submission, the input is sent to the Python backend, which checks it against a list of known common and compromised passwords and returns a vulnerability verdict.

| Stage | Layer | Responsibility |
|-------|-------|----------------|
| Strength Analysis | JavaScript (Frontend) | Real-time criteria validation and visual feedback |
| Leak Detection | Python + Flask (Backend) | Cross-referencing against compromised password lists |

---

## Built With

| Technology | Role |
|------------|------|
| HTML5 | Analyzer UI and input structure |
| CSS3 | Dark theme, strength meter, and criteria list styling |
| JavaScript | Real-time input validation and strength scoring |
| Python | Backend API logic and password leak detection |
| Flask | REST endpoint serving the leak-check response |

---

## Project Structure

```
/
├── index.html        # Analyzer interface and input markup
├── style.css         # Dark UI, strength bar, and valid/invalid state styles
├── script.js         # Criteria validation, strength scoring, and bar rendering
└── app.py            # Flask backend with /check-leak POST endpoint
```

---

## Getting Started

**1. Install dependencies**
```bash
pip install flask
```

**2. Start the backend**
```bash
python app.py
```

**3. Open the frontend**

Open `index.html` in your browser. The Flask server runs on `http://127.0.0.1:5000` by default.

---

## Strength Criteria

| Criteria | Points |
|----------|--------|
| Minimum 8 characters | 33% |
| Contains numbers | 33% |
| Contains special characters (`!@#$...`) | 34% |

The strength bar transitions from red to yellow to green as criteria are met.

---

## API Reference

**`POST /check-leak`**

Request body:
```json
{ "password": "your-password-here" }
```

Response:
```json
{ "status": "Vulnerável", "message": "Esta senha é muito comum!" }
{ "status": "Seguro",     "message": "Nenhum vazamento detectado." }
```
