import React from "react";
import Landing from "../../pages/Landing";
import SideBar from "../SideBar/SideBar";
import styles from "./style.module.scss";
import { Route, Routes } from "react-router-dom";

const Layout = () => {
  return (
    <div className={styles.maincontainer}>
      <div className={styles.leftsidebar}>
        <SideBar />
      </div>
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </div>
    </div>
  );
};

export default Layout;
