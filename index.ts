import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import HealthChart from "./charts/health";
import DpChart from "./charts/pollution/dpChart";
import OpChart from "./charts/pollution/opChart";
import FluorChart from "./charts/pollution/fluorChart";
import CmpChart from "./charts/pollution/cmpChart";
import OzChart from "./charts/pollution/ozChart";
import SpChart from "./charts/pollution/spChart";

const map = new Map({
  target: "map",
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 0
  })
});

let myChart = new HealthChart();
let dpChart = new DpChart();
let spChart = new SpChart();
let opChart = new OpChart();
let fluorChart = new FluorChart();
let cmpChart = new CmpChart();
let ozChart = new OzChart();
