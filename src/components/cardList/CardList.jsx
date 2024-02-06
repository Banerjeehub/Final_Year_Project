import React from "react";
import Styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";

const getData = async (page, cat) => {
  const res = await fetch(
    `http://localhost:3000/api/post?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CardList = async ({ page, cat }) => {
  const { post, count } = await getData(page, cat);

  const POST_PER_PAGE = 2;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className={Styles.container}>
      <h1 className={Styles.title}>Recent Posts</h1>
      <div className={Styles.posts}>
        {post?.map((item) => {
          return <Card item={item} key={item.id} />;
        })}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} cat={cat} />
    </div>
  );
};

export default CardList;
