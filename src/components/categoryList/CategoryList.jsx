import React from "react";
import styles from "./Categorylist.module.css";
import Link from "next/link";
import Image from "next/image";
const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link
          href="blog?cat=tyle"
          className={`${styles.category} ${styles.news}`}
        >
          <Image
            src="/news.jpeg"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          news
        </Link>
        <Link
          href="blog?cat=tyle"
          className={`${styles.category} ${styles.coding}`}
        >
          <Image
            src="/coding.webp"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Coding
        </Link>
        <Link
          href="blog?cat=tyle"
          className={`${styles.category} ${styles.fashion}`}
        >
          <Image
            src="/fashion.jpeg"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Fashion
        </Link>
        <Link
          href="blog?cat=tyle"
          className={`${styles.category} ${styles.food}`}
        >
          <Image
            src="/food.jpeg"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Food
        </Link>
        <Link
          href="blog?cat=tyle"
          className={`${styles.category} ${styles.travel}`}
        >
          <Image
            src="/travel.webp"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Travel
        </Link>
        <Link
          href="blog?cat=tyle"
          className={`${styles.category} ${styles.culture}`}
        >
          <Image
            src="/culture.webp"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Culture
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
