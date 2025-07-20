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
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 to-purple-100 p-4 md:p-6">
      <div className="flex flex-col mb-6 md:flex-row gap-6 max-w-8xl mx-full">
        
        {/* Sidebar (visible on desktop only) */}
        <Sidebar />

        <div className="flex-1 flex flex-col items-center md:items-start relative">
          
          {/* Tabs */}
          <div className="w-full block md:hidden fixed bottom-0 left-0 z-50 bg-white shadow-lg border-t border-gray-200">
            <Tabs active={active} setActive={setActive} />
          </div>

          <div className=" hidden md:block">
            <Tabs active={active} setActive={setActive} />
          </div>

          {/* Main Content Area */}
          <main className="bg-primary text-secondary font-poppins rounded-xl shadow p-6 w-full max-w-4xl mt-6 overflow-y-auto h-[calc(100vh-6rem)] md:h-[calc(100vh-5rem)] no-scrollbar">
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
