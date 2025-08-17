# 📰 Fake News Detection App

A supervised Machine Learning project that predicts whether a given news article is **Fake** or **Real**.  
Built with **Next.js (TypeScript)**, **TailwindCSS**, and a **Node.js + Python (ML model) backend**.  

---

## ⚡ Features
- 🔹 Detects **Fake vs Real** news in real-time.  
- 🔹 Clean and modern **Next.js frontend** with TailwindCSS.  
- 🔹 **Preprocessing pipeline** (lowercasing, punctuation removal, stopword removal, stemming).  
- 🔹 Trained ML models: **Random Forest, SVM, KNN** (compared for performance).  
- 🔹 Confidence score (%) for predictions.  
- 🔹 REST API for predictions (`/predict`).  

---

## 🛠️ Tech Stack
### Frontend
- [Next.js (TypeScript)](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)

### Backend
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Python + scikit-learn](https://scikit-learn.org/) for ML model training  

### ML/NLP
- Text Normalization (lowercasing, punctuation removal)
- Tokenization & Stopword Removal
- Stemming (Porter Stemmer)
- TF-IDF Vectorization
- RandomForest, SVM, KNN Classifiers

---

## 📊 Model Performance Comparison

| Model                        | Accuracy   | Precision (Class 0 / Class 1) | Recall (Class 0 / Class 1) | F1-Score (Avg) | Notes                         |
| ---------------------------- | ---------- | ----------------------------- | -------------------------- | -------------- | ----------------------------- |
| Logistic Regression          | 0.8310     | 0.83 / 0.83                   | 0.85 / 0.81                | 0.83           | Stable & consistent           |
| SVM (LinearSVC)              | 0.8227     | 0.82 / 0.82                   | 0.84 / 0.81                | 0.82           | Computationally expensive     |
| KNN                          | 0.5817     | 0.64 / 0.55                   | 0.42 / 0.75                | 0.57           | Performs poorly, not suitable |
| Random Forest                | 0.8212     | 0.81 / 0.84                   | 0.86 / 0.78                | 0.82           | Good balance, interpretable   |
| **Ensemble (LR + SVM + RF)** | **0.8322** | 0.83 / 0.84                   | 0.85 / 0.81                | 0.83           | ✅ Best performing             |

The best model was an ensemble (Logistic Regression + SVM + Random Forest) achieving an accuracy of 83.2%, outperforming individual models.  

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/fake-news-detection.git
cd fake-news-detection
````

### 2. Install dependencies

Frontend:

```bash
cd frontend
npm install
npm run dev
```

Backend:

```bash
cd backend
npm install
npm run dev
```

### 3. Start ML API (Python)

```bash
cd ml-model
pip install -r requirements.txt
python app.py
```

---

## 📊 Model Training

* Dataset: [Fake News Dataset](https://www.kaggle.com/c/fake-news/data)
* Models trained:

  * Random Forest
  * SVM
  * KNN
* Vectorization: **TF-IDF**
* Evaluation Metrics: **Accuracy, Precision, Recall, F1-score**

📈 *Add your final accuracy and performance table here*

---

## 🎯 Usage

1. Open the frontend app.
2. Paste or type any news article text.
3. Get instant prediction with **label (Fake/Real)** and **confidence score**.

---

## 🌐 Live Demo

👉 \[Add your deployed app link here]

---

## 📸 Screenshots

*(Add UI screenshots here after deployment)*

---

## 📂 Project Structure

```
fake-news-detection/
│── frontend/        # Next.js + Tailwind frontend
│── backend/         # Node.js Express API
│── ml-model/        # Python scikit-learn model + Flask API
│── utils/           # Preprocessing utilities
│── README.md
```

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you’d like to change.

---

## 📜 License

This project is licensed under the MIT License.

---

