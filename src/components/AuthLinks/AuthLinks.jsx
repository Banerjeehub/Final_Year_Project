"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Styles from "./authlinks.module.css";
import { signOut, useSession } from "next-auth/react";
import toast from "react-hot-toast";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();

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

  const handleLogout = async () => {
    await signOut({ redirect: false });
    toast.success("Logged out successfully"); // Display toast upon successful logout
  };

  return (
    <>
      {session ? (
        <>
          <Link href="/write" className={Styles.link}>
            Write
          </Link>
          <span className={Styles.link} onClick={handleLogout}>
            Logout
          </span>
        </>
      ) : (
        <Link href="/login" className={Styles.link}>
          Login
        </Link>
      )}
      <div className={Styles.burger} onClick={() => setOpen(!open)}>
        <div className={Styles.line}></div>
        <div className={Styles.line}></div>
        <div className={Styles.line}></div>
      </div>
      {open && (
        <div className={Styles.responsiveMenu}>
          <Link href="/" onClick={handleLinkClick}>
            Homepage
          </Link>
          <Link href="/" onClick={handleLinkClick}>
            About
          </Link>
          <Link href="/" onClick={handleLinkClick}>
            Contact
          </Link>
          {session ? (
            <Link href="/write" onClick={handleLinkClick}>
              Write
            </Link>
          ) : (
            <Link href="/login" onClick={handleLinkClick}>
              Login
            </Link>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
