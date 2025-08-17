"use client";

import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [news, setNews] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ prediction: string; confidence: string } | null>(null);

  const handleSubmit = async () => {
    if (!news.trim()) return;
    setLoading(true);
    setResult(null);

    try {
      const res = await axios.post("http://127.0.0.1:5000/predict", { news }); // Flask endpoint
      setResult(res.data);
    } catch (err) {
      console.error(err);
      alert("⚠️ Error connecting to Flask backend. Make sure Flask is running on port 5000.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-xl rounded-2xl bg-white shadow-md p-6 space-y-4">
        <h1 className="text-2xl font-bold text-center text-gray-800">📰 Fake News Detector</h1>
        <textarea
          value={news}
          onChange={(e) => setNews(e.target.value)}
          placeholder="Paste news content here..."
          className="w-full h-40 border border-gray-300 rounded-xl p-3 
             focus:outline-none focus:ring-2 focus:ring-blue-500 
             bg-white text-gray-800 placeholder-gray-400"
          rows={6}
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? "Analyzing..." : "Check News"}
        </button>

        {result && (
          <div className="mt-4 p-4 rounded-xl border bg-gray-50">
            <p className="text-lg font-semibold text-gray-600">
              Prediction:{" "}
              <span
                className={
                  result.prediction === "Fake" ? "text-red-600" : "text-green-600"
                }
              >
                {result.prediction}
              </span>
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
