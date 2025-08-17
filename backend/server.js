// backend/index.ts
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { preprocessText } from "./utils/preprocess.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/predict", async (req, res) => {
  try {
    const { news } = req.body;
    if (!news) {
      return res.status(400).json({ error: "No news text provided" });
    }

    // 🔹 Preprocess the input text
    const processed = preprocessText(news);
    console.log("Preprocessed Text:", processed);

    // TODO: send `processed` into your ML model (Python API or ONNX model)
    // For now, just return preprocessed text for testing
    const fakeProbability = Math.random();
    const label = fakeProbability > 0.5 ? "Fake" : "Real";

    res.json({
      prediction: label,
      confidence: (fakeProbability * 100).toFixed(2) + "%",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
