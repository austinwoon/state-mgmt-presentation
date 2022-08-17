import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ColorSection from "./pages/ColorSection";
import { ContextStateModal } from "./pages/ContextStateModal";
import Page from "./pages/LocalStateModal";
import Playground from "./pages/Playground";
import Product from "./pages/Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/color" element={<ColorSection />} />
        <Route path="/" element={<Playground />} />
        <Route path="/local-modal" element={<Page />} />
        <Route path="/context-modal" element={<ContextStateModal />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
