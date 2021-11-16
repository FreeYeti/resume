import React from "react";
import { YetiMapLayer } from "./layers";
import Map from "ol/Map";
import View from "ol/View";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";

import styles from "./styles.less";

export default function Sjy() {
  React.useEffect(() => {
    const layer = YetiMapLayer(
      "SJY_trend",
      "yeti:SJY_NDVI_trend_2000_2018_ok",
      0.6,
      89.159733103267 + "," + 31
    );

    const baseLayer = new TileLayer({
      source: new OSM(),
    });

    const map = new Map({
      layers: [baseLayer],
      target: "sjymap",
      view: new View({
        projection: "EPSG:4326",
        center: [96.15234, 33.96973],
        zoom: 6,
      }),
      controls: [],
    });

    map.addLayer(layer);
  }, []);

  return (
    <div>
      <div id="sjymap" className={styles.map}></div>
      <div>
        <div className={styles.sjyLegend}>
          <span style={{ float: "left" }}>Decrease</span>
          <span
            style={{
              display: "block",
              width: "40%",
              float: "right",
              textAlign: "right",
            }}
          >
            Increase
          </span>
        </div>
        <div style={{ textAlign: "center" }}>
          Trend of NDVI from 2000 to 2018
        </div>
      </div>
      <div style={{ textAlign: "right" }}>
        Basemap &copy;
        <a
          href="https://www.openstreetmap.org/"
          rel="noopener noreferrer"
          target="_blank"
        >
          OpenStreetMap
        </a>
        &nbsp; Data &copy;
        <a
          href="https://data.tpdc.ac.cn/en/data/58fb3c19-6dd8-4825-82b2-92ce9787f26d/"
          target="_blank"
          rel="noopener noreferrer"
        >
          TPDC
        </a>
      </div>
    </div>
  );
}
