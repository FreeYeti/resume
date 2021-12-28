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
        Jianxuan(Jack) Li
      </Typography>
      <Typography align="left" color="text.secondary" paragraph>
        Nine years of experience in software development • WebGIS • Python •
        Postgresql • NodeJS • Docker • Kubernetes • SDLC • Agile methodologies
      </Typography>
      {/* <Typography align="left" color="text.secondary" paragraph>
        Thank you for visit, my resume is not available at this time.<br />
        liujin834#gmail
      </Typography> */}
    </React.Fragment>
  );
}
