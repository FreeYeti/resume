import React from "react";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

import Summary from "./components/Summary";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";

export default function app() {
  return (
    <main>
      <CssBaseline />

      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="md">
          <Summary />
          <Projects />
          <Experiences />
        </Container>
      </Box>
    </main>
  );
}
