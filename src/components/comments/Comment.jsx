import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";

const Comment = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="Write your thoughts ..."
            className={styles.input}
          />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login"> Login to Write </Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/fashion.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.avatar}
            />
            <div className={styles.userInfo}>
              <span className={styles.userName}>Sayantani Mukherjee</span>
              <span className={styles.date}>11th November, 2023</span>
            </div>
          </div>
          <p className={styles.description}>
            AI advancements are exciting, but we must navigate its ethical and
            societal implications thoughtfully to ensure a positive impact on
            our world.
          </p>
        </div>
      </div>
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/culture.webp"
              alt=""
              width={50}
              height={50}
              className={styles.avatar}
            />
            <div className={styles.userInfo}>
              <span className={styles.userName}>Srinija Das</span>
              <span className={styles.date}>11th November, 2023</span>
            </div>
          </div>
          <p className={styles.description}>
            AI's potential to innovate is remarkable, but ethical guidelines and
            regulation are imperative. Balancing progress with ethical
            considerations is key.
          </p>
        </div>
      </div>
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/food.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.avatar}
            />
            <div className={styles.userInfo}>
              <span className={styles.userName}>Ankit Mahata</span>
              <span className={styles.date}>12th November, 2023</span>
            </div>
          </div>
          <p className={styles.description}>
            The impact of AI on society is vast and transformative. From
            improving healthcare to enhancing efficiency across industries, its
            potential is immense.
          </p>
        </div>
      </div>
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/js.jpg"
              alt=""
              width={50}
              height={50}
              className={styles.avatar}
            />
            <div className={styles.userInfo}>
              <span className={styles.userName}>Sayai Saha</span>
              <span className={styles.date}>11th November, 2023</span>
            </div>
          </div>
          <p className={styles.description}>
            AI offers great promise but also poses challenges. Ethical
            considerations and accountability in AI development are critical for
            societal trust.
          </p>
        </div>
      </div>
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/news.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.avatar}
            />
            <div className={styles.userInfo}>
              <span className={styles.userName}>Sayantan Jana</span>
              <span className={styles.date}>12th November, 2023</span>
            </div>
          </div>
          <p className={styles.description}>
            It's fascinating to see how AI is revolutionizing various sectors,
            yet we must ensure it's implemented responsibly, considering
            societal implications.
          </p>
        </div>
      </div>
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/coding.webp"
              alt=""
              width={50}
              height={50}
              className={styles.avatar}
            />
            <div className={styles.userInfo}>
              <span className={styles.userName}>Saikat Dutta</span>
              <span className={styles.date}>14th November, 2023</span>
            </div>
          </div>
          <p className={styles.description}>
            The discussions around AI's impact on society are crucial.
            Transparency and education about AI are essential for widespread
            acceptance and trust.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
