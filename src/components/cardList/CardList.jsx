import React from "react";
import styles from "./cardlist.module.css";
import Pagination from "../pagination/Pagination";
import Card from "../Card/Card";

const getData = async (page, cat) => {
  const res = await fetch(
    `http://localhost:3000/api/post?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("failed");
  }
  return res.json();
};
const POST_PER_PAGE = 3;
const CardList = async ({ page, cat }) => {
  const { post, count } = await getData(page, cat);
  // console.log(post, count);
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.post}>
        {post?.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      <Pagination page={page} hasNext={hasNext} />
    </div>
  );
};

export default CardList;
