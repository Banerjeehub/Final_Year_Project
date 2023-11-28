import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b className={styles.bold}>Hello Everyone! </b> Welcome to my creative
        space
      </h1>

      <div className={styles.post}>
        <div className={styles.imageContainer}>
          <Image src="/blog3.jpg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textConatiner}>
          <h1 className={styles.postTitle}>
            Understanding the Impact of Artificial Intelligence on Society
          </h1>
          <p className={styles.postDescription}>
            Artificial Intelligence (AI) is revolutionizing the way we live and
            work. It's influencing various industries and reshaping societal
            norms. The ethical implications of AI development and its potential
            consequences have sparked numerous debates among experts.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
