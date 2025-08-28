import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Tabs from "./components/Tabs";
import About from "./components/About";
import Resume from "./components/Resume";
import Works from "./components/Works";
import Contact from "./components/Contact";

export default function App() {
  const [active, setActive] = useState("about");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-blue-500 to-purple-300 p-4 md:p-6">

      {/* Sidebar (desktop) */}
      <aside className="hidden md:block w-fit">
        <Sidebar />
      </aside>

      {/* Mobile Hamburger Button (visible only when sidebar is closed) */}
      {!isSidebarOpen && (
        <div className="md:hidden fixed top-4 left-4 z-50">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-1.5 bg-white/80 backdrop-blur-md rounded-full shadow"
          >
            <i className="bx bx-menu text-xl"></i> {/* slightly smaller */}
          </button>
        </div>
      )}

      {/* Sidebar Drawer for Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setIsSidebarOpen(false)} // clicking outside closes
        >
          <aside
            className="fixed left-0 top-0 h-full w-64 bg-white/90 backdrop-blur-md shadow-lg z-50 p-4"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <Sidebar />
          </aside>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col relative pt-16 pb-16 md:pt-0 md:pb-0">

        {/* Desktop Tabs */}
        <div className="hidden md:block w-full mb-4">
          <Tabs active={active} setActive={setActive} />
        </div>

        {/* Main Content Area */}
        <main className="flex-1 bg-white/30 backdrop-blur-[30px] text-black font-poppins rounded-xl border border-white/20 shadow p-4 sm:p-6 w-full max-w-4xl md:mt-6 overflow-y-auto no-scrollbar mx-auto">
          {active === "about" && <About />}
          {active === "resume" && <Resume />}
          {active === "works" && <Works />}
          {active === "contact" && <Contact />}
        </main>

        {/* Spacer for mobile */}
        <div className="md:hidden h-16" />

        {/* Mobile Footer Tabs */}
        <div className="w-full md:hidden fixed bottom-0 left-0 z-50 h-16 bg-white/90 backdrop-blur-md shadow-lg border-t border-gray-200">
          <Tabs active={active} setActive={setActive} />
        </div>
      </div>
    </div>
  );
}
