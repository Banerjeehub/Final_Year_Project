import React from "react";
import Styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.info}>
        <div className={Styles.logo}>
          <Image
            src="/tc.png"
            alt=""
            width={50}
            height={50}
            className={Styles.logoImg}
          />
          <h1 className={Styles.logoText}>ThoughtCanvas</h1>
        </div>
        <p className={Styles.description}>
          Welcome to ThoughtCanvas, a space dedicated to sharing insights,
          experiences, and knowledge across various topics. Explore our
          articles, connect with the community, and embark on a journey of
          learning and discovery.
        </p>
        <div className={Styles.icons}>
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/github.png" alt="" width={18} height={18} className={Styles.gitImage}/>
          <Image src="/linkedin.svg" alt="" width={18} height={18} />
        </div>
      </div>
      <div className={Styles.links}>
        <div className={Styles.list}>
          <div className={Styles.listTitle}>Links</div>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={Styles.list}>
          <div className={Styles.listTitle}>Tags</div>
          <Link href="/">Coding</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Travel</Link>
          <Link href="/">Food</Link>
        </div>
        <div className={Styles.list}>
          <div className={Styles.listTitle}>Social</div>
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
