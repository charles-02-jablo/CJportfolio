import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import { StarBackground } from "@/components/StarBackground"; 

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        {/* ✅ Star background sits behind everything */}
        <StarBackground />

        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
