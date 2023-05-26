import React, { Fragment } from "react";
import Hero from "./components/HeroV2";
import About from "./components/About";
import Quote from "./components/Quote";
import TeamV2 from "./components/TeamV2";
import Nav from "./components/NavbarV2";
import Footer from "./components/Footer";
import Contact from "./components/ContactV2";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <Fragment>
      <Nav />
      <Hero />
      <Quote />
      <About />
      <Testimonial />
      <TeamV2 />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;
