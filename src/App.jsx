import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Tabs from "./components/Tabs";
import About from "./components/About";
import Resume from "./components/Resume";
import Works from "./components/Works";
import Contact from "./components/Contact";

export default function App() {
  const [active, setActive] = useState("about");

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-blue-500 to-purple-300 p-4 md:p-6">
      <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto w-full">
        
        {/* Sidebar (desktop & tablets only) */}
        <aside className="hidden md:block w-fit">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center md:items-start relative">
          
          {/* Tabs (mobile bottom nav) */}
          <div className="w-full block md:hidden fixed bottom-0 left-0 z-50 bg-white/80 backdrop-blur-md shadow-lg border-t border-gray-200">
            <Tabs active={active} setActive={setActive} />
          </div>

          {/* Tabs (desktop top nav) */}
          <div className="hidden md:block w-full">
            <Tabs active={active} setActive={setActive} />
          </div>

          {/* Main Content Area */}
          <main className="bg-white/30 backdrop-blur-[30px] text-black font-poppins rounded-xl border border-white/20 shadow p-4 sm:p-6 w-full max-w-4xl mt-4 md:mt-6 overflow-y-auto h-[calc(100vh-6rem)] md:h-[calc(100vh-5rem)] no-scrollbar">
            {active === "about" && <About />}
            {active === "resume" && <Resume />}
            {active === "works" && <Works />}
            {active === "contact" && <Contact />}
          </main>
        </div>
      </div>
    </div>
  );
}
