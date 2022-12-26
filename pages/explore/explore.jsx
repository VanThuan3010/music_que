import * as React from "react";
import styles from "../explore/explore.module.css";
import { styled, useTheme } from "@mui/material/styles";

import Divider from "@mui/material/Divider";
import Link from "next/link";
import { Grid1x2, HouseDoorFill } from "react-bootstrap-icons";
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

const explore = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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
                      <div className={styles["d-flex"]} position="relative">
                        <PermIdentityIcon
                          className={styles["input-icon"]}
                        ></PermIdentityIcon>
                        <input
                          className={styles["input-form"]}
                          type="text"
                          {...register("username", { required: true })}
                          placeholder="Nhập tên đăng nhập"
                        ></input>
                      </div>
                      {errors.username && (
                        <div className={styles.notification}>
                          Bạn cần nhập tên tài khoản
                        </div>
                      )}
                      <div className={styles["d-flex"]} position="relative">
                        <KeyboardIcon
                          className={styles["input-icon"]}
                        ></KeyboardIcon>
                        <input
                          className={styles["input-form"]}
                          type="password"
                          placeholder="Nhập mật khẩu"
                          {...register("password", { required: true })}
                        ></input>
                      </div>
                      {errors.password && (
                        <div className={styles.notification}>
                          Bạn cần nhập mật khẩu
                        </div>
                      )}
                      <div className={styles["d-flex"]}>
                        <Checkbox
                          size="12"
                          className={styles["white-color"]}
                        ></Checkbox>
                        <p className={styles["white-color"]}>Ghi nhớ</p>
                      </div>
                      <Button className={styles["form-submit"]}>
                        Đăng Nhập
                      </Button>
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
                      <div className={styles["d-flex"]} position="relative">
                        <PermIdentityIcon
                          className={styles["input-icon"]}
                        ></PermIdentityIcon>
                        <input
                          className={styles["input-form"]}
                          type="text"
                          name="usernameRegister"
                          placeholder="Nhập tên đăng nhập"
                          {...register("usernameRegister", {
                            required: "Vui lòng nhập tên tài khoản",
                            minLength: {
                              value: 6,
                              message:
                                "Tên đăng nhập cần phải có từ 6 đến 20 ký tự",
                            },
                            maxLength: {
                              value: 20,
                              message:
                                "Tên đăng nhập cần phải có từ 6 đến 20 ký tự",
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
                          placeholder="Nhập mật khẩu"
                          name="passwordRegister"
                          {...register("passwordRegister", {
                            required: "Vui lòng nhập mật khẩu",
                            pattern: {
                              value:
                                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
                              message:
                                "Mật khẩu phải chứa ít nhất 8 ký tự, trong có phải có ít nhất 1 ký tự in hoa, 1 ký tự thường và 1 ký tự số",
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
                          placeholder="Nhập lại mật khẩu"
                          name="rePassword"
                          {...register("rePassword", {
                            required: "Vui lòng nhập lại mật khẩu",
                            validate: {
                              match: (v) =>
                                v === getValues("passwordRegister") ||
                                "Mật khẩu nhập lại không chính xác",
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
                          placeholder="Nhập Email"
                          name="email"
                          {...register("email", {
                            required: "Vui lòng nhập Email",
                            pattern: {
                              value:
                                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                              message: "Trường này phải là Email",
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
                          Tôi đã đọc và đồng ý với các điều khoản sử dụng
                        </p>
                      </div>
                      <Button className={styles["form-submit"]}>Đăng Ký</Button>
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
                </form>
              </Modal>
            </div>
          </div>

          <div className={styles.content}>
            <img
              className={styles["max-width"]}
              src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671638392/Music%20Website/img/public/c5fd5a2092ba742c23782124fc0e59cc_fhe1ph.jpg"
              alt=""
            />
            <h2>Tâm Trạng Và Hoạt Động</h2>
            <Grid xs={12} container>
              <Grid xs={3} position="relative">
                <div className={styles["title-emotion"]}>Khúc nhạc Vui</div>
                <img
                  className={styles["img-emotion"]}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671638312/Music%20Website/img/explore/09090b19d3417d364547db3027d141d5_vlwkc7.jpg"
                ></img>
              </Grid>
              <Grid xs={3} position="relative">
                <div className={styles["title-emotion"]}>Running</div>
                <img
                  className={styles["img-emotion"]}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671638314/Music%20Website/img/explore/85d1cfedf63d33e676e85071ab023f66_bdx7tz.jpg"
                ></img>
              </Grid>
              <Grid xs={3} position="relative">
                <div className={styles["title-emotion"]}>Yoga - Spa</div>
                <img
                  className={styles["img-emotion"]}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671638315/Music%20Website/img/explore/d0d772a6c3e35b3e768d5c3ebf644ecd_fmdttr.jpg"
                ></img>
              </Grid>
              <Grid xs={3} position="relative">
                <div className={styles["title-emotion"]}>Driving</div>
                <img
                  className={styles["img-emotion"]}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671638313/Music%20Website/img/explore/2e966bf47b1989fdff7149c7a1b0f25e_swazfh.jpg"
                ></img>
              </Grid>
              <Grid xs={3} position="relative">
                <div className={styles["title-emotion"]}>Tập Trung</div>
                <img
                  className={styles["img-emotion"]}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671638314/Music%20Website/img/explore/b1eb8ae84392957f9b9d1ce2bb42aab9_jlsymf.jpg"
                ></img>
              </Grid>
              <Grid xs={3} position="relative">
                <div className={styles["title-emotion"]}>chơi Game</div>
                <img
                  className={styles["img-emotion"]}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671638316/Music%20Website/img/explore/4df44f0a15edb254717c383cf256b193_zx7j66.jpg"
                ></img>
              </Grid>
              <Grid xs={3} position="relative">
                <div className={styles["title-emotion"]}>tình Yêu</div>
                <img
                  className={styles["img-emotion"]}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671638312/Music%20Website/img/explore/0aef849d584c7e995073617f53b9ac24_hdkxhx.jpg"
                ></img>
              </Grid>
              <Grid xs={3} position="relative">
                <div className={styles["title-emotion"]}>Thư Giãn</div>
                <img
                  className={styles["img-emotion"]}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671638313/Music%20Website/img/explore/0fd1da7445b21a752a1c4282b06f2cf0_ngtqsk.jpg"
                ></img>
              </Grid>
              <Grid xs={3} position="relative">
                <div className={styles["title-emotion"]}>Giai Điệu Buồn</div>
                <img
                  className={styles["img-emotion"]}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671638315/Music%20Website/img/explore/e680570f74b3497c95d96f6ba6db7b07_jqwka6.jpg"
                ></img>
              </Grid>
              <Grid xs={3} position="relative">
                <div className={styles["title-emotion"]}>Ngủ Ngon</div>
                <img
                  className={styles["img-emotion"]}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671638315/Music%20Website/img/explore/4a3b5265ee2c9e2c84f5a88194382b5d_j9elqa.jpg"
                ></img>
              </Grid>
              <Grid xs={3} position="relative">
                <div className={styles["title-emotion"]}>Motivation</div>
                <img
                  className={styles["img-emotion"]}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671638316/Music%20Website/img/explore/951bb18f468ea711a81a0dd28a8797d4_u8ryye.jpg"
                ></img>
              </Grid>
              <Grid xs={3} position="relative">
                <div className={styles["title-emotion"]}>Tiệc Tùng</div>
                <img
                  className={styles["img-emotion"]}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671638315/Music%20Website/img/explore/8047a5134646835763068f7439e17f2b_yzakh8.jpg"
                ></img>
              </Grid>
              <Grid xs={3} position="relative">
                <div className={styles["title-emotion"]}>Workout</div>
                <img
                  className={styles["img-emotion"]}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671638317/Music%20Website/img/explore/db5cf069b328c7858b2d9642cc6b4529_nrgzzm.jpg"
                ></img>
              </Grid>
              <Grid xs={3} position="relative">
                <div className={styles["title-emotion"]}>Dinner</div>
                <img
                  className={styles["img-emotion"]}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671638312/Music%20Website/img/explore/1cc8ae9704ae8fb7e34487ce744083a9_dlgapd.jpg"
                ></img>
              </Grid>
              <Grid xs={3} position="relative">
                <div className={styles["title-emotion"]}>Cà phê</div>
                <img
                  className={styles["img-emotion"]}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671638314/Music%20Website/img/explore/bbb0a8963e9ed3b81974613b52b9476c_izbnru.jpg"
                ></img>
              </Grid>
              <Grid xs={3} position="relative">
                <div className={styles["title-emotion"]}>Du Lịch</div>
                <img
                  className={styles["img-emotion"]}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671638315/Music%20Website/img/explore/e3d43659c6dc756f87f4e44220313f92_bzakzl.jpg"
                ></img>
              </Grid>
            </Grid>
          </div>

          <div className={styles.content}>
            <h2>Quốc Gia</h2>
            <Grid container xs={12}>
              <Grid xs={3} position={"relative"}>
                <div className={styles["country-name"]}>Việt Nam</div>
                <img
                  className={styles["img-country"]}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671638310/Music%20Website/img/country/f471924112f2ecda11cac4cbf22ce40b_gjuisn.jpg"
                ></img>
              </Grid>
              <Grid xs={3} position={"relative"}>
                <div className={styles["country-name"]}>Âu Mỹ</div>
                <img
                  className={styles["img-country"]}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671638312/Music%20Website/img/country/48089f082510365abae994f3780647b9_mcjdb7.jpg"
                ></img>
              </Grid>
              <Grid xs={3} position={"relative"}>
                <div className={styles["country-name"]}>Hàn Quốc</div>
                <img
                  className={styles["img-country"]}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671638311/Music%20Website/img/country/beb0eb88a966c3d90c882b066a3e0b7e_izjq0y.jpg"
                ></img>
              </Grid>
              <Grid xs={3} position={"relative"}>
                <div className={styles["country-name"]}>Trung Quốc</div>
                <img
                  className={styles["img-country"]}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671638313/Music%20Website/img/country/fad0f8e33343e9652f418872db3a8872_m3n5sq.jpg"
                ></img>
              </Grid>
            </Grid>
          </div>

          <div className={styles.content}>
            <h2>Trữ Tình & Bolero</h2>
            <Grid container xs={12}>
              <Grid xs={3}>
                <img
                  className={styles.img}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671638317/Music%20Website/img/bolero/159226aaebc0421c28d4921c041dc862_kxsggv.webp"
                ></img>
                <div className={styles.title}>Bolero Hay Nhất</div>
              </Grid>
              <Grid xs={3}>
                <img
                  className={styles.img}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671638317/Music%20Website/img/bolero/404404112f537ca36cc40518522fa73d_kljbmw.webp"
                ></img>
                <div className={styles.title}>Bolero Mới Nhất</div>
              </Grid>
              <Grid xs={3}>
                <img
                  className={styles.img}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671638317/Music%20Website/img/bolero/230c62cdb5f2b0849b413dcb26f58cb9_grjxo7.webp"
                ></img>
                <div className={styles.title}>Tuyệt đình Bolero Trữ tình</div>
              </Grid>
              <Grid xs={3}>
                <img
                  className={styles.img}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671638317/Music%20Website/img/bolero/09f1a4ce97e1dd872e8110b4f741d622_ghpjpi.webp"
                ></img>
                <div className={styles.title}>Nhạc Quê hương Hôm Nay</div>
              </Grid>
            </Grid>
          </div>

          <div className={styles.content}>
            <h2>EDM</h2>
            <Grid container xs={12}>
              <Grid xs={3}>
                <img
                  className={styles.img}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671638313/Music%20Website/img/edm/df50c3853b3a9129d590350a217fca14_re3kc9.webp"
                ></img>
                <div className={styles.title}>EDM Now</div>
              </Grid>
              <Grid xs={3}>
                <img
                  className={styles.img}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671638311/Music%20Website/img/edm/1bf5589c4871d5f29800d4a8379a6953_waxe4a.webp"
                ></img>
                <div className={styles.title}>Today's EDM Hits</div>
              </Grid>
              <Grid xs={3}>
                <img
                  className={styles.img}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671638311/Music%20Website/img/edm/51538ab5b46988dc94e10705fb5d974c_wmhjeo.webp"
                ></img>
                <div className={styles.title}>Dance Rewind</div>
              </Grid>
              <Grid xs={3}>
                <img
                  className={styles.img}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671638311/Music%20Website/img/edm/4f54aa9746c3a9cb00127888cc563b41_mpyaeu.webp"
                ></img>
                <div className={styles.title}>EDM Đỉnh Cao</div>
              </Grid>
            </Grid>
          </div>

          <div className={styles.content}>
            <h2>Remix</h2>
            <Grid container xs={12}>
              <Grid xs={3}>
                <img
                  className={styles.img}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671638316/Music%20Website/img/remix/3979c89e26de238c4e3c55b85d397c28_qfuvfa.webp"
                ></img>
                <div className={styles.title}>Remix việt Ngày Nay</div>
              </Grid>
              <Grid xs={3}>
                <img
                  className={styles.img}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671638317/Music%20Website/img/remix/fe5dfebabeb63934a45bb8240db7e1ea_oo0z6e.webp"
                ></img>
                <div className={styles.title}>Nhạc Trẻ Vinahouse</div>
              </Grid>
              <Grid xs={3}>
                <img
                  className={styles.img}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671638311/Music%20Website/img/edm/51538ab5b46988dc94e10705fb5d974c_wmhjeo.webp"
                ></img>
                <div className={styles.title}>Dance Rewind</div>
              </Grid>
              <Grid xs={3}>
                <img
                  className={styles.img}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671638317/Music%20Website/img/remix/d5762221d5031c280bd1b127dcd2463d_kwhede.webp"
                ></img>
                <div className={styles.title}>Top Hits Remix</div>
              </Grid>
            </Grid>
          </div>

          <div className={styles.content}>
            <h2>Nhạc Phim</h2>
            <Grid container xs={12}>
              <Grid xs={3}>
                <img
                  className={styles.img}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671638315/Music%20Website/img/OST/4e7abbcbbfe29fc2db4e5349c59ef5d5_gb7fev.webp"
                ></img>
                <div className={styles.title}>Nhạc Phim Hoa Ngữ Mới Nhất</div>
              </Grid>
              <Grid xs={3}>
                <img
                  className={styles.img}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671638316/Music%20Website/img/OST/fcc81304bb884560bdec3f3fffc2eec7_azwn79.webp"
                ></img>
                <div className={styles.title}>Nhạc phim Âu Mỹ chọn lọc</div>
              </Grid>
              <Grid xs={3}>
                <img
                  className={styles.img}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671638316/Music%20Website/img/OST/6971911a2c8d109c55168f8d1c8153f8_ptgxk1.webp"
                ></img>
                <div className={styles.title}>nhạc Phim Hàn Quốc Bất Hủ</div>
              </Grid>
              <Grid xs={3}>
                <img
                  className={styles.img}
                  src="https://res.cloudinary.com/dd4k5r61c/image/upload/v1671638315/Music%20Website/img/OST/25b6a4a2b46f73a43d8d4489b3181d09_gprtuo.webp"
                ></img>
                <div className={styles.title}>Nhạc Phim Cổ Trang Hay Nhất</div>
              </Grid>
            </Grid>
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
          <div className={styles["play-bottom"]}>
            <Grid container xs={12}>
              <Grid xs={3}>
                <div className={styles["play-now-song"]}>
                  Siêu Nhân Cuồng Phong
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

export default explore;
