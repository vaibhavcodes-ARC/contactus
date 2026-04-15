import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home Page</h1>} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;