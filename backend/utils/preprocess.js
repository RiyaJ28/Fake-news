// utils/preprocess.js
import natural from "natural";
import sw from "stopword";

// Tokenizer
const tokenizer = new natural.WordTokenizer();

export function preprocessText(text) {
  // 1. Lowercase
  let cleaned = text.toLowerCase();

  // 2. Remove punctuation & special characters
  cleaned = cleaned.replace(/[^a-zA-Z\s]/g, "");

  // 3. Tokenize
  let tokens = tokenizer.tokenize(cleaned);

  // 4. Remove stopwords
  tokens = sw.removeStopwords(tokens);

  // 5. Stemming (optional but helpful)
  tokens = tokens.map((t) => natural.PorterStemmer.stem(t));

  // Join back into single string
  return tokens.join(" ");
}
