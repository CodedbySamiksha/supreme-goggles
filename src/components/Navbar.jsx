import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass =
    "block px-4 py-3 rounded-xl text-[#dfb6b2] bg-[#3a1b66] hover:bg-[#4a2580] transition shadow-sm";

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-4 left-4 z-50 flex flex-col gap-1"
      >
        <span className="w-6 h-0.5 bg-[#dfb6b2]" />
        <span className="w-6 h-0.5 bg-[#dfb6b2]" />
        <span className="w-6 h-0.5 bg-[#dfb6b2]" />
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* Side menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#2b124c] shadow-xl p-6 z-50
        transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
         {/* Close button */}
  <button
    onClick={() => setOpen(false)}
    className="absolute top-4 right-4 text-[#dfb6b2] text-2xl hover:opacity-70 transition"
    aria-label="Close menu"
  >
    ×
    </button>
        {/* Menu title (TEXT ONLY, NO BOX) */}
        <div className="mb-8">
          <span className="text-[#dfb6b2] font-limelight text-2xl italic">
            Menu
          </span>
        </div>

        {/* Navigation links */}
        <nav className="flex flex-col gap-4">
          <NavLink to="/" className={linkClass} onClick={() => setOpen(false)}>
            Home
          </NavLink>

          <NavLink
            to="/generator"
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            String Generator
          </NavLink>

          <NavLink
            to="/translator"
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            Translator
          </NavLink>
        </nav>
      </div>
    </>
  );
}



