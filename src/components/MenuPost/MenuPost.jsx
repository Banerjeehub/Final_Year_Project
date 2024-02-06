import React from "react";
import Styles from "./menupost.module.css";
import Link from "next/link";
import Image from "next/image";

const MenuPost = ({ withImage }) => {
  return (
    <div className={Styles.items}>
      <Link href="/" className={Styles.item}>
        <div className={Styles.imageContainer}>
          {withImage && (
            <Image src="/coding.webp" alt="" fill className={Styles.image} />
          )}
        </div>
        <div className={Styles.textContainer}>
          <span className={`${Styles.category} ${Styles.coding}`}>Coding</span>
          <h3 className={Styles.postTitle}>
            The Importance of JavaScript in Modern Web Development.
          </h3>
          <div className={Styles.details}>
            <span className={Styles.username}>Padmanava Banerjee</span>
            <span className={Styles.date}> - November 15, 2023</span>
          </div>
        </div>
      </Link>

      <Link href="/" className={Styles.item}>
        <div className={Styles.imageContainer}>
          {withImage && (
            <Image src="/fashion.jpeg" alt="" fill className={Styles.image} />
          )}
        </div>
        <div className={Styles.textContainer}>
          <span className={`${Styles.category} ${Styles.fashion}`}>
            Fashion
          </span>
          <h3 className={Styles.postTitle}>
            Fashion Trends: From the Runway to Street Style
          </h3>
          <div className={Styles.details}>
            <span className={Styles.username}>Sayantani Mukherjee</span>
            <span className={Styles.date}> - October 30, 2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={Styles.item}>
        <div className={Styles.imageContainer}>
          {withImage && (
            <Image src="/food.jpeg" alt="" fill className={Styles.image} />
          )}
        </div>
        <div className={Styles.textContainer}>
          <span className={`${Styles.category} ${Styles.food}`}>Food</span>
          <h3 className={Styles.postTitle}>
            Exploring Culinary Delights: A Journey through Exotic Dishes
          </h3>
          <div className={Styles.details}>
            <span className={Styles.username}>Sayani Saha</span>
            <span className={Styles.date}> - December 5, 2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={Styles.item}>
        <div className={Styles.imageContainer}>
          {withImage && (
            <Image src="/travel.webp" alt="" fill className={Styles.image} />
          )}
        </div>
        <div className={Styles.textContainer}>
          <span className={`${Styles.category} ${Styles.travel}`}>Travel</span>
          <h3 className={Styles.postTitle}>
            Discovering Hidden Gems: Unforgettable Travel Adventures
          </h3>
          <div className={Styles.details}>
            <span className={Styles.username}>Sayantan Jana</span>
            <span className={Styles.date}> - September 20, 2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPost;
