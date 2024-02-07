import React from "react";
import Styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";

const Navbar = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.social}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image
          src="/github.png"
          alt="github"
          width={24}
          height={24}
          className={Styles.gitImage}
        />
        <Image src="/linkedin.svg" alt="linkedin" width={24} height={24} />
      </div>
      <div className={Styles.logo}>ThoughtCanvas</div>
      <div className={Styles.links}>
        <ThemeToggle />
        <Link href="/" className={Styles.link}>
          Homepage
        </Link>
        <Link href="/" className={Styles.link}>
          Contact
        </Link>
        <Link href="/" className={Styles.link}>
          About
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
