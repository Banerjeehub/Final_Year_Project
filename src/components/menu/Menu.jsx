import styles from "./menu.module.css";
import MenuPost from "../MenuPost/MenuPost";
import Link from "next/link";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  return (
    // Trending posts
    <div className={styles.container}>
      <h2 className={styles.subTitle}>{"What's Trending"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPost withImage={false} />
      <h2 className={styles.subTitle}>{"Discover By Topics"}</h2>
      <h1 className={styles.title}>Categories</h1>

      <MenuCategory />
      {/* Editor posts */}
      <h2 className={styles.subTitle}>{"Chosen By The Editor"}</h2>
      <h1 className={styles.title}>Editor's Pick</h1>
      <MenuPost withImage={true} />
    </div>
  );
};

export default Menu;
