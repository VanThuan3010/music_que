import * as React from "react";
import styles from "../singer/singer.module.css";
import { styled, useTheme } from "@mui/material/styles";
import { useState } from "react";

import Divider from "@mui/material/Divider";
import Link from "next/link";
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
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

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

const singer = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [about, setAbout] = useState(false);
  const openAbout = () => {
    setAbout(true);
  };
  const closeAbout = () => {
    setAbout(false);
  };
  const [registerForm, setRegisterForm] = useState(false);
  const openRegisterForm = () => {
    setRegisterForm(true);
  };
  const closeRegisterForm = () => {
    setRegisterForm(false);
  };

  return (
    <div>
      <main className={styles.main}>
        <div className={styles["between-side"]}>
          {/* <div className={styles["search-acc"]}>
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
          </div> */}

          <div className={styles.content}>
            <div className={styles["p-relative"]}>
              <div className={styles["banner-content"]}>
                <div className={styles.flex}>
                  <h1>H????ng Ly</h1>
                  <PlayArrowRounded
                    className={styles["btn-play"]}
                  ></PlayArrowRounded>
                </div>
                <div className={styles.flex}>
                  <p>681.567 ng?????i quan t??m</p>
                  <Button className={styles["btn-follow"]}>
                    <GroupAddIcon
                      className={styles["icon-follow"]}
                    ></GroupAddIcon>
                    Quan T??m
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
            <h2>B??i H??t N???i B???t</h2>
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
                  <strong>N??? C?????i Xu??n (Single)</strong>
                </p>
                <p>M???i ph??t h??nh 12/2022</p>
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
                  <strong>N??? C?????i Xu??n (Single)</strong>
                </p>
                <p>M???i ph??t h??nh 12/2022</p>
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
                  <strong>N??? C?????i Xu??n (Single)</strong>
                </p>
                <p>M???i ph??t h??nh 12/2022</p>
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
                    <div>Th??? Gi???i Trong Em</div>
                    <div>H????ng Ly, L.Y.M</div>
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
                    <div>Th??? Gi???i Trong Em</div>
                    <div>H????ng Ly, L.Y.M</div>
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
                    <div>Th??? Gi???i Trong Em</div>
                    <div>H????ng Ly, L.Y.M</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.content}>
            <h2>B???n C?? Th??? Th??ch</h2>
            <div className={styles["d-flex"]}>
              <div className={styles["other-singer"]}>
                <img
                  className={styles["circle-img"]}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671551337/Music%20Website/img/singers/f7491ffdb112675f1322fd1c1c8b57bf_pgy7fy.webp"
                ></img>
                <div>Minh V????ng M4U</div>
                <div>205k Quan T??m</div>
                <Button className={styles["btn-follow"]}>
                  <GroupAddIcon
                    className={styles["icon-follow"]}
                  ></GroupAddIcon>
                  Quan T??m
                </Button>
              </div>
              <div className={styles["other-singer"]}>
                <img
                  className={styles["circle-img"]}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671551337/Music%20Website/img/singers/f7491ffdb112675f1322fd1c1c8b57bf_pgy7fy.webp"
                ></img>
                <div>Minh V????ng M4U</div>
                <div>205k Quan T??m</div>
                <Button className={styles["btn-follow"]}>
                  <GroupAddIcon
                    className={styles["icon-follow"]}
                  ></GroupAddIcon>
                  Quan T??m
                </Button>
              </div>
              <div className={styles["other-singer"]}>
                <img
                  className={styles["circle-img"]}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671551337/Music%20Website/img/singers/f7491ffdb112675f1322fd1c1c8b57bf_pgy7fy.webp"
                ></img>
                <div>Minh V????ng M4U</div>
                <div>205k Quan T??m</div>
                <Button className={styles["btn-follow"]}>
                  <GroupAddIcon
                    className={styles["icon-follow"]}
                  ></GroupAddIcon>
                  Quan T??m
                </Button>
              </div>
              <div className={styles["other-singer"]}>
                <img
                  className={styles["circle-img"]}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671551337/Music%20Website/img/singers/f7491ffdb112675f1322fd1c1c8b57bf_pgy7fy.webp"
                ></img>
                <div>Minh V????ng M4U</div>
                <div>205k Quan T??m</div>
                <Button className={styles["btn-follow"]}>
                  <GroupAddIcon
                    className={styles["icon-follow"]}
                  ></GroupAddIcon>
                  Quan T??m
                </Button>
              </div>
              <div className={styles["other-singer"]}>
                <img
                  className={styles["circle-img"]}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671551337/Music%20Website/img/singers/f7491ffdb112675f1322fd1c1c8b57bf_pgy7fy.webp"
                ></img>
                <div>Minh V????ng M4U</div>
                <div>205k Quan T??m</div>
                <Button className={styles["btn-follow"]}>
                  <GroupAddIcon
                    className={styles["icon-follow"]}
                  ></GroupAddIcon>
                  Quan T??m
                </Button>
              </div>
            </div>
          </div>

          <div className={styles.content}>
            <h2>V??? Ca S???</h2>
            <div className={styles["width-100"]}>
              <div className={styles["img-about"]}>
                <img
                  className={styles["img-single"]}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671551337/Music%20Website/img/singers/Huong%20Ly/ef84f25bebe0bb917735de836a3e417f_almjdc.webp"
                ></img>
              </div>
              <div className={styles["img-about"]}>
                C?? n??ng Nguy???n H????ng Ly hi???n ??ang s??? h???u nh???ng b???n cover ???l??m
                m??a l??m gi????? tr??n m???ng x?? h???i v???i h??ng tri???u l?????t nghe, c?? ???????c
                nh???ng ng?????i y??u m???n ?????t bi???t danh l?? Ng???c N??? cover b???i v??? ngo??i
                xinh ?????p, n???i b???t c??ng gi???ng h??t ng???t ng??o, ?????y n???i l???c Nh???ng
                b???n cover c???a H????ng Ly ???????c y??u m???n b???i c??ch th??? hi???n t??? nhi??n,
                gi??u c???m x??c. S??? k???t h???p...{" "}
                <span onClick={openAbout}>Xem Th??m</span>
                <h2>681.567</h2>
                <div>Ng?????i quan t??m</div>
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
                      C?? n??ng Nguy???n H????ng Ly hi???n ??ang s??? h???u nh???ng b???n cover
                      ???l??m m??a l??m gi????? tr??n m???ng x?? h???i v???i h??ng tri???u l?????t
                      nghe, c?? ???????c nh???ng ng?????i y??u m???n ?????t bi???t danh l?? Ng???c N???
                      cover b???i v??? ngo??i xinh ?????p, n???i b???t c??ng gi???ng h??t ng???t
                      ng??o, ?????y n???i l???c Nh???ng b???n cover c???a H????ng Ly ???????c y??u
                      m???n b???i c??ch th??? hi???n t??? nhi??n, gi??u c???m x??c. S??? k???t h???p
                      v???i nhi???u nh???c c??? kh??c nhau c??ng mang ?????n nh???c c???m m???i l???
                      v?? b???t ng???.
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
        </div>

        <div className={styles["right-side"]}>
          <div className={styles["play-now"]}>
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
                      <b>???????????????????????????????????????????????? (Can ;t win)</b>
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
};

export default singer;
