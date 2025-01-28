import { Route, Routes } from "react-router-dom";
import { Aboutme } from "./pages/Aboutme";
import { Contactme } from "./pages/Contactme";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { Projects } from "./pages/Projects";
import { Technologies } from "./pages/Technologies";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutme />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/contact" element={<Contactme />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
