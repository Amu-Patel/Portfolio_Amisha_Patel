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
    // bg-gradient-to-br from-blue-50 to-purple-100
    <div>
      <div className=" flex flex-col md:flex-row p-4 fixed top-5 left-10 h-screen"> 
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 flex flex-col items-center md:items-start md:ml-6 fixed top-10 left-[30%] right-2 ml-25 ">
        {/* Tabs */}
        <Tabs active={active} setActive={setActive} />

        {/* Main Content */}
        <main className="bg-primary text-secondary font-poppins rounded-xl shadow p-6 w-full max-w-3xl mt-11 h-[calc(100vh-5rem)] overflow-y-auto">
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
