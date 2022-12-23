import * as React from "react";
import styles from "../singer/singer.module.css";
import { styled, useTheme } from "@mui/material/styles";

import Divider from "@mui/material/Divider";
import Link from "next/link";
import { HouseDoorFill } from "react-bootstrap-icons";
import { Disc } from "react-bootstrap-icons";
import { Reception4 } from "react-bootstrap-icons";
import { Hearts } from "react-bootstrap-icons";
import { Search } from "react-bootstrap-icons";
import { PersonCircle } from "react-bootstrap-icons";
import { OutlinedInput } from "@mui/material";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import Checkbox from "@mui/material/Checkbox";
import GoogleIcon from "@mui/icons-material/Google";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import PauseRounded from "@mui/icons-material/PauseRounded";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import VolumeUpRounded from "@mui/icons-material/VolumeUpRounded";
import VolumeDownRounded from "@mui/icons-material/VolumeDownRounded";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import RepeatIcon from "@mui/icons-material/Repeat";
import Stack from "@mui/material/Stack";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import GroupAddIcon from "@mui/icons-material/GroupAdd";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "black",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
const Widget = styled("div")(({ theme }) => ({
  padding: 16,
  borderRadius: 16,
  width: 343,
  maxWidth: "100%",
  margin: "auto",
  position: "relative",
  zIndex: 1,
  backgroundColor: theme.palette.mode === "#1D2631",
  backdropFilter: "blur(40px)",
}));

const CoverImage = styled("div")({
  width: 100,
  height: 100,
  objectFit: "cover",
  overflow: "hidden",
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: "rgba(0,0,0,0.08)",
  "& > img": {
    width: "100%",
  },
});

