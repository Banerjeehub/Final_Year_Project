"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./authLinks.module.css";
import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const { status } = useSession();

  const handleLinkClick = () => {
    setOpen(false); // Close the menu when a link is clicked
  };

  const closeMenuIfLargeScreen = () => {
    if (window.innerWidth > 640) {
      setOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      closeMenuIfLargeScreen();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <span className={styles.link} onClick={signOut}>
            Logout
          </span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/" onClick={handleLinkClick}>
            Homepage
          </Link>
          <Link href="/" onClick={handleLinkClick}>
            About
          </Link>
          <Link href="/" onClick={handleLinkClick}>
            Contact
          </Link>
          {status === "unauthenticated" ? (
            <Link href="/login" onClick={handleLinkClick}>
              Login
            </Link>
          ) : (
            <>
              <Link href="/write" onClick={handleLinkClick}>
                Write
              </Link>
              <span style={{cursor:"pointer"}} onClick={() => signOut()}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
