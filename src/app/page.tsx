import React from "react";
import MainHeader from "./components/MainHeader";
import About from "./components/About";
import Contact from "./components/Contact";
import SocialLinks from "./components/SocialLinks";

const App = () => {
  return (
    <div className="mx-auto container flex flex-col px-32 my-10">
      <div className="flex flex-col gap-10">
        <MainHeader />
        <About />
        <div className="flex flex-col gap-4">
          <Contact />
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default App;
