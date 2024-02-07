import Styles from "./menu.module.css";
import MenuPost from "../menuPost/MenuPost";
import MenuCategory from "../menuCategory/MenuCategory";

const Menu = () => {
  return (
    // Trending posts
    <div className={Styles.container}>
      <h2 className={Styles.subTitle}>{"What's Trending"}</h2>
      <h1 className={Styles.title}>Most Popular</h1>
      <MenuPost withImage={false} />
      <h2 className={Styles.subTitle}>{"Discover By Topics"}</h2>
      <h1 className={Styles.title}>Categories</h1>

      <MenuCategory />
      {/* Editor posts */}
      <h2 className={Styles.subTitle}>{"Chosen By The Editor"}</h2>
      <h1 className={Styles.title}>Editor's Pick</h1>
      <MenuPost withImage={true} />
    </div>
  );
};

export default Menu;
