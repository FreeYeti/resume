import React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function Education() {
  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom component="div">
        Education
      </Typography>
      <Divider />
      <Typography align="left" color="text.secondary" paragraph>
        Conestoga college (Waterloo campus) • Mobile solution development • 2022 - 2023
      </Typography>
      <Typography align="left" color="text.secondary" paragraph>
        Lanzhou University • Computer Science • 2008 – 2013
      </Typography>
    </React.Fragment>
  );
}
