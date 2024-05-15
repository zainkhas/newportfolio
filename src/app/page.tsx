import React from "react";
import MainHeader from "./components/MainHeader";
import About from "./components/About";
import Contact from "./components/Contact";
import SocialLinks from "./components/SocialLinks";
import Container from "./components/Container";

const App = () => {
  return (
    <Container>
      <div className="flex flex-col gap-10">
        <MainHeader />
        <About />
        <div className="flex flex-col gap-4" id="contact">
          <Contact />
          <SocialLinks />
        </div>
      </div>
    </Container>
  );
};

export default App;
