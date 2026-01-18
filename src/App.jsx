import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Generator from "./pages/Generator";
import Translator from "./pages/Translator";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generator" element={<Generator />} />
        <Route path="/translator" element={<Translator />} />
      </Routes>
    </BrowserRouter>
  );
}



