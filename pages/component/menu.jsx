import * as React from "react";
import styles from '../../styles/all.module.css';
import Link from "next/link";
import Divider from "@mui/material/Divider";
import { Disc } from "react-bootstrap-icons";
import { Reception4 } from "react-bootstrap-icons";
import { Hearts } from "react-bootstrap-icons";
import { HouseDoorFill } from "react-bootstrap-icons";

const Menu = () => {
  return (
    <div className={styles["left-side"]}>
      <Link href="/">
        <img
          src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671551335/Music%20Website/img/public/logo_mtxhe1.png"
          alt=""
          width={100}
          height={60}
        ></img>
      </Link>
      <ul className={styles.menu}>
        <li>
          <div className={styles["menu-link"]}>
            <HouseDoorFill color="blue" />
            <Link className={styles.func} href="/">
              {" "}
              Trang chủ
            </Link>
          </div>
        </li>

        <li>
          <div className={styles["menu-link"]}>
            <Disc color="yellow" />
            <Link className={styles.func} href="/explore/explore">
              {" "}
              Khám phá
            </Link>
          </div>
        </li>

        <li>
          <div className={styles["menu-link"]}>
            <Reception4 color="red" />
            <Link className={styles.func} href="/rank/rank">
              {" "}
              BXH
            </Link>
          </div>
        </li>

        <li>
          <div className={styles["menu-link"]}>
            <Hearts color="pink" />
            <Link className={styles.func} href="/about/About">
              {" "}
              Music 4U
            </Link>
          </div>
        </li>
      </ul>

      <Divider color="white" />
    </div>
  );
};

export default Menu;
