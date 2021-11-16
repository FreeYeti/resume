import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Fill, Stroke, Style, Circle, Text } from "ol/style";
import Geojson from "ol/format/GeoJSON";

function lineStyle(color, width) {
  return new Style({
    stroke: new Stroke({
      color: color,
      width: width,
    }),
  });
}

function lineAndFill(color1, color2, width) {
  return new Style({
    stroke: new Stroke({
      color: color1,
      width: width,
    }),
    fill: new Fill({
      color: color2,
    }),
  });
}

const GEO_JSON_PATH = "/statics/heihe-geojson/";

/* 黑河layer */
let layerHeihe = new VectorLayer({
  source: new VectorSource({
    url: GEO_JSON_PATH + "heihe.geojson",
    format: new Geojson(),
  }),
  style: lineAndFill("rgba(230, 26, 107, 0.5)", "rgba(230, 26, 107, 0.3)", 2),
});

let layerLinehei = new VectorLayer({
  source: new VectorSource({
    url: GEO_JSON_PATH + "line_hei.geojson",
    format: new Geojson(),
  }),
  style: lineStyle("rgba(25,25,112,1)", 3),
});

let layerSite = new VectorLayer({
  source: new VectorSource({
    url: GEO_JSON_PATH + "site.geojson",
    format: new Geojson(),
  }),
  zIndex: 100,
  style: function (feature, resolution) {
    let site_name = feature.get("fld_name");
    let site_id = feature.get("fld_site_i");
    let color = "#ffffff"; //'rgba(100, 212, 250, 0.4)' // others
    if (site_id > 330) {
      color = "red"; //'rgba(10, 212, 0, 0.4)'; // qxz
    }
    if (site_id <= 60) {
      color = "orange"; //'rgba(237, 212, 105, 0.4)' // WATERNET
    }
    if (site_id > 60 && site_id <= 120) {
      color = "#00ffff"; //'rgba(237, 24, 0, 0.4)' // SoilNET
    }
    if (site_id > 120 && site_id <= 250) {
      color = "#00a2ff"; //'rgba(237, 24, 242, 0.4)' // BNUNET
    }
    if (site_id > 250 && site_id <= 300) {
      color = "#00d15e"; //'rgba(24, 240, 21, 0.4)' // BNULAI
    }
    if (resolution < 5) {
      return new Style({
        image: new Circle({
          radius: 7,
          snapToPixel: false,
          fill: new Fill({
            color: color,
          }),
          stroke: new Stroke({
            color: "white",
            width: 2,
          }),
        }),
        fill: new Fill({
          color: "rgba(0,255,72,0.5)",
        }),
        text: new Text({
          text: site_name,
          fill: new Fill({
            color: color,
          }),
          offsetX: -10,
          offsetY: -20,
        }),
      });
    } else {
      return new Style({
        image: new Circle({
          radius: 7,
          snapToPixel: false,
          fill: new Fill({
            color: color,
          }),
          stroke: new Stroke({
            color: "white",
            width: 2,
          }),
        }),
      });
    } //endif
  },
}); //layerSite

export { layerHeihe, layerLinehei, layerSite };
