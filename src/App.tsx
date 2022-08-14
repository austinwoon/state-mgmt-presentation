import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ColorSection from "./Pages/ColorSection";
import { ContextStateModal } from "./Pages/ContextStateModal";
import LocalStateModalPage from "./Pages/LocalStateModal";
import Playground from "./Pages/Playground";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/color" element={<ColorSection />} />
        <Route path="/" element={<Playground />} />
        <Route path="/local-modal" element={<LocalStateModalPage />} />
        <Route path="/context-modal" element={<ContextStateModal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
