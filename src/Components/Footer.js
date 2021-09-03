import React from "react";
import Footerimg from "../images/Group 146.png";

function Footer() {
  return (
    <footer className="foot text-white  lg:py-24">
      <div className="footerimag self-center px-8">
        <img src={Footerimg} alt=" footerImg" />
      </div>
      <div className="">
        <h3 className="text-white font-bold ">Need to talk to us ?</h3>
        <address>
          <span className="font-semibold  text-sm"> Location</span>: Plot 1065,
          NIQS Crescent, After VIO Odiice Mabushi, Abuja.
        </address>
        <div className="text-sm">
          <span className="font-semibold"> Telephone</span>: 07063130180
        </div>
        <div className="text-sm">
          <span className="font-semibold"> Email</span>: Mcannational@gmail.com
        </div>
      </div>
      <div className="px-8 justify-self-center">
        <h3 className="text-white font-bold ">Useful links</h3>
        <nav className=" font-light text-sm list-none">
          <li>About Us</li>
          <li> Leaders </li>
          <li>NYSC Update </li>
          <li>Blog </li>
          <li>Contact</li>
        </nav>
      </div>
      <div className="px-8">
        <h3 className="text-white font-bold ">Connect with us </h3>
        <nav className="font-extralight text-sm list-none">
          <li>Twitter</li>
          <li> Facebook </li>
          <li>Instagram </li>
        </nav>
      </div>
    </footer>
  );
}
export default Footer;
