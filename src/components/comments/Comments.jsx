"use client";

import Link from "next/link";
import Styles from "./comments.module.css";
import Image from "next/image";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import moment from "moment";
import { useState } from "react";
const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};
const Comments = ({ postSlug }) => {
  const { status } = useSession();
  const [desc, setDesc] = useState("");

  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );
  function handleDate(data) {
    const formattedDate = moment(data.createdAt).format("Do MMMM, YYYY");
    return formattedDate;
  }
  const handleSubmit = async () => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
    mutate();
  };

  return (
    <div className={Styles.container}>
      <h1 className={Styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={Styles.write}>
          <textarea
            placeholder="Write your thoughts ..."
            className={Styles.input}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button className={Styles.button} onClick={handleSubmit}>
            Send
          </button>
        </div>
      ) : (
        <Link href="/login"> Login to Write </Link>
      )}
      <div className={Styles.comments}>
        {isLoading
          ? "Loading"
          : data?.map((item) => (
              <div className={Styles.comment} key={item.id}>
                <div className={Styles.user}>
                  {item?.user.image && (
                    <Image
                      src={item.user.image}
                      alt=""
                      width={50}
                      height={50}
                      className={Styles.avatar}
                    />
                  )}
                  <div className={Styles.userInfo}>
                    <span className={Styles.userName}>{item.user.name}</span>
                    <span className={Styles.date}>{handleDate(item)}</span>
                  </div>
                </div>
                <p className={Styles.description}>{item.desc}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;
