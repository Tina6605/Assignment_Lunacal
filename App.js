import React from "react";
import AboutMe from "./components/AboutMe";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="flex flex-row h-screen bg-gray-900 text-white">
      {/* Left side empty */}
      <div className="w-1/2 hidden md:block"></div>

      {/* Right side with content */}
      <div className="w-full md:w-1/2 p-8">
        <AboutMe />
        <Gallery />
      </div>
    </div>
  );
}

export default App;
