import Menu from "@/components/menu/Menu";
import styles from "./singlepage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";
import moment from "moment";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/post/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = params;

  const data = await getData(slug);
  console.log(data);
  const formattedDate = moment(data.createdAt).format("Do MMMM, YYYY");
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data.title}</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image
                src={data?.user?.image}
                alt=""
                fill
                className={styles.avatar}
              />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.userName}>{data.user.name}</span>
              <span className={styles.date}>{formattedDate}</span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className={styles.imageContainer}>
            <Image src={data?.img} alt="" fill className={styles.image} />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          />
          <div className="comment">
            <Comments postSlug={slug} />
          </div>
        </div>

        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
