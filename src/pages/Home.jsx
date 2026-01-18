import { Link } from "react-router-dom";
import lily from "../assets/lily.png";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center pt-24"
      style={{ backgroundColor: "#2b124c" }}
    >
      {/* Welcome */}
      <h1
        className="text-6xl font-bold italic text-[#dfb6b2] mb-20 tracking-widest"
        style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
      >
        Welcome
      </h1>

      <div className="flex items-center gap-24">
        {/* Left Lily */}
        <img src={lily} alt="Lily" className="w-56 opacity-90" />

        {/* Buttons */}
        <div className="flex flex-col gap-6">
          <Link
            to="/generator"
            className="px-10 py-3 text-lg text-center rounded-xl border
                       bg-[#dfb6b2] text-[#2b124c] border-[#1f0d38]
                       hover:bg-[#e7c9c6] transition tracking-wide"
            style={{
              fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
              fontWeight: 500,
            }}
          >
            String Generator
          </Link>

          <Link
            to="/translator"
            className="px-10 py-3 text-lg text-center rounded-xl border
                       bg-[#dfb6b2] text-[#2b124c] border-[#1f0d38]
                       hover:bg-[#e7c9c6] transition tracking-wide"
            style={{
              fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
              fontWeight: 500,
            }}
          >
            Translator
          </Link>
        </div>

        {/* Right Lily (mirrored) */}
        <img
          src={lily}
          alt="Lily"
          className="w-56 opacity-90 scale-x-[-1]"
        />
      </div>
    </div>
  );
}




