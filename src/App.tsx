import { BrowserRouter,Route, Routes } from "react-router";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Rank from "./pages/Rank";
import BottomNav from "./components/BottomNav";


export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground antialiased">
        <main className="pb-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post" element={<Post />} />
            <Route path="/rank" element={<Rank />} />
          </Routes>
        </main>

        {/* Menú fijo inferior */}
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}
