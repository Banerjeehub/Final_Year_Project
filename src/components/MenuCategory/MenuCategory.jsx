import Link from "next/link";
import React from "react";
import Styles from "./menucategory.module.css";

const MenuCategory = () => {
  return (
    <div className={Styles.categoryList}>
      <Link
        href="/blog?cat=coding"
        className={`${Styles.categoryItem} ${Styles.news}`}
      >
        News
      </Link>
      <Link
        href="/blog?cat=coding"
        className={`${Styles.categoryItem} ${Styles.coding}`}
      >
        Coding
      </Link>
      <Link
        href="/blog?cat=coding"
        className={`${Styles.categoryItem} ${Styles.fashion}`}
      >
        Fashion
      </Link>
      <Link
        href="/blog?cat=coding"
        className={`${Styles.categoryItem} ${Styles.food}`}
      >
        Food
      </Link>
      <Link
        href="/blog?cat=coding"
        className={`${Styles.categoryItem} ${Styles.travel}`}
      >
        Travel
      </Link>
      <Link
        href="/blog?cat=coding"
        className={`${Styles.categoryItem} ${Styles.culture}`}
      >
        Culture
      </Link>
    </div>
  );
};

export default MenuCategory;
