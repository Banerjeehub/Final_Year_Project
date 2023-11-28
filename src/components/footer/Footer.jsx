import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image
            src="/tc.png"
            alt=""
            width={50}
            height={50}
            className={styles.logoImg}
          />
          <h1 className={styles.logoText}>ThoughtCanvas</h1>
        </div>
        <p className={styles.description}>
          Welcome to ThoughtCanvas, a space dedicated to sharing insights,
          experiences, and knowledge across various topics. Explore our
          articles, connect with the community, and embark on a journey of
          learning and discovery.
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/youtube.png" alt="" width={18} height={18} />
          <Image src="/tiktok.png" alt="" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <div className={styles.listTitle}>Links</div>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <div className={styles.listTitle}>Tags</div>
          <Link href="/">Coding</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Travel</Link>
          <Link href="/">Food</Link>
        </div>
        <div className={styles.list}>
          <div className={styles.listTitle}>Social</div>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Linkedin</Link>
          <Link href="/">Github</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
