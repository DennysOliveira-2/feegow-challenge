import React from "react";
import { Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <Nav className={styles.navbarBtns}>
      <NavItem className={styles.navbarItem}>
        <Link to="/">INÍCIO</Link>
      </NavItem>
      <NavItem className={styles.navbarItem}>
        <Link to="/appointments">MEUS AGENDAMENTOS</Link>
      </NavItem>
    </Nav>
  );
}
