import { useState } from "react";

export default function Generator() {
  const [generatedString, setGeneratedString] = useState("");
  const [length, setLength] = useState(10);
  const [copied, setCopied] = useState(false);

  function generateString() {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }

    setGeneratedString(result);
    setCopied(false);
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(generatedString);
    setCopied(true);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-[#2b124c] text-[#dfb6b2]">
      <h2 className="text-3xl font-semibold">String Generator</h2>

      {/* Length control */}
      <div className="flex flex-col items-center gap-2">
        <label className="text-sm">Length: {length}</label>
        <input
          type="range"
          min="5"
          max="25"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="w-48"
        />
      </div>

      {/* Generate button */}
      <button
        onClick={generateString}
        className="px-8 py-3 rounded-lg bg-[#dfb6b2] text-[#2b124c] font-medium hover:bg-[#e7c9c6] transition"
      >
        Generate
      </button>

      {/* Output */}
      {generatedString && (
        <div className="flex flex-col items-center gap-3 mt-4">
          <div className="px-6 py-3 border border-[#dfb6b2] rounded-lg text-lg tracking-wider">
            {generatedString}
          </div>

          <button
            onClick={copyToClipboard}
            className="text-sm underline hover:opacity-80"
          >
            {copied ? "Copied!" : "Copy to clipboard"}
          </button>
        </div>
      )}
    </div>
  );
}


