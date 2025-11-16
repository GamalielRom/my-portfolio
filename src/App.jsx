import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Hero from "./components/Hero";
import About from "./components/about";
import Contact from "./components/Contact";
export default function App() {
  return (
    
    <div className="bg-gray-900 text-white w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Project/>
      <About/>
      <Contact />
    </div>
  );
}