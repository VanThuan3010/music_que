import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { styled, useTheme } from "@mui/material/styles";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import Slider from "@mui/material/Slider";

import Divider from "@mui/material/Divider";
import { OutlinedInput } from "@mui/material";
import { Search } from "react-bootstrap-icons";
import { PersonCircle } from "react-bootstrap-icons";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import RepeatIcon from "@mui/icons-material/Repeat";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CallIcon from "@mui/icons-material/Call";
import CloseIcon from "@mui/icons-material/Close";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import Checkbox from "@mui/material/Checkbox";
import GoogleIcon from "@mui/icons-material/Google";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PauseRounded from "@mui/icons-material/PauseRounded";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import VolumeUpRounded from "@mui/icons-material/VolumeUpRounded";
import VolumeDownRounded from "@mui/icons-material/VolumeDownRounded";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import TextField from "@mui/material/TextField";

import SwiperCore, { EffectCoverflow, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { display } from "@mui/system";

SwiperCore.use([EffectCoverflow, Pagination]);
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
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

const songs = [
  {
    name: "Thu???c L??o Ngh??? An",
    singer: "Vanh Leg",
    src: "https://res.cloudinary.com/dd4k5r61c/video/upload/v1672154911/Music%20Website/audio/Thu%E1%BB%91c_l%C3%A0o_Ngh%E1%BB%87_an_dl1a6f.mp3",
  },
  {
    name: "C?? Ch??i C?? Ch???u",
    singer: "Karik, Only C",
    src: "https://res.cloudinary.com/dd4k5r61c/video/upload/v1672157765/Music%20Website/audio/C%C3%93_CH%C6%A0I_C%C3%93_CH%E1%BB%8AU_sv7pv7.mp3",
  },
];

export default function Home() {
  const [duration, setDuration] = React.useState();
  const [position, setPosition] = React.useState(0);

  const updateRealTime = () => {
    setPosition(Math.round(document.getElementById("audio").currentTime));
  };

  const myInterval = setInterval(updateRealTime, 1000);
  useEffect(() => {
    setDuration(Math.round(document.getElementById("audio").duration));
    // setPosition(Math.round(document.getElementById("audio").currentTime));
    clearInterval(myInterval);
  }, [position]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const theme = useTheme();
  const [paused, setPaused] = React.useState(false);
  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }
  const mainIconColor = theme.palette.mode === "dark" ? "#fff" : "#000";
  const lightIconColor =
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)";

  const [registerForm, setRegisterForm] = React.useState(false);
  const openRegisterForm = () => {
    setRegisterForm(true);
  };
  const closeRegisterForm = () => {
    setRegisterForm(false);
  };

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm({
    criteriaMode: "all",
    mode: "onBlur",
  });
  return (
    <div>
      <main className={styles.main}>
        {/* <div className={styles["between-side"]}>
          <div className={styles["search-acc"]}>
            <div className={styles["search-bar"]}>
              <Search
                size={20}
                color="white"
                className={styles["search-icon"]}
              ></Search>
              <OutlinedInput
                className={styles.search}
                placeholder="T??m ki???m b??i h??t, ngh??? s??, l???i b??i h??t ..."
              ></OutlinedInput>
            </div>

            <div className={styles.acc}>
              <Button className={styles["acc-btn"]} onClick={handleOpen}>
                <PersonCircle size={32} color="white"></PersonCircle>
              </Button>
              <Modal hideBackdrop open={open} onClose={handleClose}>
                <form
                  action=""
                  method="POST"
                  className="form"
                  id="form-1"
                  onSubmit={handleSubmit((data) => {
                    console.log(data);
                  })}
                >
                  <Box sx={{ ...style, width: 300 }}>
                    <Grid
                      container
                      spacing={2}
                      className={styles["white-color"]}
                    >
                      <Grid xs={1}></Grid>
                      <Grid xs={10}>
                        <h3 className={styles["title-modal"]}>????ng Nh???p</h3>
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
                      <div className={styles["d-flex"]} position="relative">
                        <PermIdentityIcon
                          className={styles["input-icon"]}
                        ></PermIdentityIcon>
                        <input
                          className={styles["input-form"]}
                          type="text"
                          {...register("username", { required: true })}
                          placeholder="Nh???p t??n ????ng nh???p"
                        ></input>
                      </div>
                      {errors.username && (
                        <div className={styles.notification}>
                          B???n c???n nh???p t??n t??i kho???n
                        </div>
                      )}
                      <div className={styles["d-flex"]} position="relative">
                        <KeyboardIcon
                          className={styles["input-icon"]}
                        ></KeyboardIcon>
                        <input
                          className={styles["input-form"]}
                          type="password"
                          placeholder="Nh???p m???t kh???u"
                          {...register("password", { required: true })}
                        ></input>
                      </div>
                      {errors.password && (
                        <div className={styles.notification}>
                          B???n c???n nh???p m???t kh???u
                        </div>
                      )}
                      <div className={styles["d-flex"]}>
                        <Checkbox
                          size="12"
                          className={styles["white-color"]}
                        ></Checkbox>
                        <p className={styles["white-color"]}>Ghi nh???</p>
                      </div>
                      <Button className={styles["form-submit"]}>
                        ????ng Nh???p
                      </Button>
                      <div className={styles["d-flex"]}>
                        <p className={styles["white-color"]}>
                          Ho???c ????ng nh???p b???ng
                        </p>
                        <FacebookIcon
                          className={styles["white-color"]}
                        ></FacebookIcon>
                        <GoogleIcon
                          className={styles["white-color"]}
                        ></GoogleIcon>
                      </div>
                      <p className={styles["white-color"]}>
                        B???n ch??a c?? t??i kho???n ?
                      </p>
                      <Link
                        onClick={() => {
                          handleClose();
                          openRegisterForm();
                        }}
                        className={styles["blue-color"]}
                        href=""
                      >
                        ????ng k?? ngay
                      </Link>
                    </form>
                  </Box>
                </form>
              </Modal>

              <Modal hideBackdrop open={registerForm}>
                <form
                  action=""
                  method="POST"
                  className="form"
                  id="form-1"
                  onSubmit={handleSubmit((data) => {
                    console.log(data);
                  })}
                >
                  <Box sx={{ ...style, width: 300 }}>
                    <Grid
                      container
                      spacing={2}
                      className={styles["white-color"]}
                    >
                      <Grid xs={1}></Grid>
                      <Grid xs={10}>
                        <h3 className={styles["title-modal"]}>
                          ????ng K?? T??i Kho???n
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
                      <div className={styles["d-flex"]} position="relative">
                        <PermIdentityIcon
                          className={styles["input-icon"]}
                        ></PermIdentityIcon>
                        <input
                          className={styles["input-form"]}
                          type="text"
                          name="usernameRegister"
                          placeholder="Nh???p t??n ????ng nh???p"
                          {...register("usernameRegister", {
                            required: "Vui l??ng nh???p t??n t??i kho???n",
                            minLength: {
                              value: 6,
                              message:
                                "T??n ????ng nh???p c???n ph???i c?? t??? 6 ?????n 20 k?? t???",
                            },
                            maxLength: {
                              value: 20,
                              message:
                                "T??n ????ng nh???p c???n ph???i c?? t??? 6 ?????n 20 k?? t???",
                            },
                          })}
                        ></input>
                      </div>
                      <div className={styles.notification}>
                        {errors.usernameRegister &&
                          errors.usernameRegister.message}
                      </div>
                      <div className={styles["d-flex"]} position="relative">
                        <KeyboardIcon
                          className={styles["input-icon"]}
                        ></KeyboardIcon>
                        <input
                          className={styles["input-form"]}
                          type="text"
                          placeholder="Nh???p m???t kh???u"
                          name="passwordRegister"
                          {...register("passwordRegister", {
                            required: "Vui l??ng nh???p m???t kh???u",
                            pattern: {
                              value:
                                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
                              message:
                                "M???t kh???u ph???i ch???a ??t nh???t 8 k?? t???, trong c?? ph???i c?? ??t nh???t 1 k?? t??? in hoa, 1 k?? t??? th?????ng v?? 1 k?? t??? s???",
                            },
                          })}
                        ></input>
                      </div>
                      <div className={styles.notification}>
                        {errors.passwordRegister &&
                          errors.passwordRegister.message}
                      </div>
                      <div className={styles["d-flex"]} position="relative">
                        <KeyboardIcon
                          className={styles["input-icon"]}
                        ></KeyboardIcon>
                        <input
                          className={styles["input-form"]}
                          type="text"
                          placeholder="Nh???p l???i m???t kh???u"
                          name="rePassword"
                          {...register("rePassword", {
                            required: "Vui l??ng nh???p l???i m???t kh???u",
                            validate: {
                              match: (v) =>
                                v === getValues("passwordRegister") ||
                                "M???t kh???u nh???p l???i kh??ng ch??nh x??c",
                            },
                          })}
                        ></input>
                      </div>
                      <div className={styles.notification}>
                        {errors.rePassword && errors.rePassword.message}
                      </div>
                      <div className={styles["d-flex"]} position="relative">
                        <MailOutlineIcon
                          className={styles["input-icon"]}
                        ></MailOutlineIcon>
                        <input
                          className={styles["input-form"]}
                          type="text"
                          placeholder="Nh???p Email"
                          name="email"
                          {...register("email", {
                            required: "Vui l??ng nh???p Email",
                            pattern: {
                              value:
                                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                              message: "Tr?????ng n??y ph???i l?? Email",
                            },
                          })}
                        ></input>
                      </div>
                      {errors.email && (
                        <div className={styles.notification}>
                          {errors.email.message}
                        </div>
                      )}
                      <div className={styles["d-flex"]}>
                        <Checkbox
                          size="12"
                          className={styles["white-color"]}
                        ></Checkbox>
                        <p className={styles["white-color"]}>
                          T??i ???? ?????c v?? ?????ng ?? v???i c??c ??i???u kho???n s??? d???ng
                        </p>
                      </div>
                      <Button className={styles["form-submit"]}>????ng K??</Button>
                      <p className={styles["white-color"]}>
                        B???n ???? c?? t??i kho???n ?
                      </p>
                      <Link
                        onClick={() => {
                          closeRegisterForm();
                          handleOpen();
                        }}
                        className={styles["blue-color"]}
                        href=""
                      >
                        ????ng nh???p
                      </Link>
                    </form>
                  </Box>
                </form>
              </Modal>
            </div>
          </div>

          <div className={styles.slide}>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              loop="true"
              centeredSlides={true}
              slidesPerView={"auto"}
              pagination={{ clickable: true }}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  className={styles["slide-img"]}
                  src="./img/slide1.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className={styles["slide-img"]}
                  src="./img/slide2.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className={styles["slide-img"]}
                  src="./img/slide3.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className={styles["slide-img"]}
                  src="./img/slide4.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className={styles["slide-img"]}
                  src="./img/slide5.jpg"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <section className={styles.content}>
            <h2 className={styles["white-color"]}>G???n ????y</h2>
            <Grid display={"flex"} gap={1}>
              <Grid container xs={3} display={"flex"} flexDirection={"column"}>
                <Grid>
                  <Grid xs={12} item={true}>
                    <img
                      style={{ width: "100%", borderRadius: "5px" }}
                      src="https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_webp/cover/a/2/b/0/a2b0ea02bd193f16c6e049d87fc3c611.jpg"
                    ></img>
                  </Grid>
                  <Grid xs={12} item={true}>
                    <h4 className={styles["white-color"]}>Nh???c m???i m???i ng??y</h4>
                  </Grid>
                </Grid>
              </Grid>

              <Grid container xs={3} display={"flex"} flexDirection={"column"}>
                <Grid>
                  <Grid xs={12} item={true}>
                    <img
                      style={{ width: "100%", borderRadius: "5px" }}
                      src="https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_webp/cover/7/c/9/2/7c92f865f92df53b899a5b7ad3a0d557.jpg"
                    ></img>
                  </Grid>
                  <Grid xs={12} item={true}>
                    <h4 className={styles["white-color"]}>Piano Vi???t</h4>
                  </Grid>
                </Grid>
              </Grid>

              <Grid container xs={3} display={"flex"} flexDirection={"column"}>
                <Grid>
                  <Grid xs={12} item={true}>
                    <img
                      style={{ width: "100%", borderRadius: "5px" }}
                      src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/0/2/9/3029c92e89c5a8ee89f3a04df0c46798.jpg"
                    ></img>
                  </Grid>
                  <Grid xs={12} item={true}>
                    <h4 className={styles["white-color"]}>2022 Hot New</h4>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </section>

          <section className={styles.content}>
            <h2 className={styles["white-color"]}>M???i ph??t h??nh</h2>
            <Box
              sx={{ width: "100%" }}
              item="true"
              className={styles["white-color"]}
            >
              <TabContext value={value}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Box
                    sx={{ borderBottom: 1, borderColor: "divider" }}
                    item="true"
                    className={styles["white-color"]}
                  >
                    <TabList
                      onChange={handleChange}
                      aria-label="lab API tabs example"
                      TabIndicatorProps={{
                        hidden: true,
                      }}
                      sx={{
                        "& button:hover": {
                          color: "white",
                          borderRadius: "30px",
                          background: "blue",
                        },
                        "& button:active": {
                          color: "white",
                          borderRadius: "30px",
                          background: "blue",
                        },
                        "& button.Mui-selected": {
                          color: "white",
                          borderRadius: "30px",
                          background: "blue",
                        },
                      }}
                    >
                      <Tab
                        className={styles["white-color"]}
                        label="T???t C???"
                        value="1"
                      />
                      <Tab
                        className={styles["white-color"]}
                        label="Vi???t Nam"
                        value="2"
                      />
                      <Tab
                        className={styles["white-color"]}
                        label="Qu???c t???"
                        value="3"
                      />
                    </TabList>
                  </Box>
                  <h4>Xem t???t c??? </h4>
                </div>
                <TabPanel value="1">
                  <Grid container display={"flex"}>
                    <Grid xs={12} md={6} className={styles["newest-release"]}>
                      <Grid display="flex" gap={1}>
                        <Grid xs={4} position="relative">
                          <PlayArrowRounded
                            className={styles["play-btn"]}
                          ></PlayArrowRounded>
                          <img
                            alt="N???u kh??ng y??u s??? kh??ng ??au l??ng"
                            src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/9/1/9/4/9194a383668ef3545ee19cdab97823c3.jpg"
                          ></img>
                        </Grid>
                        <Grid xs={8} position="relative">
                          <MoreVertIcon
                            className={styles.manipulation}
                          ></MoreVertIcon>
                          <p
                            style={{ textOverflow: "ellipsis", width: "100%" }}
                            className={styles.title}
                          >
                            N???u kh??ng y??u s??? kh??ng ??au l??ng
                          </p>
                          <p
                            className={styles.singers}
                            style={{ fontSize: "12px" }}
                          >
                            Minh V????ng M4U
                          </p>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid xs={12} md={6} className={styles["newest-release"]}>
                      <Grid display="flex" gap={1}>
                        <Grid xs={4} position="relative">
                          <PlayArrowRounded
                            className={styles["play-btn"]}
                          ></PlayArrowRounded>
                          <img
                            alt="N???u kh??ng y??u s??? kh??ng ??au l??ng"
                            src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/9/1/9/4/9194a383668ef3545ee19cdab97823c3.jpg"
                          ></img>
                        </Grid>
                        <Grid xs={8} position="relative">
                          <MoreVertIcon
                            className={styles.manipulation}
                          ></MoreVertIcon>
                          <p
                            style={{ textOverflow: "ellipsis", width: "100%" }}
                            className={styles.title}
                          >
                            N???u kh??ng y??u s??? kh??ng ??au l??ng
                          </p>
                          <p
                            className={styles.singers}
                            style={{ fontSize: "12px" }}
                          >
                            Minh V????ng M4U
                          </p>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid xs={12} md={5} className={styles["newest-release"]}>
                      <Grid display="flex" gap={1}>
                        <Grid xs={4} position="relative">
                          <PlayArrowRounded
                            className={styles["play-btn"]}
                          ></PlayArrowRounded>
                          <img
                            alt="N???u kh??ng y??u s??? kh??ng ??au l??ng"
                            src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/9/1/9/4/9194a383668ef3545ee19cdab97823c3.jpg"
                          ></img>
                        </Grid>
                        <Grid xs={8} position="relative">
                          <MoreVertIcon
                            className={styles.manipulation}
                          ></MoreVertIcon>
                          <p
                            style={{ textOverflow: "ellipsis", width: "100%" }}
                            className={styles.title}
                          >
                            N???u kh??ng y??u s??? kh??ng ??au l??ng
                          </p>
                          <p
                            className={styles.singers}
                            style={{ fontSize: "12px" }}
                          >
                            Minh V????ng M4U
                          </p>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </TabPanel>
                <TabPanel value="2">
                  <Grid container display={"flex"}>
                    <Grid xs={5} className={styles["newest-release"]}>
                      <Grid display="flex" gap={1}>
                        <Grid xs={4} position="relative">
                          <PlayArrowRounded
                            className={styles["play-btn"]}
                          ></PlayArrowRounded>
                          <img
                            alt="N???u kh??ng y??u s??? kh??ng ??au l??ng"
                            src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/9/1/9/4/9194a383668ef3545ee19cdab97823c3.jpg"
                          ></img>
                        </Grid>
                        <Grid xs={8} position="relative">
                          <MoreVertIcon
                            className={styles.manipulation}
                          ></MoreVertIcon>
                          <p
                            style={{ textOverflow: "ellipsis", width: "100%" }}
                            className={styles.title}
                          >
                            N???u kh??ng y??u s??? kh??ng ??au l??ng
                          </p>
                          <p
                            className={styles.singers}
                            style={{ fontSize: "12px" }}
                          >
                            Minh V????ng M4U
                          </p>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid xs={5} className={styles["newest-release"]}>
                      <Grid display="flex" gap={1}>
                        <Grid xs={4} position="relative">
                          <PlayArrowRounded
                            className={styles["play-btn"]}
                          ></PlayArrowRounded>
                          <img
                            alt="N???u kh??ng y??u s??? kh??ng ??au l??ng"
                            src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/9/1/9/4/9194a383668ef3545ee19cdab97823c3.jpg"
                          ></img>
                        </Grid>
                        <Grid xs={8} position="relative">
                          <MoreVertIcon
                            className={styles.manipulation}
                          ></MoreVertIcon>
                          <p
                            style={{ textOverflow: "ellipsis", width: "100%" }}
                            className={styles.title}
                          >
                            N???u kh??ng y??u s??? kh??ng ??au l??ng
                          </p>
                          <p
                            className={styles.singers}
                            style={{ fontSize: "12px" }}
                          >
                            Minh V????ng M4U
                          </p>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid xs={5} className={styles["newest-release"]}>
                      <Grid display="flex" gap={1}>
                        <Grid xs={4} position="relative">
                          <PlayArrowRounded
                            className={styles["play-btn"]}
                          ></PlayArrowRounded>
                          <img
                            alt="N???u kh??ng y??u s??? kh??ng ??au l??ng"
                            src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/9/1/9/4/9194a383668ef3545ee19cdab97823c3.jpg"
                          ></img>
                        </Grid>
                        <Grid xs={8} position="relative">
                          <MoreVertIcon
                            className={styles.manipulation}
                          ></MoreVertIcon>
                          <p
                            style={{ textOverflow: "ellipsis", width: "100%" }}
                            className={styles.title}
                          >
                            N???u kh??ng y??u s??? kh??ng ??au l??ng
                          </p>
                          <p
                            className={styles.singers}
                            style={{ fontSize: "12px" }}
                          >
                            Minh V????ng M4U
                          </p>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </TabPanel>
                <TabPanel value="3">
                  <Grid container display={"flex"}>
                    <Grid xs={5} className={styles["newest-release"]}>
                      <Grid display="flex" gap={1}>
                        <Grid xs={4} position="relative">
                          <PlayArrowRounded
                            className={styles["play-btn"]}
                          ></PlayArrowRounded>
                          <img
                            alt="N???u kh??ng y??u s??? kh??ng ??au l??ng"
                            src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/9/1/9/4/9194a383668ef3545ee19cdab97823c3.jpg"
                          ></img>
                        </Grid>
                        <Grid xs={8} position="relative">
                          <MoreVertIcon
                            className={styles.manipulation}
                          ></MoreVertIcon>
                          <p
                            style={{ textOverflow: "ellipsis", width: "100%" }}
                            className={styles.title}
                          >
                            N???u kh??ng y??u s??? kh??ng ??au l??ng
                          </p>
                          <p
                            className={styles.singers}
                            style={{ fontSize: "12px" }}
                          >
                            Minh V????ng M4U
                          </p>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid xs={5} className={styles["newest-release"]}>
                      <Grid display="flex" gap={1}>
                        <Grid xs={4} position="relative">
                          <PlayArrowRounded
                            className={styles["play-btn"]}
                          ></PlayArrowRounded>
                          <img
                            alt="N???u kh??ng y??u s??? kh??ng ??au l??ng"
                            src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/9/1/9/4/9194a383668ef3545ee19cdab97823c3.jpg"
                          ></img>
                        </Grid>
                        <Grid xs={8} position="relative">
                          <MoreVertIcon
                            className={styles.manipulation}
                          ></MoreVertIcon>
                          <p
                            style={{ textOverflow: "ellipsis", width: "100%" }}
                            className={styles.title}
                          >
                            N???u kh??ng y??u s??? kh??ng ??au l??ng
                          </p>
                          <p
                            className={styles.singers}
                            style={{ fontSize: "12px" }}
                          >
                            Minh V????ng M4U
                          </p>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid xs={5} className={styles["newest-release"]}>
                      <Grid display="flex" gap={1}>
                        <Grid xs={4} position="relative">
                          <PlayArrowRounded
                            className={styles["play-btn"]}
                          ></PlayArrowRounded>
                          <img
                            alt="N???u kh??ng y??u s??? kh??ng ??au l??ng"
                            src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/9/1/9/4/9194a383668ef3545ee19cdab97823c3.jpg"
                          ></img>
                        </Grid>
                        <Grid xs={8} position="relative">
                          <MoreVertIcon
                            className={styles.manipulation}
                          ></MoreVertIcon>
                          <p
                            style={{ textOverflow: "ellipsis", width: "100%" }}
                            className={styles.title}
                          >
                            N???u kh??ng y??u s??? kh??ng ??au l??ng
                          </p>
                          <p
                            className={styles.singers}
                            style={{ fontSize: "12px" }}
                          >
                            Minh V????ng M4U
                          </p>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </TabPanel>
              </TabContext>
            </Box>
          </section>

          <section className={styles.content}>
            <h2 className={styles["white-color"]}>Radio N???i B???t</h2>
            <Grid container display={"flex"} gap={2}>
              <Grid sx={6}>
                <Grid>
                  <Grid sx={12} position="relative" className={styles.radio}>
                    <PlayArrowRounded
                      className={styles["radio-play"]}
                    ></PlayArrowRounded>
                    <img
                      className={styles.svg}
                      width={"140px"}
                      height={"140px"}
                      src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/8/c/6/2/8c62602dd4212e732993d40defac620c.jpg"
                    ></img>
                    <img
                      className={styles["img-host"]}
                      width={"43px"}
                      height={"43px"}
                      src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/0/8/2/5/0825d8cd559dee502625a25d540c636a.jpg"
                    ></img>
                    <img
                      className={styles["img-label"]}
                      src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/live-tag.svg"
                    ></img>
                  </Grid>
                  <Grid sx={12} textAlign="center">
                    <h3 className={styles["white-color"]}>XONE Radio</h3>
                    <p className={styles["white-color"]}>263 ??ang nghe</p>
                  </Grid>
                </Grid>
              </Grid>

              <Grid sx={6}>
                <Grid>
                  <Grid sx={12} position="relative" className={styles.radio}>
                    <PlayArrowRounded
                      className={styles["radio-play"]}
                    ></PlayArrowRounded>
                    <img
                      className={styles.svg}
                      width={"140px"}
                      height={"140px"}
                      src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/f/d/7/9/fd79808d2180de9a421afa6aff38953e.jpg"
                    ></img>
                    <img
                      className={styles["img-host"]}
                      width={"43px"}
                      height={"43px"}
                      src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/1/4/6/b/146b49d11cc9b3bc591823bfedb8bce2.jpg"
                    ></img>
                    <img
                      className={styles["img-label"]}
                      src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/live-tag.svg"
                    ></img>
                  </Grid>
                  <Grid sx={12} textAlign="center">
                    <h3 className={styles["white-color"]}>V-POP</h3>
                    <p className={styles["white-color"]}>1k ??ang nghe</p>
                  </Grid>
                </Grid>
              </Grid>

              <Grid sx={6}>
                <Grid>
                  <Grid sx={12} position="relative" className={styles.radio}>
                    <PlayArrowRounded
                      className={styles["radio-play"]}
                    ></PlayArrowRounded>
                    <img
                      className={styles.svg}
                      width={"140px"}
                      height={"140px"}
                      src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/4/8/c/e/48cefd41cfc03533d52303190f47e6ef.jpg"
                    ></img>
                    <img
                      className={styles["img-host"]}
                      width={"43px"}
                      height={"43px"}
                      src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/1/3/0/5/1305cd954d22d89fef4354301613fd68.jpg"
                    ></img>
                    <img
                      className={styles["img-label"]}
                      src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/live-tag.svg"
                    ></img>
                  </Grid>
                  <Grid sx={12} textAlign="center">
                    <h3 className={styles["white-color"]}>Bolero</h3>
                    <p className={styles["white-color"]}>620 ??ang nghe</p>
                  </Grid>
                </Grid>
              </Grid>

              <Grid sx={6}>
                <Grid>
                  <Grid sx={12} position="relative" className={styles.radio}>
                    <PlayArrowRounded
                      className={styles["radio-play"]}
                    ></PlayArrowRounded>
                    <img
                      className={styles.svg}
                      width={"140px"}
                      height={"140px"}
                      src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/1/3/0/5/1305cd954d22d89fef4354301613fd68.jpg"
                    ></img>
                    <img
                      className={styles["img-host"]}
                      width={"43px"}
                      height={"43px"}
                      src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/c/f/2/4/cf2428f7e56a8c2a52d84cb106891de2.jpg"
                    ></img>
                    <img
                      className={styles["img-label"]}
                      src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/live-tag.svg"
                    ></img>
                  </Grid>
                  <Grid sx={12} textAlign="center">
                    <h3 className={styles["white-color"]}>K-POP</h3>
                    <p className={styles["white-color"]}>32 ??ang nghe</p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </section>

          <section className={styles.content}>
            <Grid display={"flex"} gap={1}>
              <Grid sx={4}>
                <img
                  className={styles["zing-chart"]}
                  src="https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/song-vn-2x.jpg"
                ></img>
              </Grid>
              <Grid sx={4}>
                <img
                  className={styles["zing-chart"]}
                  src="https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/web_song_usuk.jpg"
                ></img>
              </Grid>
              <Grid sx={4}>
                <img
                  className={styles["zing-chart"]}
                  src="https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/web_song_kpop.jpg"
                ></img>
              </Grid>
            </Grid>
          </section>

          <section className={styles.content}>
            <Swiper
              modules={[Navigation]}
              speed={900}
              slidesPerView={1}
              spaceBetween={50}
              effect="fade"
              navigation={true}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                600: {
                  slidesPerView: 3,
                },
                900: {
                  slidesPerView: 4,
                },
                1200: {
                  slidesPerView: 5,
                },
              }}
            >
              <SwiperSlide>
                <img
                  width={"120px"}
                  src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/onlyc.png"
                ></img>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  width={"120px"}
                  src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/trinh-thanh-binh.png"
                ></img>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  width={"120px"}
                  src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/erik.png"
                ></img>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  width={"120px"}
                  src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/karik.png"
                ></img>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  width={"120px"}
                  src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/jack.png"
                ></img>
              </SwiperSlide>
              <SwiperSlide>
                <a href="/singer/singer">
                  <img
                    width={"120px"}
                    src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/huong-ly.png"
                  ></img>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  width={"120px"}
                  src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/duc-phuc.png"
                ></img>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  width={"120px"}
                  src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/chi-dan.png"
                ></img>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  width={"120px"}
                  src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/justatee.png"
                ></img>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  width={"120px"}
                  src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/hoa-minzy.png"
                ></img>
              </SwiperSlide>
            </Swiper>
          </section>

          <section className={styles.content}>
            <h2 className={styles["white-color"]}>Top 100</h2>
            <Grid container xs={12}>
              <Grid xs={3} className={styles["overflow-hidden"]}>
                <img
                  className={styles["zing-chart"]}
                  src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/d/8/5/2/d852eba51a52ebbbe73359ae387f4345.jpg"
                ></img>
                <div className={styles["text-ellippsis"]}>
                  <strong>Top 100 B??i h??t nh???c tr??? hay nh???t</strong>
                </div>
              </Grid>
              <Grid xs={3} className={styles["overflow-hidden"]}>
                <img
                  className={styles["zing-chart"]}
                  src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/2/5/1/0/2510059c9a513dcc9104945a46af3a5c.jpg"
                ></img>
                <div className={styles["text-ellippsis"]}>
                  <strong>Top 100 B??i h??t nh???c H??n Qu???c hay nh???t</strong>
                </div>
              </Grid>
              <Grid xs={3} className={styles["overflow-hidden"]}>
                <img
                  className={styles["zing-chart"]}
                  src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/b/d/7/fbd7e348c7acdab8ea0fc05f98fbdc74.jpg"
                ></img>
                <div className={styles["text-ellippsis"]}>
                  <strong>Top 100 POP ??u M??? hay nh???t</strong>
                </div>
              </Grid>
              <Grid xs={3} className={styles["overflow-hidden"]}>
                <img
                  className={styles["zing-chart"]}
                  src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/c/5/f/c/c5fc615c43215c6b72676f42767855ee.jpg"
                ></img>
                <div className={styles["text-ellippsis"]}>
                  <strong>Top 100 Nh???c Electronic/Dance ??u M??? hay nh???t</strong>
                </div>
              </Grid>
            </Grid>
          </section>

          <section className={styles.content}>
            <h2 className={styles["white-color"]}>Nh???c M???i</h2>
            <Swiper
              modules={[Navigation]}
              speed={900}
              slidesPerView={1}
              spaceBetween={50}
              effect="fade"
              navigation={true}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                900: {
                  slidesPerView: 2,
                },
              }}
            >
              <SwiperSlide>
                <Grid display={"flex"} className={styles["new-music"]}>
                  <img
                    width={"120px"}
                    height={"120px"}
                    src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/9/1/9/4/9194a383668ef3545ee19cdab97823c3.jpg"
                  ></img>
                  <div className={styles["new-music-title"]}>
                    <h4 className={styles["song-name"]}>
                      N???u Kh??ng Y??u S??? Kh??ng ??au L??ng
                    </h4>
                    <div className={styles["singer-name"]}>Minh V????ng M4U</div>
                    <span className={styles.rank}>#1</span>
                    <span className={styles["release-date"]}>13.12.2022</span>
                  </div>
                </Grid>
              </SwiperSlide>

              <SwiperSlide>
                <Grid display={"flex"} className={styles["new-music"]}>
                  <img
                    width={"120px"}
                    height={"120px"}
                    src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/8/5/f/7/85f71f3ce33358bcab25baa633dee1c5.jpg"
                  ></img>
                  <div className={styles["new-music-title"]}>
                    <h4 className={styles["song-name"]}>Y??u ng?????i c?? ?????c m??</h4>
                    <div className={styles["singer-name"]}>buitruonglinh</div>
                    <span className={styles.rank}>#2</span>
                    <span className={styles["release-date"]}>14.12.2022</span>
                  </div>
                </Grid>
              </SwiperSlide>
              <SwiperSlide>
                <Grid display={"flex"} className={styles["new-music"]}>
                  <img
                    width={"120px"}
                    height={"120px"}
                    src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/2/0/3/f/203f50940ab726d125ea73d5c1baac94.jpg"
                  ></img>
                  <div className={styles["new-music-title"]}>
                    <h4 className={styles["song-name"]}>
                      ?????ng Lo Nh??! C?? Anh ????y
                    </h4>
                    <div className={styles["singer-name"]}>Thi??n T??</div>
                    <span className={styles.rank}>#3</span>
                    <span className={styles["release-date"]}>04.12.2022</span>
                  </div>
                </Grid>
              </SwiperSlide>

              <SwiperSlide>
                <Grid display={"flex"} className={styles["new-music"]}>
                  <img
                    width={"120px"}
                    height={"120px"}
                    src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/7/c/4/0/7c40dd5938f5fb61dc60c6877d91bf9f.jpg"
                  ></img>
                  <div className={styles["new-music-title"]}>
                    <h4 className={styles["song-name"]}>
                      Mashup K??? V???ng Sai L???m - Thay T??m ?????i L??ng
                    </h4>
                    <div className={styles["singer-name"]}>T??ng Ph??c</div>
                    <span className={styles.rank}>#4</span>
                    <span className={styles["release-date"]}>12.12.2022</span>
                  </div>
                </Grid>
              </SwiperSlide>
              <SwiperSlide>
                <Grid display={"flex"} className={styles["new-music"]}>
                  <img
                    width={"120px"}
                    height={"120px"}
                    src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/1/5/b/1/15b1ac54515ac1cf0dd68b759deab15f.jpg"
                  ></img>
                  <div className={styles["new-music-title"]}>
                    <h4 className={styles["song-name"]}>
                      Phong D??? H??nh (MEME Vinahouse)
                    </h4>
                    <div className={styles["singer-name"]}>Tr?? Ki???n</div>
                    <span className={styles.rank}>#5</span>
                    <span className={styles["release-date"]}>13.12.2022</span>
                  </div>
                </Grid>
              </SwiperSlide>

              <SwiperSlide>
                <Grid display={"flex"} className={styles["new-music"]}>
                  <img
                    width={"120px"}
                    height={"120px"}
                    src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/6/3/e/4/63e4c54d6c395d95352d256876fccab5.jpg"
                  ></img>
                  <div className={styles["new-music-title"]}>
                    <h4 className={styles["song-name"]}>
                      Tr??t Trao Duy??n (Remix)
                    </h4>
                    <div className={styles["singer-name"]}>NB3 Ho??i B???o</div>
                    <span className={styles.rank}>#6</span>
                    <span className={styles["release-date"]}>07.12.2022</span>
                  </div>
                </Grid>
              </SwiperSlide>
              <SwiperSlide>
                <Grid display={"flex"} className={styles["new-music"]}>
                  <img
                    width={"120px"}
                    height={"120px"}
                    src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/2/8/0/f/280fc584ab89a0c71564621f2f1583f1.jpg"
                  ></img>
                  <div className={styles["new-music-title"]}>
                    <h4 className={styles["song-name"]}>Em Ch???u H??ng</h4>
                    <div className={styles["singer-name"]}>
                      Ho??ng Lan, Jin Tu???n Nam
                    </div>
                    <span className={styles.rank}>#7</span>
                    <span className={styles["release-date"]}>09.12.2022</span>
                  </div>
                </Grid>
              </SwiperSlide>

              <SwiperSlide>
                <Grid display={"flex"} className={styles["new-music"]}>
                  <img
                    width={"120px"}
                    height={"120px"}
                    src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/4/3/2/e/432e9ba2127adc06be7378902c6dd254.jpg"
                  ></img>
                  <div className={styles["new-music-title"]}>
                    <h4 className={styles["song-name"]}>Gi???c M?? ????? D??nh</h4>
                    <div className={styles["singer-name"]}>Nguy??n H??</div>
                    <span className={styles.rank}>#8</span>
                    <span className={styles["release-date"]}>08.12.2022</span>
                  </div>
                </Grid>
              </SwiperSlide>
              <SwiperSlide>
                <Grid display={"flex"} className={styles["new-music"]}>
                  <img
                    width={"120px"}
                    height={"120px"}
                    src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/e/c/e/9/ece92611940e1161c47356f648e083e1.jpg"
                  ></img>
                  <div className={styles["new-music-title"]}>
                    <h4 className={styles["song-name"]}>Ch??ng Trai C???a Em</h4>
                    <div className={styles["singer-name"]}>Duy V??n Ph???m</div>
                    <span className={styles.rank}>#9</span>
                    <span className={styles["release-date"]}>09.12.2022</span>
                  </div>
                </Grid>
              </SwiperSlide>

              <SwiperSlide>
                <Grid display={"flex"} className={styles["new-music"]}>
                  <img
                    width={"120px"}
                    height={"120px"}
                    src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/3/a/6/c/3a6ca20dcb9b641e048813536d8ee4a8.jpg"
                  ></img>
                  <div className={styles["new-music-title"]}>
                    <h4 className={styles["song-name"]}>Anh C??ng Bi???t ?????</h4>
                    <div className={styles["singer-name"]}>Lil Z, Dani D</div>
                    <span className={styles.rank}>#10</span>
                    <span className={styles["release-date"]}>08.12.2022</span>
                  </div>
                </Grid>
              </SwiperSlide>
            </Swiper>
          </section>

          <section className={styles.content}>
            <h5 className={styles.partners}>?????i T??c ??m Nh???c</h5>
            <Grid container xs={12}>
              <Grid xs={6}>
                <Grid container xs={12}>
                  <Grid xs={3}>
                    <img
                      className={styles["bg-white"]}
                      width={"90px"}
                      height={"45px"}
                      src="https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/yg.png"
                    ></img>
                  </Grid>
                  <Grid xs={3}>
                    <img
                      className={styles["bg-white"]}
                      width={"90px"}
                      height={"45px"}
                      src="https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/Kakao-M.png"
                    ></img>
                  </Grid>
                  <Grid xs={3}>
                    <img
                      className={styles["bg-white"]}
                      width={"90px"}
                      height={"45px"}
                      src="https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/orcahrd.png"
                    ></img>
                  </Grid>
                  <Grid xs={3}>
                    <img
                      className={styles["bg-white"]}
                      width={"90px"}
                      height={"45px"}
                      src="https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/beggers.png"
                    ></img>
                  </Grid>
                </Grid>
              </Grid>
              <Grid xs={6}>
                <Grid container xs={12}>
                  <Grid xs={3}>
                    <img
                      className={styles["bg-white"]}
                      width={"90px"}
                      height={"45px"}
                      src="https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/empire.png"
                    ></img>
                  </Grid>
                  <Grid xs={3}>
                    <img
                      className={styles["bg-white"]}
                      width={"90px"}
                      height={"45px"}
                      src="https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/sony.png"
                    ></img>
                  </Grid>
                  <Grid xs={3}>
                    <img
                      className={styles["bg-white"]}
                      width={"90px"}
                      height={"45px"}
                      src="https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/universal-1.png"
                    ></img>
                  </Grid>
                  <Grid xs={3}>
                    <img
                      className={styles["bg-white"]}
                      width={"90px"}
                      height={"45px"}
                      src="https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/SM-Entertainment.png"
                    ></img>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container xs={12}>
              <Grid xs={6}>
                <Grid container xs={12}>
                  <Grid xs={9}></Grid>
                  <Grid xs={3}>
                    <img
                      className={styles["bg-white"]}
                      width={"90px"}
                      height={"45px"}
                      src="https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/monstercat.png"
                    ></img>
                  </Grid>
                </Grid>
              </Grid>
              <Grid xs={6}>
                <Grid container xs={12}>
                  <Grid xs={3}>
                    <img
                      className={styles["bg-white"]}
                      width={"90px"}
                      height={"45px"}
                      src="https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/FUGA.png"
                    ></img>
                  </Grid>
                  <Grid xs={9}></Grid>
                </Grid>
              </Grid>
            </Grid>
          </section>

          <footer className={styles.footer}>
            <Divider color="white" />
            <div className={styles["footer-1"]}>
              <ul className={styles["footer-nav"]}>
                <li>Gi???i Thi???u</li>
                <div className={styles.line}></div>
                <li>GV-SP</li>
                <div className={styles.line}></div>
                <li>H??? Tr???</li>
                <div className={styles.line}></div>
                <li>Th???a Thu???n S??? D???ng</li>
              </ul>
              <div className={styles.down}>
                <FacebookIcon></FacebookIcon>
                <InstagramIcon></InstagramIcon>
                <img src="./img/appstore.png" width={70} height={25}></img>
                <img src="./img/gg play.png" width={70} height={25}></img>
                <img src="./img/app gallery.png" width={70} height={25}></img>
              </div>
            </div>

            <div className={styles["footer-1"]}>
              <div container className={styles["footer-2"]}>
                <img src="./img/logo.png" width={160}></img>
                <div className={styles["footer-3"]}>
                  <p>C??NG TY C??? PH???N N C T</p>
                  <p>Ch??? s??? h???u: Nguy???n V??n Thu???n</p>
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
                    Gi???y ph??p MXH s??? 499/GP-BTTTT do B??? Th??ng Tin v?? Truy???n
                    th??ng c???p ng??y 28/09/2015.
                  </p>
                </li>
                <li>
                  <p>
                    Gi???y Ch???ng nh???n ????ng k?? Kinh doanh s??? 0305535715 do S??? k???
                    ho???ch v?? ?????u t?? Tp.H??? Ch?? Minh c???p ng??y 01/03/2008.
                  </p>
                </li>
              </ul>
            </div>

            <div className={styles["footer-4"]}>
              <div className={styles["d-flex"]}>
                <LocationOnIcon></LocationOnIcon>
                <p>
                  T??a nh?? The 678 Tower, 67 Ho??ng V??n Th??i, P.T??n Ph??, Q.7,
                  TP.HCM
                </p>
              </div>
              <div className={styles["d-flex"]}>
                <CallIcon></CallIcon>
                <p>(028) 3868 7979</p>
              </div>
            </div>
          </footer>
        </div> */}

        <div className={styles["right-side"]}>
          <div className={styles["play-now"]}>
            <audio id="audio" src={songs[1].src}></audio>
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
                      <b>???????????????????????????????????????????????? (Can   ;t win)</b>
                    </Typography>
                    <Typography
                      noWrap
                      letterSpacing={-0.25}
                      className={styles["white-color"]}
                    >
                      Chilling Sunday ????????????????????????????????????????????????
                    </Typography>
                  </Box>
                </Box>
                <input
                  style={{
                    color:
                      theme.palette.mode === "dark"
                        ? "#fff"
                        : "rgba(0,0,0,0.87)",
                    height: 4,
                    width: 300,
                  }}
                  type={"range"}
                  min={0}
                  max={duration}
                  value={position}
                  step={1}
                  onChange={(e) => {
                    document.getElementById("audio").currentTime =
                      e.target.value;
                    setPosition(e.target.value);
                  }}
                ></input>
                {/* <Slider
                  size="small"
                  min={0}
                  max={duration}
                  onChange={(e) => {
                    updateRealTime();
                    document.getElementById("audio").currentTime =
                      e.target.value;
                    setPosition(e.target.value);
                  }}
                  value={position}
                  sx={{
                    color:
                      theme.palette.mode === "dark"
                        ? "#fff"
                        : "rgba(0,0,0,0.87)",
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
                /> */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mt: -2,
                    pt: 2,
                  }}
                >
                  <TinyText className={styles["white-color"]}>
                    {formatDuration(position)}
                  </TinyText>
                  <TinyText className={styles["white-color"]}>
                    {formatDuration(duration)}
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
                        onClick={() => {
                          document.getElementById("audio").play();
                        }}
                        sx={{ fontSize: "3rem" }}
                        htmlColor={mainIconColor}
                      />
                    ) : (
                      <PauseRounded
                        onClick={() => {
                          document.getElementById("audio").pause();
                        }}
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
                    B??i h??t
                    <MoreVertIcon fontSize="12"></MoreVertIcon>
                  </Grid>
                  <Grid xs={3} className={styles["d-flex"]} gap={1}>
                    L?????t nghe
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
                      <Grid xs={12}>M???y khi</Grid>
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
                      <Grid xs={12}>C?? ch??i C?? ch???u</Grid>
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
                      <Grid xs={12}>Thanh Xu??n</Grid>
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
          <div className={styles["play-bottom"]}>
            <Grid container xs={12}>
              <Grid xs={3}>
                <div className={styles["play-now-song"]}>
                  Si??u Nh??n Cu???ng Phong
                </div>
                <div className={styles["play-now-song"]}>hsdfjs</div>
              </Grid>
              <Grid xs={6}>
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
                      theme.palette.mode === "dark"
                        ? "#fff"
                        : "rgba(0,0,0,0.87)",
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
              </Grid>
              <Grid xs={3} className={styles.abc}>
                <FormatListBulletedIcon
                  className={styles["list-bottom"]}
                ></FormatListBulletedIcon>
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
                        width: 12,
                        height: 12,
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
                </Stack>
              </Grid>
            </Grid>
          </div>
        </div>
      </main>
    </div>
  );
}
