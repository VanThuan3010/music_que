import * as React from "react";
import styles from "../../styles/all.module.css";
import { styled, useTheme } from "@mui/material/styles";
import { useState } from "react";

import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
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
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";

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

const Music = () => {
  const theme = useTheme();
  const duration = 200;
  const [position, setPosition] = useState(32);
  const [paused, setPaused] = useState(false);
  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }
  const mainIconColor = theme.palette.mode === "dark" ? "#fff" : "#000";
  const lightIconColor =
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)";

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
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
                  <b>คนเก่าเขาทำไว้ดี Cant win</b>
                </Typography>
                <Typography
                  noWrap
                  letterSpacing={-0.25}
                  className={styles["white-color"]}
                >
                  Chilling Sunday คนเก่าเขาทำไว้ดี
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
                <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
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
                    theme.palette.mode === "dark" ? "#fff" : "rgba(0,0,0,0.87)",
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
              <audio
                id="audio"
                src="https://res.cloudinary.com/dd4k5r61c/video/upload/v1672154911/Music%20Website/audio/Thu%E1%BB%91c_l%C3%A0o_Ngh%E1%BB%87_an_dl1a6f.mp3"
              ></audio>
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
            <div className={styles["play-now-song"]}>Siêu Nhân Cuồng Phong</div>
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
                <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
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
                    theme.palette.mode === "dark" ? "#fff" : "rgba(0,0,0,0.87)",
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
  );
};

export default Music;
