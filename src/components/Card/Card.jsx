import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/rjs.jpg" alt="" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.details}>
          <span className={styles.date}>September 20, 2023 - </span>
          <span className={styles.category}>CODING</span>
        </div>
        <Link href="/">
          <h1>Understanding React Hooks and Its Implementation</h1>
        </Link>
        <p className={styles.description}>
          React hooks have revolutionized the way developers build components.
          Learn how to effectively use hooks in your React applications and
          their practical implementation in various scenarios.
        </p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
