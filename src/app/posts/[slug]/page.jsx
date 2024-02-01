import Menu from "@/components/menu/Menu";
import styles from "./singlepage.module.css";
import Image from "next/image";
import Comment from "@/components/comments/Comment";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Understanding the Impact of Artificial Intelligence on Society
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/coding.webp" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.userName}>Padmanava Banerjee</span>
              <span className={styles.date}>10th November, 2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/blog3.jpg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Artificial Intelligence (AI) has become an integral part of modern
              society, reshaping industries and revolutionizing the way we live
              and work. From autonomous vehicles to personalized
              recommendations, AI's impact is pervasive. However, this
              technological advancement raises ethical concerns and prompts
              discussions on its societal implications.
            </p>
            <h2 className={styles.h2}>The Role of AI in Healthcare : </h2>
            <p>
              In healthcare, AI aids in diagnosing diseases, predicting patient
              outcomes, and discovering new treatments. It streamlines
              processes, enhances precision, and improves patient care, but it
              also raises questions about data privacy and decision-making
              transparency.
            </p>
            <p>
              AI's influence extends beyond healthcare, permeating education,
              finance, and even governance. As AI continues to evolve,
              understanding its societal impact becomes crucial for ethical and
              responsible integration.
            </p>
            <Comment />
          </div>
        </div>

        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
