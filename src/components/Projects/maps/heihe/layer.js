import {
  layerHeihe,
} from "./layers.js";

const layers = [
  {
    text: "流域边界",
    layer: layerHeihe,
    location: [11020894.921225563, 4881182.67577751],
  },
];

export default class heiheLayer {
  constructor() {}

  static getLayers() {
    return layers;
  }
}
