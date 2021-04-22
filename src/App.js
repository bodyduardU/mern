import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

import './App.css';

import Navbar from "./components/navbar/navbar";
import Banner from "./components/banner/banner";
import Slider from "./components/slider/slider";
import TotalFeatures from "./components/features/compFeature";
import Video from "./components/YouTube-Video/video";
import Events from "./components/eventItems/event";
import BlogPost from "./components/blogPost/blogPost";
import Sponsor from "./components/sponsors/sponsor";
import Footer from "./components/footer/footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Slider />
      <TotalFeatures />
      <Video />
      <Events />
      <BlogPost />
      <Sponsor />
      <Footer />
    </div>
  );
}

export default App;
