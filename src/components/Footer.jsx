import React from "react";
import { BrowserRouter,Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="share">
          <BrowserRouter>
          <Link to="#" className="fab fa-facebook-f"></Link>
          <Link to="#" className="fab fa-twitter"></Link>
          <Link to="#" className="fab fa-instagram"></Link>
          <Link to="#" className="fab fa-linkedin"></Link>
          <Link to="#" className="fab fa-pinterest"></Link>
          </BrowserRouter>
        </div>
        <div className="credit">
          created by with<span className='heart'>&hearts;</span> &nbsp;<a href="https://www.dovigyel.hu/" className="footer-a" target="_blank" rel="noreferrer">D&D</a> | all rights reserved
        </div>
      </section>
    </>
  );
};

export default Footer;
