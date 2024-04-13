// import React from 'react'
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter, FaSquareWhatsapp } from "react-icons/fa6";
import {Link} from 'react-router-dom'
import "./FooterStyle.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="Social-icons">
        <FaFacebook />
        <FaSquareXTwitter/>
        <FaInstagram />
        <FaSquareWhatsapp/>
      </div>

      <div className="footer-links">
          <Link>Home</Link>
          <Link>Team</Link>
          <Link>Contact</Link>
      </div>
      <p>@2022</p>
    </footer>
  )
}
