import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import AuthLinks from "../AuthLinks/AuthLinks";

const Navbar = () => {
  return (
    
    <div className={styles.container}>
     
      <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="linkedin" width={24} height={24} />
        <Image src="/youtube.png" alt="github" width={24} height={24} />
      </div>
      <div className={styles.logo}>BlogifyHub</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">About</Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
