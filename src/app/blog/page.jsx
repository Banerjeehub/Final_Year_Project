import CardList from "@/components/cardList/CardList";
import Styles from "./page.module.css";
import Menu from "@/components/menu/Menu";
let arr = [];

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;
  if (cat != "") arr.push(cat);
  return (
    <div className={Styles.container}>
      <h1 className={Styles.title}>{arr[arr.length - 1]} Blog</h1>
      <div className={Styles.content}>
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
