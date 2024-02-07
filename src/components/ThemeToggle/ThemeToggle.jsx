"use client";

import React, { useContext } from "react";
import Styles from "./themetoggle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";
const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <div
      className={Styles.container}
      onClick={toggle}
      data-theme={theme}
      style={
        theme === "dark"
          ? { backgroundColor: "#f6eee3" }
          : { backgroundColor: "#0f172a" }
      }
    >
      <Image src="/moon.png" alt="" height={14} width={14} />
      <div
        className={Styles.ball}
        style={
          theme === "dark"
            ? { left: -1, background: "#0f172a" }
            : { right: -1, background: "#f6eee3" }
        }
      ></div>
      <Image src="/sun.png" alt="" height={14} width={14} />
    </div>
  );
};

export default ThemeToggle;
