import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function Home() {
  return (
    <div className="myContainer">
      <div className="upNav">TopNav</div>
      <div className="nav">
        <Navbar />
      </div>
      <div className="hero">Hero</div>
      <div className="history">History</div>
      <div className="community">community</div>
      <div className="executive">executive</div>
      <div className="donation">donation</div>
      <div className="course">couse Allah</div>
      <div className="prayer">paryertime</div>
      <div className="reach">reachout</div>
      <div className="news">news and event</div>
      <div className="footer">
        <Footer />
      </div>
      <div className="footer-bott">footerbottom</div>
    </div>
  );
}

export default Home;
