import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

const Card = ({ key, item }) => {
  // Format the createdAt date string
  const formattedDate = format(
    new Date(item.createdAt),
    "MMMM dd, yyyy hh:mm a"
  );

  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        <Image src={item.img} alt="" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.details}>
          <span className={styles.date}>{formattedDate} - </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href="/">
          <h1>{item.title}</h1>
        </Link>
        <p className={styles.description}>{item.desc}</p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
