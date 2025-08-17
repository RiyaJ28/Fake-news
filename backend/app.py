from flask import Flask, request, jsonify
import joblib
from flask_cors import CORS


# Load the saved vectorizer and model
vectorizer = joblib.load("./backend/tfidf_vectorizer.pkl")
model = joblib.load("./backend/fake_news_model.pkl")

# Initialize Flask app
app = Flask(__name__)
CORS(app) 

@app.route("/")
def home():
    return {"message": "Resume-JD Match Predictor API is running!"}

@app.route("/predict", methods=["POST"])
def predict():
    try:
        # Get JSON payload
        data = request.get_json()
        #print("Received data:", data)
        if not data or "news" not in data:
            return jsonify({"error": "No news text provided"}), 400

        text = data["news"]

        X = vectorizer.transform([text])
        prediction = model.predict(X)[0]

        label = "Fake" if prediction == 0 else "Real"

        return jsonify({
            "prediction": label
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True, host="127.0.0.1", port=5000)
