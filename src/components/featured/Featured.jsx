import React from "react";
import Styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={Styles.container}>
      <h1 className={Styles.title}>
        <b className={Styles.bold}>Hello Everyone! </b> Welcome to my creative
        space
      </h1>

      <div className={Styles.post}>
        <div className={Styles.imageContainer}>
          <Image src="/blog3.jpg" alt="" fill className={Styles.image} />
        </div>
        <div className={Styles.textConatiner}>
          <h1 className={Styles.postTitle}>
            Understanding the Impact of Artificial Intelligence on Society
          </h1>
          <p className={Styles.postDescription}>
            Artificial Intelligence (AI) is revolutionizing the way we live and
            work. It's influencing various industries and reshaping societal
            norms. The ethical implications of AI development and its potential
            consequences have sparked numerous debates among experts.
          </p>
          <button className={Styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
