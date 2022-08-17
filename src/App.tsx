import { atom, useAtom } from "jotai";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ColorSection from "./pages/ColorSection";
import { ContextPage } from "./pages/ContextStateModal";
import Page from "./pages/LocalStateModal";
import Playground from "./pages/Playground";
import Product from "./pages/Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/color" element={<ColorSection title="color" />} />
        <Route path="/" element={<Playground title="playground" />} />
        <Route path="/local-modal" element={<Page title="Local modal" />} />
        <Route
          path="/context-modal"
          element={<ContextPage title="Context Modal" />}
        />
        <Route path="/product" element={<Product title="product" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
