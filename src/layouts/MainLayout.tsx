import Nav from "@/src/pages/Nav";
// import styles from "./styles.module.css";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Nav />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
