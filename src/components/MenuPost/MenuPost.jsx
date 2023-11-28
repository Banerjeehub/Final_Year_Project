import React from "react";
import styles from "./menupost.module.css";
import Link from "next/link";
import Image from "next/image";

const MenuPost = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        <div className={styles.imageContainer}>
          {withImage && (
            <Image src="/coding.webp" alt="" fill className={styles.image} />
          )}
        </div>
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.coding}`}>Coding</span>
          <h3 className={styles.postTitle}>
            The Importance of JavaScript in Modern Web Development.
          </h3>
          <div className={styles.details}>
            <span className={styles.username}>Padmanava Banerjee</span>
            <span className={styles.date}> - November 15, 2023</span>
          </div>
        </div>
      </Link>

      <Link href="/" className={styles.item}>
        <div className={styles.imageContainer}>
          {withImage && (
            <Image src="/fashion.jpeg" alt="" fill className={styles.image} />
          )}
        </div>
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            Fashion
          </span>
          <h3 className={styles.postTitle}>
            Fashion Trends: From the Runway to Street Style
          </h3>
          <div className={styles.details}>
            <span className={styles.username}>Sayantani Mukherjee</span>
            <span className={styles.date}> - October 30, 2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        <div className={styles.imageContainer}>
          {withImage && (
            <Image src="/food.jpeg" alt="" fill className={styles.image} />
          )}
        </div>
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Food</span>
          <h3 className={styles.postTitle}>
            Exploring Culinary Delights: A Journey through Exotic Dishes
          </h3>
          <div className={styles.details}>
            <span className={styles.username}>Sayani Saha</span>
            <span className={styles.date}> - December 5, 2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        <div className={styles.imageContainer}>
          {withImage && (
            <Image src="/travel.webp" alt="" fill className={styles.image} />
          )}
        </div>
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>
            Discovering Hidden Gems: Unforgettable Travel Adventures
          </h3>
          <div className={styles.details}>
            <span className={styles.username}>Sayantan Jana</span>
            <span className={styles.date}> - September 20, 2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPost;
