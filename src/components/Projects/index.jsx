import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Divider from '@mui/material/Divider';

import { projects } from "./projects";
import Modal from "./modal";
import SjyMap from "./maps/Sjy";
import HeiheMap from "./maps/Heihe";

import "ol/ol.css";
import styles from "@src/styles.less";

const maps = {
  Sjy: <SjyMap />,
  Heihe: <HeiheMap />,
};

export default function index() {
  const [open, setOpen] = React.useState(false);
  const [image, setImage] = React.useState(null);
  const [title, setTitle] = React.useState(null);
  const handleOpen = (img, _title) => {
    setImage(img);
    setTitle(_title);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const genItem = (item, index) => {
    return (
      <Box key={"project_" + index}>
        <Typography variant="h5" gutterBottom component="div">
          {index + 1}. {item.title}{" "}
          <span className={styles.time}>
            {item.time}
          </span>
          {item.website ? (
            <span className={styles.website}>
              &nbsp;•&nbsp;
              <a href={item.website} target="_blank" rel="noopener noreferrer">
                <LanguageIcon fontSize="12" />
                Website
              </a>
            </span>
          ) : (
            ""
          )}
        </Typography>
        <Typography variant="body2" gutterBottom component="div">
          <ul className={styles.outIndention}>
            {item.achievement &&
              item.achievement.map((a, i) => (
                <li key={"a_" + index + "_" + i}>{a}</li>
              ))}
          </ul>
        </Typography>

        {item.images && (
          <React.Fragment>
          <ImageList
            sx={{ width: "100%", height: "auto" }}
            variant="quilted"
            cols={3}
            rowHeight={121}
          >
            {item.images.map((image, idx) => {
              return (
                <ImageListItem
                  key={"img_" + index + "_" + idx}
                  cols={1}
                  rows={1}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    loading="lazy"
                    onClick={() => handleOpen(image.src, image.title)}
                    className={styles.pointer}
                  />
                </ImageListItem>
              );
            })}
          </ImageList>
          <div className={styles.imagesNotice}>* All images are granted to use, and have copyright. Photos were taken by myself.</div>
          </React.Fragment>
        )}
        {item.map && maps[item.map]}
        {item.other && (
          <Typography variant="body2" gutterBottom component="div">
            * {item.other}{" "}
          </Typography>
        )}
      </Box>
    );
  };

  return (
    <React.Fragment>
      <Modal open={open} onClose={handleClose} image={image} />
      <Typography variant="h4" gutterBottom component="div">
        Projects
      </Typography>
      <Divider />
      {projects.map((d, i) => genItem(d, i))}
    </React.Fragment>
  );
}
