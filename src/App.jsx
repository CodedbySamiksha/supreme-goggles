import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Generator from "./pages/Generator";
import Translator from "./pages/Translator";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generator" element={<Generator />} />
        <Route path="/translator" element={<Translator />} />
      </Routes>
    </>
  );
}

export default App;




