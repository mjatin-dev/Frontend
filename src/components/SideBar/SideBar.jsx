import React from "react";
import Image from "../Images/Image";
import styles from "./style.module.scss";
import sideBarLogo from "../../assets/images/sideBarlogo.png";
import { sideBarMenu } from "../../constants/Menus/SideBarMenus";

const SideBar = () => {
  return (
    <div className={styles.bar}>
      <div className={styles.menuslist}>
        <div className={styles.logo}>
          <Image src={sideBarLogo} alt="SideBar Logo" />
        </div>
        <div className={styles.menus}>
          {sideBarMenu.map((menus) => {
            return (
              menus.type === "menus" && (
                <div className={styles.menusitem}>
                  <Image
                    src={menus.inActiveIcon}
                    alt="SideBar Logo"
                    title={menus.title}
                  />
                </div>
              )
            );
          })}
        </div>
        <div className={styles.settingmenus}>
          <div className="dividerline"></div>
          {sideBarMenu.map((menus) => {
            return (
              menus.type === "settingMenus" && (
                <div className={styles.menusitem}>
                  <Image
                    src={menus.inActiveIcon}
                    alt="SideBar Logo"
                    title={menus.title}
                  />
                </div>
              )
            );
          })}

          <div className={styles.usermenus}>
            {sideBarMenu.map((menus) => {
              return (
                menus.type === "userMenu" && (
                  <div className={styles.menusitem}>
                    <Image
                      src={menus.inActiveIcon}
                      alt="SideBar Logo"
                      title={menus.title}
                    />
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
