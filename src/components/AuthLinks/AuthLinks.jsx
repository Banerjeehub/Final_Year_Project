import React from "react";
import styles from "./authlinks.module.css";
import Link from "next/link";

const AuthLinks = () => {
  const status = "notAuthenticated";
  return (
    <>
      {status === "notAuthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
    </>
  );
};

export default AuthLinks;
