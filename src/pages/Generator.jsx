import { useState } from "react";

export default function Generator() {
  const [length, setLength] = useState(1);
  const [count, setCount] = useState(1);
  const [results, setResults] = useState([]);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const generateStrings = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const generated = [];

    for (let i = 0; i < count; i++) {
      let str = "";
      for (let j = 0; j < length; j++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      generated.push(str);
    }

    setResults(generated);
    setCopiedIndex(null);
  };

  const handleCopy = async (text, index) => {
    await navigator.clipboard.writeText(text);
    setCopiedIndex(index);

    setTimeout(() => {
      setCopiedIndex(null);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#2b124c] flex justify-center items-start pt-52 px-6">
      {/* CARD — SAME AS TRANSLATOR */}
      <div className="w-full max-w-2xl bg-[#3a1b66] rounded-lg shadow-md px-8 py-7 text-[#dfb6b2]">
        <h2 className="text-4xl font-semibold mb-8 text-center">
          String Generator
        </h2>

        {/* SLIDER */}
        <div className="mx-auto w-full max-w-md mb-6">
          <label className="block text-sm mb-2 text-center">
            String Length: <span className="font-medium">{length}</span>
          </label>
          <input
            type="range"
            min={1}
            max={50}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full accent-[#dfb6b2]"
          />
        </div>

        {/* COUNT */}
        <div className="mx-auto w-full max-w-md mb-7 flex justify-center items-center gap-3">
          <label className="text-sm">Count</label>
          <input
            type="number"
            min={1}
            max={10}
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            className="w-20 px-2 py-1.5 rounded bg-[#dfb6b2]/90 text-[#2b124c]/80 text-sm focus:outline-none"
          />
        </div>

        {/* BUTTON */}
        <div className="mx-auto w-full max-w-md">
          <button
            onClick={generateStrings}
            className="w-full bg-[#dfb6b2] text-[#2b124c] py-1.5 rounded-lg text-sm font-medium hover:opacity-90 transition"
          >
            Generate
          </button>
        </div>

        {/* OUTPUT WITH COPY */}
        <div className="mx-auto w-full max-w-md mt-6 space-y-3">
          {results.length > 0 ? (
            results.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between gap-3 rounded bg-[#dfb6b2]/20 p-2.5 text-sm break-all"
              >
                <span>{item}</span>

                <button
                  onClick={() => handleCopy(item, index)}
                  className="text-xs px-2 py-1 rounded bg-[#dfb6b2] text-[#2b124c] hover:opacity-90 transition shrink-0"
                >
                  {copiedIndex === index ? "Copied!" : "Copy"}
                </button>
              </div>
            ))
          ) : (
            <div className="rounded bg-[#dfb6b2]/20 p-2.5 text-sm italic opacity-60 text-center">
              Generated strings will appear here
            </div>
          )}
        </div>
      </div>
    </div>
  );
}



