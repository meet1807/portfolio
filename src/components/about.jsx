import React, { useState, useEffect } from "react";
import {
  Grid,
  Avatar,
  makeStyles,
  Typography,
  Button,
  Popover,
  Box,
} from "@material-ui/core";
import { GitHub, LinkedIn, Mail, Twitter, Instagram } from "@material-ui/icons";

import meet from "../images/meet.jpg";
import { CopyToClipboard } from "react-copy-to-clipboard";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: theme.spacing(13),

    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
  popover: {
    pointerEvents: "none",
  },
  paper: {
    padding: theme.spacing(1),
    backgroundColor: "transparent",
  },
  image: {
    width: theme.spacing(28),
    height: theme.spacing(28),
  },
  name: {
    color: "#e3e3de",
  },
  text: {
    color: "#98a6ad",
  },
  icon: {
    color: "#98a6ad",
    fontSize: theme.spacing(5),
    marginLeft: theme.spacing(2),
  },
}));

const About = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  useEffect(() => {
    if (anchorEl) {
      document.body.onwheel = handlePopoverClose;
      document.body.addEventListener("touchstart", handlePopoverClose, false);
    }
    return () => {
      document.body.onwheel = undefined;
      document.body.removeEventListener(
        "touchstart",
        handlePopoverClose,
        false
      );
    };
  }, [anchorEl]);

  return (
    <Grid
      item
      container
      justify="center"
      direction="column"
      alignItems="center"
      className={classes.root}
    >
      <Grid item>
        <Avatar alt="Meet Patel" src={meet} className={classes.image} />
      </Grid>
      <Grid item>
        <Typography variant="h3" className={classes.name}>
          Meet Patel
        </Typography>
        <Typography variant="h5" className={classes.text}>
          Software Engineer
        </Typography>
      </Grid>
      <Grid item>
        <Button
          variant="outlined"
          color="inherit"
          className={classes.text}
          href="https://drive.google.com/file/d/1g5Ox187cZh8AEssir1By4JwlpwrzUGRf/view?usp=sharing"
        >
          Resume
        </Button>
      </Grid>

      <Grid item>
        <Box mb={2}>
          <Typography variant="h6" className={classes.text}>
            To have a cup of coffee...
          </Typography>
        </Box>
        <a
          href="https://www.github.com/meet1807"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub className={classes.icon} />
        </a>
        <a
          href="https://www.linkedin.com/in/meet1807/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn className={classes.icon} />
        </a>

        <CopyToClipboard text="meetp6767@gmail.com">
          <Mail
            className={classes.icon}
            aria-owns={open ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          />
        </CopyToClipboard>

        <Popover
          id="mouse-over-popover"
          className={classes.popover}
          classes={{
            paper: classes.paper,
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <Typography variant="h6" className={classes.text}>
            meetp6767@gmail.com
          </Typography>
          <Typography className={classes.text}>
            (Click the icon to copy)
          </Typography>
        </Popover>

        <a
          href="https://twitter.com/meet_mist"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter className={classes.icon} />
        </a>
        <a
          href="https://www.instagram.com/_mit777/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram className={classes.icon} />
        </a>
      </Grid>
    </Grid>
  );
};

export default About;
