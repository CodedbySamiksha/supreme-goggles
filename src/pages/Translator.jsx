import { useState } from "react";

export default function Translator() {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [fromLang, setFromLang] = useState("en");
  const [toLang, setToLang] = useState("hi");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleTranslate() {
    if (!inputText.trim()) {
      setError("Please enter text to translate.");
      return;
    }

    setLoading(true);
    setError("");
    setTranslatedText("");

    try {
      const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
          inputText
        )}&langpair=${fromLang}|${toLang}`
      );

      if (!response.ok) {
        throw new Error("API error");
      }

      const data = await response.json();
      setTranslatedText(data.responseData.translatedText);
    } catch (err) {
      setError("Translation failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-[#2b124c] text-[#dfb6b2] px-6">
      <h2 className="text-3xl font-semibold">Translator</h2>

      {/* Language selectors */}
      <div className="flex gap-4">
        <select
          value={fromLang}
          onChange={(e) => setFromLang(e.target.value)}
          className="px-3 py-2 rounded bg-[#dfb6b2] text-[#2b124c]"
        >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
        </select>

        <span className="text-xl">→</span>

        <select
          value={toLang}
          onChange={(e) => setToLang(e.target.value)}
          className="px-3 py-2 rounded bg-[#dfb6b2] text-[#2b124c]"
        >
          <option value="hi">Hindi</option>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
        </select>
      </div>

      {/* Input */}
      <textarea
        rows="4"
        placeholder="Enter text here..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="
          w-full max-w-md p-3 rounded
          bg-[#dfb6b2] text-[#2b124c]
          placeholder-[#2b124c]/70
          border border-[#1f0d38]
          focus:outline-none focus:ring-2 focus:ring-[#e7c9c6]
        "
      />

      {/* Translate button */}
      <button
        onClick={handleTranslate}
        disabled={loading}
        className="px-8 py-3 rounded-lg bg-[#dfb6b2] text-[#2b124c]
                   hover:bg-[#e7c9c6] transition disabled:opacity-60"
      >
        {loading ? "Translating..." : "Translate"}
      </button>

      {/* Error */}
      {error && <div className="text-red-300 text-sm">{error}</div>}

      {/* Output */}
      {translatedText && (
        <div className="mt-4 p-4 border border-[#dfb6b2] rounded max-w-md text-center">
          {translatedText}
        </div>
      )}
    </div>
  );
}



