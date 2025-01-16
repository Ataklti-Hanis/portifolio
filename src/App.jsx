import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Bio from "./components/Bio";

const App = () => {
  return (
    <div className="rlative h-full overflow-auto antialiased">
      <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div>
      <div className="relative z-10 flex flex-col items-center p-4 sace-y-8 container mx-auto">
        <Hero />
        <Navbar />
        <Projects />
        <Bio />
      </div>
    </div>
  );
};

export default App;