const TinyText = styled(Typography)({
  fontSize: "0.75rem",
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

const singer = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [about, setAbout] = React.useState(false);
  const openAbout = () => {
    setAbout(true);
  };
  const closeAbout = () => {
    setAbout(false);
  };
  const [registerForm, setRegisterForm] = React.useState(false);
  const openRegisterForm = () => {
    setRegisterForm(true);
  };
  const closeRegisterForm = () => {
    setRegisterForm(false);
  };

  const theme = useTheme();
  const duration = 200;
  const [position, setPosition] = React.useState(32);
  const [paused, setPaused] = React.useState(false);
  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }
  const mainIconColor = theme.palette.mode === "dark" ? "#fff" : "#000";
  const lightIconColor =
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)";

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <main className={styles.main}>
        <div className={styles["left-side"]}>
          <Link href="/">
            <img
              src="https://res.cloudinary.com/dilw55wpp/image/upload/v1671465447/Music%20Web/public/logo_lwffd6.png"
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
                <Link className={styles.func} href="/about/About">
                  {" "}
                  Khám phá
                </Link>
              </div>
            </li>
            <li>
              <div className={styles["menu-link"]}>
                <Reception4 color="red" />
                <Link className={styles.func} href="/about/About">
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

        <div className={styles["between-side"]}>
          <div className={styles["search-acc"]}>
            <div className={styles["search-bar"]}>
              <Search
                size={20}
                color="white"
                className={styles["search-icon"]}
              ></Search>
              <OutlinedInput
                className={styles.search}
                placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát ..."
              ></OutlinedInput>
            </div>
            <div className={styles.acc}>
              <Button onClick={handleOpen}>
                <PersonCircle size={32} color="white"></PersonCircle>
              </Button>
              <Modal hideBackdrop open={open} onClose={handleClose}>
                <Box sx={{ ...style, width: 300 }}>
                  <Grid container spacing={2} className={styles["white-color"]}>
                    <Grid xs={1}></Grid>
                    <Grid xs={10}>
                      <h3 className={styles["title-modal"]}>Đăng Nhập</h3>
                    </Grid>
                    <Grid xs={1}>
                      <Button onClick={handleClose}>
                        <CloseIcon
                          className={styles["white-color"]}
                        ></CloseIcon>
                      </Button>
                    </Grid>
                  </Grid>
                  <form container className={styles.form}>
                    <div className={styles["d-flex"]}>
                      <PermIdentityIcon
                        className={styles["input-form"]}
                        size={20}
                        border="white"
                      ></PermIdentityIcon>
                      <OutlinedInput
                        className={styles["input-form"]}
                        placeholder="Nhập tên đăng nhập"
                      ></OutlinedInput>
                    </div>
                    <div className={styles["d-flex"]}>
                      <KeyboardIcon
                        className={styles["input-form"]}
                        size={20}
                        border="white"
                      ></KeyboardIcon>
                      <OutlinedInput
                        className={styles["input-form"]}
                        placeholder="Nhập mật khẩu"
                      ></OutlinedInput>
                    </div>
                    <div className={styles["d-flex"]}>
                      <Checkbox
                        size="12"
                        className={styles["white-color"]}
                      ></Checkbox>
                      <p className={styles["white-color"]}>Ghi nhớ</p>
                    </div>
                    <Button className={styles["form-submit"]}>Đăng Nhập</Button>
                    <div className={styles["d-flex"]}>
                      <p className={styles["white-color"]}>
                        Hoặc đăng nhập bằng
                      </p>
                      <FacebookIcon
                        className={styles["white-color"]}
                      ></FacebookIcon>
                      <GoogleIcon
                        className={styles["white-color"]}
                      ></GoogleIcon>
                    </div>
                    <p className={styles["white-color"]}>
                      Bạn chưa có tài khoản ?
                    </p>
                    <Link
                      onClick={() => {
                        handleClose();
                        openRegisterForm();
                      }}
                      className={styles["blue-color"]}
                      href=""
                    >
                      Đăng ký ngay
                    </Link>
                  </form>
                </Box>
              </Modal>
              <Modal hideBackdrop open={registerForm}>
                <Box sx={{ ...style, width: 300 }}>
                  <Grid container spacing={2} className={styles["white-color"]}>
                    <Grid xs={1}></Grid>
                    <Grid xs={10}>
                      <h3 className={styles["title-modal"]}>
                        Đăng Ký Tài Khoản
                      </h3>
                    </Grid>
                    <Grid xs={1}>
                      <Button onClick={closeRegisterForm}>
                        <CloseIcon
                          className={styles["white-color"]}
                        ></CloseIcon>
                      </Button>
                    </Grid>
                  </Grid>
                  <form container className={styles.form}>
                    <div className={styles["d-flex"]}>
                      <PermIdentityIcon
                        className={styles["input-form"]}
                        size={20}
                        border="white"
                      ></PermIdentityIcon>
                      <OutlinedInput
                        className={styles["input-form"]}
                        placeholder="Nhập tên đăng nhập"
                      ></OutlinedInput>
                    </div>
                    <div className={styles["d-flex"]}>
                      <KeyboardIcon
                        className={styles["input-form"]}
                        size={20}
                        border="white"
                      ></KeyboardIcon>
                      <OutlinedInput
                        className={styles["input-form"]}
                        placeholder="Nhập mật khẩu"
                      ></OutlinedInput>
                    </div>
                    <div className={styles["d-flex"]}>
                      <KeyboardIcon
                        className={styles["input-form"]}
                        size={20}
                        border="white"
                      ></KeyboardIcon>
                      <OutlinedInput
                        className={styles["input-form"]}
                        placeholder="Nhập lại mật khẩu"
                      ></OutlinedInput>
                    </div>
                    <div className={styles["d-flex"]}>
                      <MailOutlineIcon
                        className={styles["input-form"]}
                        size={20}
                        border="white"
                      ></MailOutlineIcon>
                      <OutlinedInput
                        className={styles["input-form"]}
                        placeholder="Nhập email"
                      ></OutlinedInput>
                    </div>
                    <div className={styles["d-flex"]}>
                      <Checkbox
                        size="12"
                        className={styles["white-color"]}
                      ></Checkbox>
                      <p className={styles["white-color"]}>
                        Tôi đã đọc và đồng ý với các điều khoản sử dụng
                      </p>
                    </div>
                    <Button className={styles["form-submit"]} disabled>
                      Đăng Ký
                    </Button>
                    <p className={styles["white-color"]}>
                      Bạn đã có tài khoản ?
                    </p>
                    <Link
                      onClick={() => {
                        closeRegisterForm();
                        handleOpen();
                      }}
                      className={styles["blue-color"]}
                      href=""
                    >
                      Đăng nhập
                    </Link>
                  </form>
                </Box>
              </Modal>
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles["p-relative"]}>
              <div className={styles["banner-content"]}>
                <div className={styles.flex}>
                  <h1>Hương Ly</h1>
                  <PlayArrowRounded
                    className={styles["btn-play"]}
                  ></PlayArrowRounded>
                </div>
                <div className={styles.flex}>
                  <p>681.567 người quan tâm</p>
                  <Button className={styles["btn-follow"]}>
                    <GroupAddIcon
                      className={styles["icon-follow"]}
                    ></GroupAddIcon>
                    Quan Tâm
                  </Button>
                </div>
              </div>
              <img
                className={styles["singer-banner"]}
                src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671551337/Music%20Website/img/singers/Huong%20Ly/4fe0ee848da7884b620ee129ece451f8_tedsdr.jpg"
              ></img>
            </div>
          </div>

          <div className={styles.content}>
            <h2>Bài Hát Nổi Bật</h2>
            <Grid container xs={12}>
              <Grid xs={5}>
                <Grid display="flex" className={styles.song}>
                  <Grid xs={1} display="flex" alignItems={"center"} gap={1}>
                    <Checkbox
                      size="12"
                      className={styles["check-to-add"]}
                      fontSize={12}
                    ></Checkbox>
                    <AudiotrackIcon
                      className={styles["hover-to-check"]}
                      fontSize="14"
                    ></AudiotrackIcon>
                  </Grid>
                  <Grid xs={2} position="relative">
                    <PlayArrowRounded
                      className={styles["play-song"]}
                    ></PlayArrowRounded>
                    <img
                      width={"50px"}
                      src="https://res.cloudinary.com/dilw55wpp/image/upload/v1671470775/Music%20Web/songs/6deb8ea62749618d200bbe270ade7f3e_ja3eoq.webp"
                    ></img>
                  </Grid>
                  <Grid xs={1}></Grid>
                  <Grid xs={6}>
                    <Grid>
                      <Grid xs={12}>Mấy khi</Grid>
                      <Grid xs={12} fontSize={12}>
                        Wren Evans
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid xs={3} className={styles["d-flex"]} gap={1}>
                    <HeadphonesIcon fontSize="14"></HeadphonesIcon>
                    353.4k
                  </Grid>
                </Grid>
              </Grid>
              <Divider></Divider>
              <Grid xs={1}></Grid>
              <Grid xs={5}>
                <Grid display="flex" className={styles.song}>
                  <Grid xs={1} display="flex" alignItems={"center"} gap={1}>
                    <Checkbox
                      size="12"
                      className={styles["check-to-add"]}
                      fontSize={12}
                    ></Checkbox>
                    <AudiotrackIcon
                      className={styles["hover-to-check"]}
                      fontSize="14"
                    ></AudiotrackIcon>
                  </Grid>
                  <Grid xs={2} position="relative">
                    <PlayArrowRounded
                      className={styles["play-song"]}
                    ></PlayArrowRounded>
                    <img
                      width={"50px"}
                      src="https://res.cloudinary.com/dilw55wpp/image/upload/v1671470775/Music%20Web/songs/6deb8ea62749618d200bbe270ade7f3e_ja3eoq.webp"
                    ></img>
                  </Grid>
                  <Grid xs={1}></Grid>
                  <Grid xs={6}>
                    <Grid>
                      <Grid xs={12}>Mấy khi</Grid>
                      <Grid xs={12} fontSize={12}>
                        Wren Evans
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid xs={3} className={styles["d-flex"]} gap={1}>
                    <HeadphonesIcon fontSize="14"></HeadphonesIcon>
                    353.4k
                  </Grid>
                </Grid>
              </Grid>

              <Grid xs={5}>
                <Grid display="flex" className={styles.song}>
                  <Grid xs={1} display="flex" alignItems={"center"} gap={1}>
                    <Checkbox
                      size="12"
                      className={styles["check-to-add"]}
                      fontSize={12}
                    ></Checkbox>
                    <AudiotrackIcon
                      className={styles["hover-to-check"]}
                      fontSize="14"
                    ></AudiotrackIcon>
                  </Grid>
                  <Grid xs={2} position="relative">
                    <PlayArrowRounded
                      className={styles["play-song"]}
                    ></PlayArrowRounded>
                    <img
                      width={"50px"}
                      src="https://res.cloudinary.com/dilw55wpp/image/upload/v1671470775/Music%20Web/songs/6deb8ea62749618d200bbe270ade7f3e_ja3eoq.webp"
                    ></img>
                  </Grid>
                  <Grid xs={1}></Grid>
                  <Grid xs={6}>
                    <Grid>
                      <Grid xs={12}>Mấy khi</Grid>
                      <Grid xs={12} fontSize={12}>
                        Wren Evans
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid xs={3} className={styles["d-flex"]} gap={1}>
                    <HeadphonesIcon fontSize="14"></HeadphonesIcon>
                    353.4k
                  </Grid>
                </Grid>
              </Grid>
              <Divider></Divider>
              <Grid xs={1}></Grid>
              <Grid xs={5}>
                <Grid display="flex" className={styles.song}>
                  <Grid xs={1} display="flex" alignItems={"center"} gap={1}>
                    <Checkbox
                      size="12"
                      className={styles["check-to-add"]}
                      fontSize={12}
                    ></Checkbox>
                    <AudiotrackIcon
                      className={styles["hover-to-check"]}
                      fontSize="14"
                    ></AudiotrackIcon>
                  </Grid>
                  <Grid xs={2} position="relative">
                    <PlayArrowRounded
                      className={styles["play-song"]}
                    ></PlayArrowRounded>
                    <img
                      width={"50px"}
                      src="https://res.cloudinary.com/dilw55wpp/image/upload/v1671470775/Music%20Web/songs/6deb8ea62749618d200bbe270ade7f3e_ja3eoq.webp"
                    ></img>
                  </Grid>
                  <Grid xs={1}></Grid>
                  <Grid xs={6}>
                    <Grid>
                      <Grid xs={12}>Mấy khi</Grid>
                      <Grid xs={12} fontSize={12}>
                        Wren Evans
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid xs={3} className={styles["d-flex"]} gap={1}>
                    <HeadphonesIcon fontSize="14"></HeadphonesIcon>
                    353.4k
                  </Grid>
                </Grid>
              </Grid>

              <Grid xs={5}>
                <Grid display="flex" className={styles.song}>
                  <Grid xs={1} display="flex" alignItems={"center"} gap={1}>
                    <Checkbox
                      size="12"
                      className={styles["check-to-add"]}
                      fontSize={12}
                    ></Checkbox>
                    <AudiotrackIcon
                      className={styles["hover-to-check"]}
                      fontSize="14"
                    ></AudiotrackIcon>
                  </Grid>
                  <Grid xs={2} position="relative">
                    <PlayArrowRounded
                      className={styles["play-song"]}
                    ></PlayArrowRounded>
                    <img
                      width={"50px"}
                      src="https://res.cloudinary.com/dilw55wpp/image/upload/v1671470775/Music%20Web/songs/6deb8ea62749618d200bbe270ade7f3e_ja3eoq.webp"
                    ></img>
                  </Grid>
                  <Grid xs={1}></Grid>
                  <Grid xs={6}>
                    <Grid>
                      <Grid xs={12}>Mấy khi</Grid>
                      <Grid xs={12} fontSize={12}>
                        Wren Evans
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid xs={3} className={styles["d-flex"]} gap={1}>
                    <HeadphonesIcon fontSize="14"></HeadphonesIcon>
                    353.4k
                  </Grid>
                </Grid>
              </Grid>
              <Divider></Divider>
              <Grid xs={1}></Grid>
              <Grid xs={5}>
                <Grid display="flex" className={styles.song}>
                  <Grid xs={1} display="flex" alignItems={"center"} gap={1}>
                    <Checkbox
                      size="12"
                      className={styles["check-to-add"]}
                      fontSize={12}
                    ></Checkbox>
                    <AudiotrackIcon
                      className={styles["hover-to-check"]}
                      fontSize="14"
                    ></AudiotrackIcon>
                  </Grid>
                  <Grid xs={2} position="relative">
                    <PlayArrowRounded
                      className={styles["play-song"]}
                    ></PlayArrowRounded>
                    <img
                      width={"50px"}
                      src="https://res.cloudinary.com/dilw55wpp/image/upload/v1671470775/Music%20Web/songs/6deb8ea62749618d200bbe270ade7f3e_ja3eoq.webp"
                    ></img>
                  </Grid>
                  <Grid xs={1}></Grid>
                  <Grid xs={6}>
                    <Grid>
                      <Grid xs={12}>Mấy khi</Grid>
                      <Grid xs={12} fontSize={12}>
                        Wren Evans
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid xs={3} className={styles["d-flex"]} gap={1}>
                    <HeadphonesIcon fontSize="14"></HeadphonesIcon>
                    353.4k
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>

          <div className={styles.content}>
            <h2>Single & EP</h2>
            <Grid container xs={12} display="flex" gap={1}>
              <Grid xs={3} className={styles["p-relative"]}>
                <PlayArrowRounded
                  className={styles["btn-play-single"]}
                ></PlayArrowRounded>
                <img
                  className={styles["img-single"]}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671551338/Music%20Website/img/singers/Huong%20Ly/Single%20EP/f714fdfe60f01c7a2409ad1129e75fe6_xqkgxu.webp"
                ></img>
                <p>
                  <strong>Nụ Cười Xuân (Single)</strong>
                </p>
                <p>Mới phát hành 12/2022</p>
              </Grid>
              <Grid xs={3} className={styles["p-relative"]}>
                <PlayArrowRounded
                  className={styles["btn-play-single"]}
                ></PlayArrowRounded>
                <img
                  className={styles["img-single"]}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671551338/Music%20Website/img/singers/Huong%20Ly/Single%20EP/f714fdfe60f01c7a2409ad1129e75fe6_xqkgxu.webp"
                ></img>
                <p>
                  <strong>Nụ Cười Xuân (Single)</strong>
                </p>
                <p>Mới phát hành 12/2022</p>
              </Grid>
              <Grid xs={3} className={styles["p-relative"]}>
                <PlayArrowRounded
                  className={styles["btn-play-single"]}
                ></PlayArrowRounded>
                <img
                  className={styles["img-single"]}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671551338/Music%20Website/img/singers/Huong%20Ly/Single%20EP/f714fdfe60f01c7a2409ad1129e75fe6_xqkgxu.webp"
                ></img>
                <p>
                  <strong>Nụ Cười Xuân (Single)</strong>
                </p>
                <p>Mới phát hành 12/2022</p>
              </Grid>
            </Grid>
          </div>

          <div className={styles.content}>
            <h2>MV</h2>
            <div className={styles["list-mv"]}>
              <div className={styles.mv}>
                <img
                  className={styles["img-single"]}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671551338/Music%20Website/img/singers/Huong%20Ly/MV/f2a93bbd234f40249fa9e247597ba768_ftbjvn.webp"
                ></img>
                <div className={styles["d-flex"]}>
                  <img
                    className={styles["mini-img"]}
                    width={"40px"}
                    src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671555976/Music%20Website/img/singers/Huong%20Ly/ef84f25bebe0bb917735de836a3e417f_ftynz4.jpg"
                  ></img>
                  <div>
                    <div>Thế Giới Trong Em</div>
                    <div>Hương Ly, L.Y.M</div>
                  </div>
                </div>
              </div>

              <div className={styles.mv}>
                <img
                  className={styles["img-single"]}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671551338/Music%20Website/img/singers/Huong%20Ly/MV/f2a93bbd234f40249fa9e247597ba768_ftbjvn.webp"
                ></img>
                <div className={styles["d-flex"]}>
                  <img
                    className={styles["mini-img"]}
                    width={"40px"}
                    src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671555976/Music%20Website/img/singers/Huong%20Ly/ef84f25bebe0bb917735de836a3e417f_ftynz4.jpg"
                  ></img>
                  <div>
                    <div>Thế Giới Trong Em</div>
                    <div>Hương Ly, L.Y.M</div>
                  </div>
                </div>
              </div>

              <div className={styles.mv}>
                <img
                  className={styles["img-single"]}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671551338/Music%20Website/img/singers/Huong%20Ly/MV/f2a93bbd234f40249fa9e247597ba768_ftbjvn.webp"
                ></img>
                <div className={styles["d-flex"]}>
                  <img
                    className={styles["mini-img"]}
                    width={"40px"}
                    src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671555976/Music%20Website/img/singers/Huong%20Ly/ef84f25bebe0bb917735de836a3e417f_ftynz4.jpg"
                  ></img>
                  <div>
                    <div>Thế Giới Trong Em</div>
                    <div>Hương Ly, L.Y.M</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.content}>
            <h2>Bạn Có Thể Thích</h2>
            <div className={styles["d-flex"]}>
              <div className={styles["other-singer"]}>
                <img
                  className={styles["circle-img"]}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671551337/Music%20Website/img/singers/f7491ffdb112675f1322fd1c1c8b57bf_pgy7fy.webp"
                ></img>
                <div>Minh Vương M4U</div>
                <div>205k Quan Tâm</div>
                <Button className={styles["btn-follow"]}>
                  <GroupAddIcon
                    className={styles["icon-follow"]}
                  ></GroupAddIcon>
                  Quan Tâm
                </Button>
              </div>
              <div className={styles["other-singer"]}>
                <img
                  className={styles["circle-img"]}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671551337/Music%20Website/img/singers/f7491ffdb112675f1322fd1c1c8b57bf_pgy7fy.webp"
                ></img>
                <div>Minh Vương M4U</div>
                <div>205k Quan Tâm</div>
                <Button className={styles["btn-follow"]}>
                  <GroupAddIcon
                    className={styles["icon-follow"]}
                  ></GroupAddIcon>
                  Quan Tâm
                </Button>
              </div>
              <div className={styles["other-singer"]}>
                <img
                  className={styles["circle-img"]}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671551337/Music%20Website/img/singers/f7491ffdb112675f1322fd1c1c8b57bf_pgy7fy.webp"
                ></img>
                <div>Minh Vương M4U</div>
                <div>205k Quan Tâm</div>
                <Button className={styles["btn-follow"]}>
                  <GroupAddIcon
                    className={styles["icon-follow"]}
                  ></GroupAddIcon>
                  Quan Tâm
                </Button>
              </div>
              <div className={styles["other-singer"]}>
                <img
                  className={styles["circle-img"]}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671551337/Music%20Website/img/singers/f7491ffdb112675f1322fd1c1c8b57bf_pgy7fy.webp"
                ></img>
                <div>Minh Vương M4U</div>
                <div>205k Quan Tâm</div>
                <Button className={styles["btn-follow"]}>
                  <GroupAddIcon
                    className={styles["icon-follow"]}
                  ></GroupAddIcon>
                  Quan Tâm
                </Button>
              </div>
              <div className={styles["other-singer"]}>
                <img
                  className={styles["circle-img"]}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671551337/Music%20Website/img/singers/f7491ffdb112675f1322fd1c1c8b57bf_pgy7fy.webp"
                ></img>
                <div>Minh Vương M4U</div>
                <div>205k Quan Tâm</div>
                <Button className={styles["btn-follow"]}>
                  <GroupAddIcon
                    className={styles["icon-follow"]}
                  ></GroupAddIcon>
                  Quan Tâm
                </Button>
              </div>
            </div>
          </div>

          <div className={styles.content}>
            <h2>Về Ca Sỹ</h2>
            <div className={styles["width-100"]}>
              <div className={styles["img-about"]}>
                <img
                  className={styles["img-single"]}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671551337/Music%20Website/img/singers/Huong%20Ly/ef84f25bebe0bb917735de836a3e417f_almjdc.webp"
                ></img>
              </div>
              <div className={styles["img-about"]}>
                Cô nàng Nguyễn Hương Ly hiện đang sở hữu những bản cover “làm
                mưa làm gió” trên mạng xã hội với hàng triệu lượt nghe, cô được
                những người yêu mến đặt biệt danh là Ngọc Nữ cover bởi vẻ ngoài
                xinh đẹp, nổi bật cùng giọng hát ngọt ngào, đầy nội lực Những
                bản cover của Hương Ly được yêu mến bởi cách thể hiện tự nhiên,
                giàu cảm xúc. Sự kết hợp...{" "}
                <span onClick={openAbout}>Xem Thêm</span>
                <h2>681.567</h2>
                <div>Người quan tâm</div>
                <Modal open={about} onClose={closeAbout}>
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "400px",
                      bgcolor: "#34224f",
                      border: "2px solid #000",
                      boxShadow: 24,
                      pt: 2,
                      px: 4,
                      pb: 3,
                      borderColor: "white",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      gap: "16px",
                    }}
                  >
                    <img
                      className={styles["circle-img"]}
                      src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671555976/Music%20Website/img/singers/Huong%20Ly/ef84f25bebe0bb917735de836a3e417f_ftynz4.jpg"
                    ></img>
                    <Typography sx={{ mt: 2 }}>
                      Cô nàng Nguyễn Hương Ly hiện đang sở hữu những bản cover
                      “làm mưa làm gió” trên mạng xã hội với hàng triệu lượt
                      nghe, cô được những người yêu mến đặt biệt danh là Ngọc Nữ
                      cover bởi vẻ ngoài xinh đẹp, nổi bật cùng giọng hát ngọt
                      ngào, đầy nội lực Những bản cover của Hương Ly được yêu
                      mến bởi cách thể hiện tự nhiên, giàu cảm xúc. Sự kết hợp
                      với nhiều nhạc cụ khác nhau cũng mang đến nhạc cảm mới lạ
                      và bất ngờ.
                    </Typography>
                  </Box>
                </Modal>
              </div>
            </div>
          </div>

          <footer className={styles.footer}>
            <Divider color="white" />
            <div className={styles["footer-1"]}>
              <ul className={styles["footer-nav"]}>
                <li>Giới Thiệu</li>
                <div className={styles.line}></div>
                <li>GV-SP</li>
                <div className={styles.line}></div>
                <li>Hỗ Trợ</li>
                <div className={styles.line}></div>
                <li>Thỏa Thuận Sử Dụng</li>
              </ul>
              <div className={styles.down}>
                <FacebookIcon></FacebookIcon>
                <InstagramIcon></InstagramIcon>
                <img
                  src="https://res.cloudinary.com/dilw55wpp/image/upload/v1671465447/Music%20Web/public/app_store_s8fhyr.png"
                  width={70}
                  height={25}
                ></img>
                <img
                  src="https://res.cloudinary.com/dilw55wpp/image/upload/v1671465447/Music%20Web/public/gg_play_aligmm.png"
                  width={70}
                  height={25}
                ></img>
                <img
                  src="https://res.cloudinary.com/dilw55wpp/image/upload/v1671465447/Music%20Web/public/app_gallery_pbmqm2.png"
                  width={70}
                  height={25}
                ></img>
              </div>
            </div>

            <div className={styles["footer-1"]}>
              <div container className={styles["footer-2"]}>
                <img
                  src="https://res.cloudinary.com/dilw55wpp/image/upload/v1671465447/Music%20Web/public/logo_lwffd6.png"
                  width={160}
                ></img>
                <div className={styles["footer-3"]}>
                  <p>CÔNG TY CỔ PHẦN N C T</p>
                  <p>Chủ sở hữu: Nguyễn Văn Thuần</p>
                </div>
              </div>
              <div className={styles["footer-2"]}>
                <img
                  src="https://stc-id.nixcdn.com/v12/images/Cong_Thuong.svg"
                  width={80}
                ></img>
                <img
                  src="https://stc-id.nixcdn.com/v12/images/DMCA.svg"
                  width={80}
                ></img>
              </div>
            </div>
            <div>
              <ul className={styles["white-color"]}>
                <li>
                  <p>
                    Giấy phép MXH số 499/GP-BTTTT do Bộ Thông Tin và Truyền
                    thông cấp ngày 28/09/2015.
                  </p>
                </li>
                <li>
                  <p>
                    Giấy Chứng nhận Đăng ký Kinh doanh số 0305535715 do Sở kế
                    hoạch và Đầu tư Tp.Hồ Chí Minh cấp ngày 01/03/2008.
                  </p>
                </li>
              </ul>
            </div>

            <div className={styles["footer-4"]}>
              <div className={styles["d-flex"]}>
                <LocationOnIcon></LocationOnIcon>
                <p>
                  Tòa nhà The 678 Tower, 67 Hoàng Văn Thái, P.Tân Phú, Q.7,
                  TP.HCM
                </p>
              </div>
              <div className={styles["d-flex"]}>
                <CallIcon></CallIcon>
                <p>(028) 3868 7979</p>
              </div>
            </div>
          </footer>
        </div>

        <div className={styles["right-side"]}>
          <Box sx={{ width: "100%", overflow: "hidden" }}>
            <Widget>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <CoverImage>
                  <img
                    alt="can't win - Chilling Sunday"
                    src="/img/chilling-sunday.jpg"
                  />
                </CoverImage>
                <Box sx={{ ml: 1.5, minWidth: 0 }}>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    fontWeight={500}
                    className={styles["white-color"]}
                  >
                    Jun Pulse
                  </Typography>
                  <Typography noWrap className={styles["white-color"]}>
                    <b>คนเก่าเขาทำไว้ดี (Can&apos;t win)</b>
                  </Typography>
                  <Typography
                    noWrap
                    letterSpacing={-0.25}
                    className={styles["white-color"]}
                  >
                    Chilling Sunday &mdash; คนเก่าเขาทำไว้ดี
                  </Typography>
                </Box>
              </Box>
              <Slider
                aria-label="time-indicator"
                size="small"
                value={position}
                min={0}
                step={1}
                max={duration}
                onChange={(_, value) => setPosition(value)}
                sx={{
                  color:
                    theme.palette.mode === "dark" ? "#fff" : "rgba(0,0,0,0.87)",
                  height: 4,
                  "& .MuiSlider-thumb": {
                    width: 8,
                    height: 8,
                    transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
                    "&:before": {
                      boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
                    },
                    "&:hover, &.Mui-focusVisible": {
                      boxShadow: `0px 0px 0px 8px ${
                        theme.palette.mode === "dark"
                          ? "rgb(255 255 255 / 16%)"
                          : "rgb(0 0 0 / 16%)"
                      }`,
                    },
                    "&.Mui-active": {
                      width: 20,
                      height: 20,
                    },
                  },
                  "& .MuiSlider-rail": {
                    opacity: 0.28,
                  },
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: -2,
                }}
              >
                <TinyText className={styles["white-color"]}>
                  {formatDuration(position)}
                </TinyText>
                <TinyText className={styles["white-color"]}>
                  -{formatDuration(duration - position)}
                </TinyText>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mt: -1,
                }}
              >
                <IconButton aria-label="random-song">
                  <ShuffleIcon></ShuffleIcon>
                </IconButton>
                <IconButton aria-label="previous-song">
                  <FastRewindRounded
                    fontSize="large"
                    htmlColor={mainIconColor}
                  />
                </IconButton>
                <IconButton
                  aria-label={paused ? "play" : "pause"}
                  onClick={() => setPaused(!paused)}
                >
                  {paused ? (
                    <PlayArrowRounded
                      sx={{ fontSize: "3rem" }}
                      htmlColor={mainIconColor}
                    />
                  ) : (
                    <PauseRounded
                      sx={{ fontSize: "3rem" }}
                      htmlColor={mainIconColor}
                    />
                  )}
                </IconButton>
                <IconButton aria-label="next-song">
                  <FastForwardRounded
                    fontSize="large"
                    htmlColor={mainIconColor}
                  />
                </IconButton>
                <IconButton aria-label="repeat-song">
                  <RepeatIcon></RepeatIcon>
                </IconButton>
              </Box>
              <Stack
                spacing={2}
                direction="row"
                sx={{ mb: 1, px: 1 }}
                alignItems="center"
              >
                <VolumeDownRounded htmlColor={lightIconColor} />
                <Slider
                  aria-label="Volume"
                  defaultValue={30}
                  sx={{
                    color:
                      theme.palette.mode === "dark"
                        ? "#fff"
                        : "rgba(0,0,0,0.87)",
                    "& .MuiSlider-track": {
                      border: "none",
                    },
                    "& .MuiSlider-thumb": {
                      width: 24,
                      height: 24,
                      backgroundColor: "#fff",
                      "&:before": {
                        boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
                      },
                      "&:hover, &.Mui-focusVisible, &.Mui-active": {
                        boxShadow: "none",
                      },
                    },
                  }}
                />
                <VolumeUpRounded htmlColor={lightIconColor} />
              </Stack>
            </Widget>
          </Box>
          <Divider color="white"></Divider>
          <div className={styles["play-list"]}>
            <Grid
              container
              spacing={2}
              display="flex"
              flexDirection={"column"}
              gap={2}
              className={styles["white-color"]}
            >
              <Grid display="flex">
                <Grid xs={9} display="flex" alignItems={"center"} gap={1}>
                  <ArrowDropDownIcon fontSize="12"></ArrowDropDownIcon>
                  Bài hát
                  <MoreVertIcon fontSize="12"></MoreVertIcon>
                </Grid>
                <Grid xs={3} className={styles["d-flex"]} gap={1}>
                  Lượt nghe
                </Grid>
              </Grid>

              <Grid display="flex" className={styles.song}>
                <Grid xs={1} display="flex" alignItems={"center"} gap={1}>
                  <Checkbox
                    size="12"
                    className={styles["check-to-add"]}
                    fontSize={12}
                  ></Checkbox>
                  <AudiotrackIcon
                    className={styles["hover-to-check"]}
                    fontSize="12"
                  ></AudiotrackIcon>
                </Grid>
                <Grid xs={8}>
                  <Grid>
                    <Grid xs={12}>Mấy khi</Grid>
                    <Grid xs={12} fontSize={12}>
                      Wren Evans
                    </Grid>
                  </Grid>
                </Grid>
                <Grid xs={3} className={styles["d-flex"]} gap={1}>
                  <HeadphonesIcon fontSize="14"></HeadphonesIcon>
                  353.4k
                </Grid>
              </Grid>

              <Grid display="flex" className={styles.song}>
                <Grid xs={1} display="flex" alignItems={"center"} gap={1}>
                  <Checkbox
                    size="12"
                    className={styles["check-to-add"]}
                    fontSize={12}
                  ></Checkbox>
                  <AudiotrackIcon
                    className={styles["hover-to-check"]}
                    fontSize="12"
                  ></AudiotrackIcon>
                </Grid>
                <Grid xs={8}>
                  <Grid>
                    <Grid xs={12}>Có chơi Có chịu</Grid>
                    <Grid xs={12} fontSize={12}>
                      Karik, OnlyC
                    </Grid>
                  </Grid>
                </Grid>
                <Grid xs={3} className={styles["d-flex"]} gap={1}>
                  <HeadphonesIcon fontSize="14"></HeadphonesIcon>
                  353.4k
                </Grid>
              </Grid>

              <Grid display="flex" className={styles.song}>
                <Grid xs={1} display="flex" alignItems={"center"} gap={1}>
                  <Checkbox
                    size="12"
                    className={styles["check-to-add"]}
                    fontSize={12}
                  ></Checkbox>
                  <AudiotrackIcon
                    className={styles["hover-to-check"]}
                    fontSize="12"
                  ></AudiotrackIcon>
                </Grid>
                <Grid xs={8}>
                  <Grid>
                    <Grid xs={12}>Thanh Xuân</Grid>
                    <Grid xs={12} fontSize={12}>
                      Da LAB
                    </Grid>
                  </Grid>
                </Grid>
                <Grid xs={3} className={styles["d-flex"]} gap={1}>
                  <HeadphonesIcon fontSize="14"></HeadphonesIcon>
                  353.4k
                </Grid>
              </Grid>
            </Grid>
          </div>
        </div>
      </main>
    </div>
  );
};

export default singer;
