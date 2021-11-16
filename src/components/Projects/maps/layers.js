import TileWMS from "ol/source/TileWMS";
import TileLayer from "ol/layer/Tile";
import OSMSource from "ol/source/OSM";
import XYZSource from "ol/source/XYZ";

const formatPNG = "image/png";

export const OSMBaseMap = () =>
  new TileLayer({
    visible: true,
    source: new OSMSource(),
  });

const token =
  "pk.eyJ1IjoibGl1amluODM0IiwiYSI6ImNrNGRtMWF4ODA0ZGIzcXFkZjV2N3Y5N24ifQ.wC0AUcy-CPMaaUw4xhxtoA";
export const MapboxLayer = () =>
  new TileLayer({
    title: "Mapbox",
    source: new XYZSource({
      url:
        "https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v10/tiles/256/{z}/{x}/{y}?access_token=" +
        token,
    }),
    visible: true,
  });

export const YetiMapLayer = (title, layer, opacity, origin) =>
  new TileLayer({
    title: title,
    source: new TileWMS({
      url: "https://geo.freeyeti.net/geoserver/yeti/wms",
      params: {
        FORMAT: formatPNG,
        VERSION: "1.1.1",
        tiled: true,
        STYLES: "",
        LAYERS: layer,
        tilesOrigin: origin,
      },
      opacity: opacity,
      visible: true,
    }),
  });
