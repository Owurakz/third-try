import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/carousel";
import About from "./components/About";
import PizzaTypes from "./components/Pizzatypes";
import Footer from "./components/footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Carousel />
        <About />
        <PizzaTypes />
        <Footer />
      </div>
    );
  }
}

export default App;
