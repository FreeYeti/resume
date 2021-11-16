import { easeOut } from "ol/easing";
import heiheLayers from "./layer";

export class Animations {
  constructor(map) {
    this.map = map;
    this.view = map.getView();
    this.heiheCenter = [11056462.689530393, 4949375.549783349];
  }

  zoomOut() {
    if (this.view.getZoom() < 2) return;

    this.view.animate({
      zoom: this.view.getZoom() - 1,
      duration: 500,
      easing: easeOut,
    });
  }

  zoomIn() {
    if (this.view.getZoom() > 23) return;

    this.view.animate({
      zoom: this.view.getZoom() + 1,
      duration: 500,
      easing: easeOut,
    });
  }

  flyToHeihe() {
    return new Promise((resolve) => {
      // setTimeout(() => {
      // let zoom = this.view.getZoom();

      this.view.animate(
        {
          center: [10247274, 4199293],
          zoom: 3,
          duration: 3000,
          easing: easeOut,
        },
        () => {
          setTimeout(() => {
            // let zoom = this.view.getZoom();
            this.view.animate(
              {
                center: [11029556.855573997, 4872938.521498175],
                zoom: 6,
                duration: 1500,
                easing: easeOut,
              },
              () => {
                resolve();
              }
            );
          }, 1000);
        }
      );
      // }, 2000)
    });
  }

  blink(layer) {
    return new Promise(function (resolve) {
      layer.setOpacity(0.3);

      let timer,
        t = 1,
        direction = "+",
        repeat = 1;
      timer = setInterval(function () {
        if (t >= 9) direction = "-";
        if (t <= 0) {
          direction = "+";
          repeat++;
        }

        if (direction === "+") t++;
        else t--;

        if (repeat >= 3) {
          layer.setOpacity(1);
          clearInterval(timer);
          resolve(true);
        } else layer.setOpacity(t * 0.1);
      }, 100);
    });
  }

  backToHeihe() {
    this.view.animate({
      center: this.heiheCenter,
      zoom: 7,
      duration: 1500,
      easing: easeOut,
    });
  }

  layerToggle() {
    const layers = heiheLayers.getLayers();
    let box = document.querySelectorAll("ul.layers-ctl li input");
    box.forEach((v) => {
      v.onclick = (e) => {
        let id = e.currentTarget.id;
        if (e.currentTarget.checked == false) {
          this.map.removeLayer(layers[id].layer);
        } else {
          this.map.addLayer(layers[id].layer);
          let vectorSource = layers[id].layer.getSource();
          let extent = vectorSource.getExtent();
          if (extent[0] === Infinity) {
            let callback = (evt) => {
              let source = evt.target;
              if (source.getState() === "ready") {
                this.map.getView().fit(source.getExtent(), { duration: 1000 });
                vectorSource.un("change", callback);
              }
            };
            vectorSource.on("change", callback);
          } else {
            this.map.getView().fit(extent, { duration: 1000 });
          }
        }
      };
    });
  }

  fadeOut(layer, min, max) {
    return new Promise(function (resolve) {
      let timer = setInterval(() => {
        layer.setOpacity(max);
        max = max - 0.1;
        if (max <= min) {
          clearInterval(timer);
          return resolve(true);
        }
      }, 100);
    });
  }

  fadeIn(layer, min, max) {
    return new Promise(function (resolve) {
      let timer = setInterval(() => {
        layer.setOpacity(min);
        min = min + 0.1;
        if (min >= max) {
          clearInterval(timer);
          return resolve(true);
        }
      }, 100);
    });
  }

  stay(time) {
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve();
      }, time);
    });
  }
}
