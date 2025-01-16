"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import styles from "../page.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const iconRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    // Check if the click is outside both the menu and the menu icon
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      iconRef.current &&
      !iconRef.current.contains(event.target)
    ) {
      setMenuOpen(false); // Close the menu when clicking outside
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className={styles.navbar_container}>
      <div className={styles.logo}>
        <Link href="/home">
          <h1>News Master</h1>
        </Link>
      </div>
      <div
        className={styles.menu_icon}
        onClick={toggleMenu}
        ref={iconRef} // Add ref to menu icon
      >
        <span>☰</span>
      </div>
      <div
        className={`${styles.navs} ${menuOpen ? styles.show : ""}`}
        ref={menuRef} // Add ref to the navigation menu
      >
        <ul>
          <li onClick={toggleMenu}>
            <Link href="/home">Home</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link href="/general">General</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link href="/business">Business</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link href="/sports">Sports</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link href="/science">Science</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link href="/health">Health</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link href="/entertainment">Entertainment</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link href="/technology">Technology</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
