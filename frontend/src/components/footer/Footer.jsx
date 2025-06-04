import React from 'react';
import './footer.css';
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>
          &copy; 2025 Digital World with Vaishnavi. All rights reserved. <br />
          Made with ❤️ by <a href="https://www.instagram.com/miss.vaishu_official.70/" target="_blank" rel="noopener noreferrer">Vaishnavi Shinde</a>
        </p>
        <div className="social-links">
          <a href="https://www.facebook.com/profile.php?id=100086596443554" target="_blank" rel="noopener noreferrer">
            <FaSquareFacebook />
          </a>
          <a href="https://t.me/Vaishnavishinde70" target="_blank" rel="noopener noreferrer">
            <FaTelegram />
          </a>
          <a href="https://youtube.com/@vaishnavigrowsbiz" target="_blank" rel="noopener noreferrer">
            <IoLogoYoutube />
          </a>
          <a href="https://www.linkedin.com/in/shinde-vaishnavi-4b5198254" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
