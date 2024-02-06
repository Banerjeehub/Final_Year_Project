import Styles from "./loading.module.css";
import LoadingScreen from "react-loading-screen";

export default function App() {
  return (
    <div className={Styles.container}>
      <LoadingScreen
        loading={true}
        bgColor="#091B18"
        spinnerColor="#9ee5f8"
        textColor="#676767"
        logoSrc="https://i.imgur.com/uPvFvZe.jpg"
        text="Loading..."
      >
        {" "}
      </LoadingScreen>
    </div>
  );
}
