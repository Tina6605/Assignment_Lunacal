import React, { useState } from "react";

function AboutMe() {
  const [selectedTab, setSelectedTab] = useState("about");

  return (
    <div className="mb-8">
      {/* Tabs */}
      <div className="flex space-x-4 mb-4">
        <button
          className={`p-2 ${
            selectedTab === "about" ? "bg-gray-700" : ""
          } rounded-md`}
          onClick={() => setSelectedTab("about")}
        >
          About Me
        </button>
        <button
          className={`p-2 ${
            selectedTab === "experiences" ? "bg-gray-700" : ""
          } rounded-md`}
          onClick={() => setSelectedTab("experiences")}
        >
          Experiences
        </button>
        <button
          className={`p-2 ${
            selectedTab === "recommended" ? "bg-gray-700" : ""
          } rounded-md`}
          onClick={() => setSelectedTab("recommended")}
        >
          Recommended
        </button>
      </div>

      {/* Content */}
      <div className="bg-gray-800 p-4 rounded-md">
        {selectedTab === "about" && (
          <p>
            Hello! I'm Dave, your sales rep here from Salesforce. I've been
            working at this awesome company for 3 years now. I was born and
            raised in Albany, NY & have been living in Santa Carla for the past
            10 years with my wife Tiffany and my 4-year-old twin daughters—Emma
            and Ella. Both of them are just starting school, so my calendar is
            usually blocked between 9–10 AM. This is a...
          </p>
        )}
        {selectedTab === "experiences" && <p>Experience details go here...</p>}
        {selectedTab === "recommended" && (
          <p>Recommended items go here...</p>
        )}
      </div>
    </div>
  );
}

export default AboutMe;
