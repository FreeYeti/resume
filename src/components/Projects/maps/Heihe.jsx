import React from "react";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import IconButton from "@mui/material/IconButton";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import HomeIcon from "@mui/icons-material/Home";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import { YetiMapLayer, MapboxLayer } from "./layers";
import Map from "ol/Map";
import View from "ol/View";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";

import { Animations } from "./heihe/animation";
import { Flight } from "./heihe/flight";
import { layerHeihe } from "./heihe/layers";

import { getInstance } from "./instance";

import styles from "./styles.less";

export default function Heihe() {
  const [playing, setPlaying] = React.useState(false);

  const startAnimation = async (map) => {
    setPlaying(true);
    const animation = new Animations(map);
    const flight = new Flight(map);

    await animation.flyToHeihe();
    map.addLayer(layerHeihe);
    await animation.blink(layerHeihe);

    await animation.fadeOut(layerHeihe, 0.1, 1);
    await flight.play();
    await animation.fadeIn(layerHeihe, 0.1, 1);
    map.removeLayer(layerHeihe);
    setPlaying(false);
    return true;
  };

  React.useEffect(async () => {
    const baseLayer = MapboxLayer();

    const map = new Map({
      layers: [baseLayer],
      target: "heihemap",
      controls: [],
      view: new View({
        center: [11056462.689530393, 4949375.549783349],
        zoom: 2,
      }),
    });

    getInstance(map);

    await startAnimation(map);
  }, []);

  const handleBackToHeihe = () => {
    const animation = new Animations(getInstance());
    animation.backToHeihe();
    animation = null;
  };

  const handlePlay = async () => {
    await startAnimation(getInstance());
  };

  const handleZoomIn = async () => {
    const animation = new Animations(getInstance());
    animation.zoomIn();
    animation = null;
  };

  const handleZoomOut = async () => {
    const animation = new Animations(getInstance());
    animation.zoomOut();
    animation = null;
  };

  return (
    <div style={{ width: "100%" }}>
      <Stack spacing={2}>
        <div>
          <Stack direction="row" spacing={2}>
            <LoadingButton
              loading={playing}
              variant="outlined"
              onClick={handlePlay}
            >
              <PlayArrowIcon /> Play Animation
            </LoadingButton>
            <IconButton aria-label="Zoom In" onClick={handleZoomIn}>
              <ZoomInIcon />
            </IconButton>
            <IconButton aria-label="Zoom Out" onClick={handleZoomOut}>
              <ZoomOutIcon />
            </IconButton>
            <Button
              variant="outlined"
              startIcon={<HomeIcon />}
              onClick={handleBackToHeihe}
            >
              Back to Heihe
            </Button>
          </Stack>
        </div>
        <div id="heihemap" className={styles.map}></div>
        <div style={{ textAlign: "right" }}>
          Basemap &copy;
          <a
            href="https://www.mapbox.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Mapbox
          </a>
          &nbsp; Data &copy;
          <a
            href="https://data.tpdc.ac.cn/en/data/60c01a0d-6b7e-401b-a864-bc94f0941a3b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TPDC
          </a>
          &nbsp; &copy;
          <a
            href="https://heihedata.org/en/observe/hiwater"
            target="_blank"
            rel="noopener noreferrer"
          >
            HeiheData
          </a>
        </div>
      </Stack>
    </div>
  );
}
