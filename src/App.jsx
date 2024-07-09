import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Programs from "./Components/Programs";
import Title from "./Components/Title";
import About from "./Components/About";
import Campus from "./Components/Campus";
import Testimonials from "./Components/Testimonials";
import Contact from "./Contact";
import Footer from "./Components/Footer";
import VideoPlayer from "./Components/VideoPlayer";

const App = () => {
  const [playState, setPlayState] = useState(false);
  return (
    <>
      <Navbar />
      <Hero />
      <div className="containers">
        <Title subtitle="OUR PROGRAM" title="WHAT WE OFFER" />
        <Programs />
        <About setPlayState={setPlayState}/>
        <Title subtitle="Gallery" title="Campus photos" />
        <Campus />
        <Title subtitle="TESTIMONIALS" title="What Student Says" />
        <Testimonials />
        <Title subtitle="CONTACT US" title="Get in Touch" />
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </>
  );
};

export default App;
