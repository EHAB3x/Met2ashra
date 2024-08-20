import Nav from "@/src/components/common/Nav";
// import styles from "./styles.module.css";
import { Outlet } from "react-router-dom";
import Footer from "@components/common/Footer";

const MainLayout = () => {
  return (
    <div>
      <Nav />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
