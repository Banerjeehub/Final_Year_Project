"use client";
import React from "react";
import styles from "./pagination.module.css";
import { useRouter } from "next/navigation";

const Pagination = ({ page, hasNext }) => {
  const router = useRouter();

  const handlePreviousClick = (event) => {
    event.preventDefault();
    const previousPage = Math.max(page - 1, 1); // Ensure the page doesn't go below 1
    router.push(`?page=${previousPage}`);
  };

  const handleNextClick = (event) => {
    event.preventDefault();
    const nextPage = page + 1;
    router.push(`?page=${nextPage}`);
  };

  return (
    <div className={styles.container}>
      <button
        type="button"
        className={styles.button}
        onClick={handlePreviousClick}
        disabled={page <= 1}
      >
        Previous
      </button>
      <button type="button" className={styles.button} onClick={handleNextClick}
      disabled={!hasNext}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
