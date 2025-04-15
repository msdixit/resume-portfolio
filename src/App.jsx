import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import  Header  from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ConnectMe from "./components/ConnectMe";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="bg-white text-gray-800 min-h-screen font-sans">
      <div className="max-w-5xl mx-auto p-4">
        <Header />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <ConnectMe/>
      </div>
    </div>
  );
}