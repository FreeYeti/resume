import { Fill, Circle, Icon, Style, Stroke } from "ol/style.js";
import GeoJSON from "ol/format/GeoJSON";
import { LineString, Point } from "ol/geom";
import VectorLayer from "ol/layer/Vector";
import Feature from "ol/Feature";
import VectorSource from "ol/source/Vector";
import { easeOut } from "ol/easing";
import { layerSite } from "./layers";
import request from "@utils/request";

const style = {
  route: new Style({
    stroke: new Stroke({
      width: 6,
      color: [237, 212, 0, 0.8],
    }),
  }),
  icon: new Style({
    image: new Icon({
      anchor: [0.5, 1],
      src: "/statics/images/marker.png",
    }),
  }),
  geoMarker: new Style({
    image: new Circle({
      radius: 7,
      snapToPixel: false,
      fill: new Fill({ color: [29, 93, 230, 0.8] }),
      stroke: new Stroke({
        color: "white",
        width: 0,
      }),
    }),
    // image: new Icon({
    //     anchor: [0.5, 1],
    //     src: '/img/drone.png'
    // })
  }),
};

const center = {
  up: [11094375.455559842, 4644972.735805016],
  middle: [11161635.600729644, 4693786.072119316],
  down: [11261084.766396342, 5159614.492221682],
};

const zoom = {
  up: 9,
  middle: 10,
  down: 11,
};

/**
 * Flight 黑河飞行动画
 * 1. 加载黑河河流矢量数据
 * 2. 初始化动画图层
 */
export class Flight {
  constructor(map) {
    this.map = map;
    this.currentZoom = this.map.getView().getZoom();
    this.currentCenter = this.map.getView().getCenter();
    this.plaing = false;
  }

  async play() {
    if (this.plaing) return;

    this.plaing = true;

    const heiheGeoJsonData = await this.heiheGeoJson();
    this.initLayers(heiheGeoJsonData, style);

    this.map.addLayer(this.vectorLayer);
    this.map.addLayer(this.animationLayer);

    let sitesLayerShowed = false;
    this.map.getLayers().forEach(function (layer) {
      if (layer.get("name") == "sites") {
        sitesLayerShowed = true;
      }
    });

    await this.stay(1000);

    // 上游动画
    await this.moveTo(0, 35, 100);
    await this.stay(1000);
    await this.zoomTo("up");
    if (!sitesLayerShowed) {
      this.map.addLayer(layerSite);
    }
    await this.stay(4000);
    if (!sitesLayerShowed) {
      this.map.removeLayer(layerSite);
    }
    await this.zoomBack();

    // 中游动画
    await this.moveTo(35, 60, 100);
    await this.stay(1000);
    await this.zoomTo("middle");
    if (!sitesLayerShowed) {
      this.map.addLayer(layerSite);
    }
    await this.stay(4000);
    if (!sitesLayerShowed) {
      this.map.removeLayer(layerSite);
    }
    await this.zoomBack();

    // 下游动画
    await this.moveTo(60, 999, 100);
    await this.stay(1000);
    await this.zoomTo("down");
    if (!sitesLayerShowed) {
      this.map.addLayer(layerSite);
    }
    await this.stay(4000);
    if (!sitesLayerShowed) {
      this.map.removeLayer(layerSite);
    }
    await this.zoomBack();

    this.map.removeLayer(this.vectorLayer);
    this.map.removeLayer(this.animationLayer);

    this.plaing = false;
  }

  async heiheGeoJson() {
    return await request({
      url: "/statics/heihe-geojson/line_hei.geojson",
      method: "GET",
    });
  }

  initLayers(data, styles) {
    let geom = new GeoJSON().readFeatures(data);
    let heihe = geom[0].getGeometry();
    let route = new LineString(heihe.getCoordinates());
    let routeFeature = new Feature({
      type: "route",
      geometry: route,
    });

    this.routeCoordinates = route.getCoordinates();

    this.geoMarker = new Feature({
      type: "geoMarker",
      geometry: new Point(this.routeCoordinates[0]),
    });

    this.vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [routeFeature],
      }),
      zIndex: 100,
      style: styles["route"],
    });

    this.animationLayer = new VectorLayer({
      source: new VectorSource({
        features: [this.geoMarker],
      }),
      zIndex: 100,
      style: styles["geoMarker"],
    });
  } //initLayers()

  moveTo(start, end, speed) {
    return new Promise((resolve) => {
      let maxIndex = this.routeCoordinates.length - 1;
      let index = start;
      let timer = null;
      if (end > maxIndex) end = maxIndex;

      timer = setInterval(() => {
        if (index >= end) {
          clearInterval(timer);
          return resolve();
        }

        index++;

        this.geoMarker.setGeometry(new Point(this.routeCoordinates[index]));
        this.map.render();
      }, speed);
    });
  }

  stay(time) {
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve();
      }, time);
    });
  }

  zoomTo(pos) {
    return new Promise((resolve) => {
      this.currentZoom = this.map.getView().getZoom();
      this.currentCenter = this.map.getView().getCenter();

      this.map.getView().animate(
        {
          center: center[pos],
          zoom: zoom[pos],
          duration: 2000,
          easing: easeOut,
        },
        () => {
          return resolve();
        }
      );
    });
  }

  zoomBack() {
    return new Promise((resolve) => {
      this.map.getView().animate(
        {
          center: this.currentCenter,
          zoom: this.currentZoom,
          duration: 2000,
          easing: easeOut,
        },
        () => {
          return resolve();
        }
      );
    });
  }
}
