import Image from "next/image";
import Styles from "./card.module.css";
import Link from "next/link";

const Card = ({ item, key }) => {
  return (
    <div className={Styles.container} key={key}>
      {item.img && (
        <div className={Styles.imageContainer}>
          <Image src={item.img} alt="" fill className={Styles.image} />
        </div>
      )}
      <div className={Styles.textContainer}>
        <div className={Styles.detail}>
          <span className={Styles.date}>
            {item.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className={Styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/post/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        <div
          className={Styles.desc}
          dangerouslySetInnerHTML={{ __html: item?.desc.substring(0, 60) }}
        />
        <Link href={`/post/${item.slug}`} className={Styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
