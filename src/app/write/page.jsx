"use client";
import Image from "next/image";
import styles from "./writepage.module.css";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" />
      <div className={styles.editor}>
        <button className={styles.button}>
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addbutton}>
              <Image src="/plus.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addbutton}>
              <Image src="/plus.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addbutton}>
              <Image src="/plus.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Write Your Story..."
        />
      </div>
    </div>
  );
};

export default WritePage;
