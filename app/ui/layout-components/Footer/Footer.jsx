//For page layout By Tay King Yu, Galen
"use client";

import styles from "./Footer.module.css";
import React from "react";
import Nav from 'react-bootstrap/Nav';
import font from "../../fonts.css";
import Link from "next/link";


const Footer = () => (
  <footer className={`page-footer font-small blue pt-4 text-white ${styles.footer}`}>
    <div className="container-fluid text-center justify-content-center">

      <Nav className="d-flex justify-content-center" activeKey="/home">
        <Nav.Item>
          <Link href="/" className="px-3">Home</Link> {/* Added some padding for the links, to space them out */}
        </Nav.Item>
        <Nav.Item>
          <Link href="/profile" className="px-3">Profile</Link>
        </Nav.Item>
        <Nav.Item>
          <Link href="#" className="px-3">Brawlers</Link>
        </Nav.Item>
        <Nav.Item>
          <Link href="#" className="px-3">Events</Link>
        </Nav.Item>
        <Nav.Item className="px-3">
          <Link href="#" >
            Leaderboards
          </Link>
        </Nav.Item>
      </Nav>

      <div className="row align-items-center"> {/* Align items vertically in the row */}
        <span className="ps-1">
          This content is not affiliated with, endorsed, sponsored, or specifically approved by Supercell and Supercell is not responsible for it. For more information see <a target="_blank" href="https://supercell.com/en/fan-content-policy/">Supercell's Fan Content Policy</a>
        </span>
        <hr className="clearfix w-100 d-md-none pb-0" />
      </div>
    </div>

    <div className="footer-copyright text-center py-3">
      © 2023 Copyright: Brawckers
    </div>
  </footer>
);

export default Footer;
