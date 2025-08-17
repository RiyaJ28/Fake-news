from flask import Flask, request, jsonify
import joblib
import re
import string

# Load model and vectorizer
model = joblib.load("fake_news_model.pkl")
vectorizer = joblib.load("tfidf_vectorizer.pkl")  # save this when training

app = Flask(__name__)

# --- Preprocessing function ---
def clean_text(text):
    text = text.lower()
    text = re.sub(f"[{string.punctuation}]", " ", text)  # remove punctuation
    text = re.sub(r"\s+", " ", text).strip()  # remove extra spaces
    return text

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()
        news = data.get("news", "")

        if not news.strip():
            return jsonify({"error": "No news text provided"}), 400

        # Preprocess
        cleaned = clean_text(news)

        # Transform with TF-IDF
        X = vectorizer.transform([cleaned])

        # Predict
        pred = model.predict(X)[0]
        label = "FAKE" if pred == 1 else "REAL"

        return jsonify({
            "prediction": int(pred),
            "label": label
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
