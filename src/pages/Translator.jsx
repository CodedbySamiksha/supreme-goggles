import { useState } from "react";

export default function Translator() {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [fromLang, setFromLang] = useState("en");
  const [toLang, setToLang] = useState("hi");
  const [loading, setLoading] = useState(false);

  const handleTranslate = async () => {
    if (!text.trim()) return;

    setLoading(true);
    setTranslatedText("");

    try {
      const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
          text
        )}&langpair=${fromLang}|${toLang}`
      );
      const data = await response.json();
      setTranslatedText(data.responseData.translatedText);
    } catch {
      setTranslatedText("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#2b124c] flex justify-center items-start pt-52 px-6">
      {/* OUTER CARD — LOWERED MORE */}
      <div className="w-full max-w-2xl bg-[#3a1b66] rounded-lg shadow-md px-8 py-7 text-[#dfb6b2]">
        <h2 className="text-4xl font-semibold mb-8 text-center">
          Translator
        </h2>

        {/* LANGUAGE BLOCK */}
        <div className="flex items-center justify-center gap-5 mb-6">
          <select
            value={fromLang}
            onChange={(e) => setFromLang(e.target.value)}
            className="px-2.5 py-1.5 text-sm rounded bg-[#dfb6b2]/90 text-[#2b124c]/80 focus:outline-none"
          >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
            <option value="ml">Malayalam</option>
          </select>

          <span className="text-xl opacity-70">→</span>

          <select
            value={toLang}
            onChange={(e) => setToLang(e.target.value)}
            className="px-2.5 py-1.5 text-sm rounded bg-[#dfb6b2]/90 text-[#2b124c]/80 focus:outline-none"
          >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
            <option value="ml">Malayalam</option>
          </select>
        </div>

        {/* INPUT BLOCK */}
        <div className="mx-auto w-full max-w-lg">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={3}
            placeholder="Enter text to translate..."
            className="w-full rounded p-2.5 mb-4 bg-[#dfb6b2]/20 text-[#dfb6b2] text-sm placeholder:text-[#dfb6b2]/50 focus:outline-none"
          />
        </div>

        {/* BUTTON */}
        <div className="mx-auto w-full max-w-lg">
          <button
            onClick={handleTranslate}
            disabled={loading}
            className="w-full bg-[#dfb6b2] text-[#2b124c] py-1.5 rounded-lg text-sm font-medium hover:opacity-90 transition disabled:opacity-60"
          >
            {loading ? "Translating..." : "Translate"}
          </button>
        </div>

        {/* OUTPUT BLOCK */}
        <div className="mx-auto w-full max-w-lg mt-4">
          <div className="min-h-[60px] rounded bg-[#dfb6b2]/20 p-2.5 text-sm text-[#dfb6b2]">
            {translatedText ? (
              translatedText
            ) : (
              <span className="italic opacity-60">
                Translated text will appear here
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}











