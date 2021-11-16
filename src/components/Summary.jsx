import React from "react";
import Typography from "@mui/material/Typography";

export default function Summary() {
  return (
    <React.Fragment>
      <Typography
        component="h2"
        variant="h3"
        align="left"
        color="text.primary"
        gutterBottom
      >
        Jian Xuan Li (Jack)
      </Typography>
      <Typography align="left" color="text.secondary" paragraph>
        Eight years of experience in software development • WebGIS • Python •
        Postgresql • NodeJS • Docker • Kubernetes • SDLC • Agile methodologies
      </Typography>
    </React.Fragment>
  );
}
