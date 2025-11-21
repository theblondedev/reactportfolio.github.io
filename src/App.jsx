import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";

function App() {
  // Generate floating React logos
  const logos = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 90 + 5}%`,
    top: `${Math.random() * 120 + 60}%`, // start below hero
    delay: `${Math.random() * 6}s`,
    size: `${Math.random() * 2 + 2}rem`,
    rotation: `${Math.random() * 360}deg`,
  }));

  return (
    <>
      <Toaster />

      <div className="relative min-h-screen overflow-hidden bg-background">

        {/* Floating React logo layer */}
        <div className="pointer-events-none fixed inset-0 z-[-1] opacity-20">
          {logos.map((logo) => (
            <img
              key={logo.id}
              src="/projects/icons8-react-native-50.png"
              alt="react logo"
              className="react-logo"
              style={{
                left: logo.left,
                top: logo.top,
                width: logo.size,
                height: logo.size,
                animationDelay: logo.delay,
                transform: `rotate(${logo.rotation})`,
                position: "absolute",
              }}
            />
          ))}
        </div>

        {/* React Router */}
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>

      </div>
    </>
  );
}

export default App;
