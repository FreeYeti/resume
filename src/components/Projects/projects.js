/* eslint-disable */

import img_tpdc1 from "./images/tpdc_poles_earth.jpg";
import img_flood1 from "./images/flash_floods_1.jpg";
import img_flood2 from "./images/flash_floods_2.jpg";
import img_citymap1 from "./images/city_map_1.jpg"
import img_citymap2 from "./images/city_map_2.jpg"
import img_citymap3 from "./images/city_map_3.jpg"
import img_earthquake1 from "./images/earthquake_1.jpg";
import img_earthquake2 from "./images/earthquake_2.jpg";
import img_g214_1 from "./images/g214_1.jpg";
import img_g214_2 from "./images/g214_2.jpg";
import img_g214_3 from "./images/g214_3.jpg";
import img_g214_4 from "./images/g214_4.jpg";
import img_g214_5 from "./images/g214_5.jpg";
import img_g214_6 from "./images/g214_6.jpg";
import img_lztdt_1 from "./images/lztdt_1.jpg";
import img_lztdt_2 from "./images/lztdt_2.jpg";
import img_tianjin_1 from "./images/tianjin_1.jpg";
import img_tianjin_2 from "./images/tianjin_2.jpg";
import img_tianjin_3 from "./images/tianjin_3.jpg";

export const projects = [
  {
    title: "Tianjin emergent event prediction system",
    time: "2021",
    location: "Lanzhou (China)",
    achievement: [
      "Developed a program to process GPS tracks (five million points per day)",
      "Implemented a tool to analyze dangerous facts, and marked the result on a map",
      "Created a utility to play GPS tracks by ES6",
      "Developed the pipeline of rasterizing for weather data",
      "Built CI/CD pipelines to deploy the staging",
    ],
    images: [
      {
        src: img_tianjin_1,
        title: "Navigation",
      },
      {
        src: img_tianjin_2,
        title: "Admin",
      },
      {
        src: img_tianjin_3,
        title: "Admin",
      },
    ],
  }, // Tianjin
  {
    title: "Lanzhou Geospatial Services",
    time: "2020",
    location: "Lanzhou (China)",
    website: "https://gansu.tianditu.gov.cn/lanzhou/",
    achievement: [
      "Implemented high availability Web Map Tile Services(WMTS) by Docker and Kubernetes",
      "Designed and developed program to process spatial data by Python",
      "Built CI/CD pipelines",
      "Created fundamental for frontend by Webpack and React(with Redux)",
    ],
    images: [
      {
        src: img_lztdt_1,
        title: "Navigation",
      },
      {
        src: img_lztdt_2,
        title: "Admin",
      },
    ],
  }, // TianDiTu
  {
    title: "National Tibetan Plateau Data Center",
    time: "2019",
    location: "Beijing (China)",
    website: "https://data.tpdc.ac.cn/en/",
    achievement: [
      "Led the backend development team, and we delivered a new version of API and website every two weeks",
      "Implemented high availability services by Docker and Kubernetes, over 500 RPS in peak hours, and services can scale-up or scale-down",
      "Analyzed the snow depth trend in China by GDAL and PySpark, decreased the duration of calculation from 5 days to 20 minutes",
      "Accomplished rolling-update by Kubernetes and CI/CD pipeline, the website never down except for hardware maintenance",
      "Processed spatial data by Pandas and GDAL, replaced over 50% of manual processing",
      "Rendered spatial data by Mapnik, rendered over 3000 maps for a demonstration in the National Science Library",
      "Published WMS by Geoserver, four websites used nearly 900 map layers from this service",
      "Developed map plugin using Openlayers and ES6 with Webpack and integrated Cesiumjs into React.js to implemented a 3D map viewer",
    ],
    images: [
      {
        src: img_tpdc1,
        title:
          "Demonstration of the data that I rendered as a map. In The National Science Library(BeiJing, China).",
      },
    ],
  }, //TPDC
  {
    title: "Ecological Data Analysis of Three-River-Source National Park",
    time: "2018",
    location: "LanZhou GanSu (China); Xining, Qinghai (China)",
    website: false,
    achievement: [
      `Developed a pipeline for processing and analyzing the NDVI data: 
              1. mask the data by GDAL; 
              2. calculate by Raster.io and PySpark; 
              3. render to a thumbnail by Mapnik; 
              Decreased the duration of calculation from 7 days 
              to 35 minutes and processed data fully automatic`,
      "Published map layers by Geoserver and used by Three-River-Source National Park",
      `Deployed the application and Spark cluster by Docker and Docker-compose, all deployment under CI/CD`,
    ],
    map: "Sjy",
  }, // SJY
  {
    title: "Heihe Data Center",
    time: "2018",
    location: "LanZhou GanSu (China)",
    achievement: [
      `Upgraded the website by Python, Javascript, Webpack, ES6, Openlayers, 
              Geoserver, and implemented a real-time data dashboard with 
              Django Channels, Echart, Openlayers`,
      `Designed and implemented a data storage system 
              (the data conveyed by the wireless network from sensors of automatic 
              observation stations) based PostgreSQL in 2012 
              , Storage over 500 million records in it, and query by time and sensor within 10s`,
      `Migrated data from PostgreSQL to Greenplum with our team in 2018 
              , query by time and sensor within 1s`,
    ],
    map: "Heihe",
    other: `Papers:
          Design of Field Observation Data Automatic Assembling System
          Database Designing and Optimization for Hydrological and Ecological Experimental in Heihe River Basin
          The Application of Web-based Visualization System for a Wireless Sensor Network in Heihe Watershed Allied Telemetry Experimental Research
          `,
  }, // HEIHE
  {
    title: "Flash Floods Hydrodynamic Prediction Model",
    time: "2017",
    location: "Lanzhou GanSu (China)",
    website: false,
    achievement: [
      "Built an internal website by Node.js and Tilemill, 16 maps sustain each part in research ",
      "Integrated a prediction model developed in Java, researchers can change parameters on the web interface, which reduced most of the time of model manipulate",
      "Used Pandas in the project and decreased 90% time in analyzing and visualizing",
      "Processed and analyzed spatial data using Pandas and GDAL, replaced all repeated work and helped the researchers cut down four weeks of data processing",
    ],
    images: [
      {
        src: img_flood1,
        title: "Visualization",
      },
      {
        src: img_flood2,
        title: "Web interface",
      },
    ],
    other: `All of cited data were published on http://westdc.westgis.ac.cn (English version: http://card.westgis.ac.cn). 
                    Paper: Modeling flash floods in ungauged mountain catchments of China: A decision tree learning approach for parameter regionalization`,
  }, // Flash floods
  {
    title: "City Planning Map of LanZhou",
    time: "2016",
    location: "LanZhou GanSu (China)",
    website: false,
    achievement: [
      "Led development team, Created a web admin site with Node.js and delivered in 20 days",
      "Implemented an interactive map by Openlayers, good user experience bring us continuous contracts from City Planning Department of LanZhou",
    ],
    images: [
      {
        src: img_citymap1,
        title: "Meansure on map",
      },
      {
        src: img_citymap2,
        title: "Overview",
      },
      {
        src: img_citymap3,
        title: "A layer",
      },
    ],
  }, // City map
  {
    title: "Nepal Earthquake data sharing website",
    time: "2015",
    location: "LanZhou GanSu (China)",
    website: false,
    achievement: [
      "Published maps using Geoserver and Leaflet, 60k map views in 12 months",
      "Built website in PHP and Javascript, released the website in 3 days, over 150k times of data downloading",
      "I am proud to have been a volunteer and to have made a contribution to the rescue",
    ],
    images: [
      {
        src: img_earthquake1,
        title: "screenshot",
      },
      {
        src: img_earthquake2,
        title: "screenshot",
      },
    ],
  }, // Nepal
  {
    title: "Permafrost Research Along The Route G214",
    time: "2014",
    location: "GuoLuo QingHai (China)",
    website: false,
    achievement: [
      "Processed data by OGR, GDAL, and OpenDroneMap, boost data processing and create 3D model in batch",
      "Published maps by Geoserver and visualized data by Openlayers and Threejs, help researchers check data online",
      "Joined the geographic survey, worked at the Tibetan Plateau(in elevation from 3000 to 4000 meters above sea level) for several days",
    ],
    images: [
      {
        src: img_g214_1,
        title: "Our team.",
      },
      {
        src: img_g214_2,
        title: "Laboratory besides Rte G214.",
      },
      {
        src: img_g214_3,
        title: "The source of Yellow river.",
      },
      {
        src: img_g214_4,
        title: "The source of Yellow river.",
      },
      {
        src: img_g214_5,
        title: "The source of Yellow river.",
      },
      {
        src: img_g214_6,
        title: "The source of Yellow river.",
      },
    ],
  }, // G214
  {
    title: "Cold and Arid Regions Science Data Center",
    time: "2012",
    location: "LanZhou GanSu (China)",
    achievement: [
      "Developed new features in PHP, Javascript with Jquery and Openlayers, over 20000 scientists and students are using this data center",
      "Listed in Trusted Data Services for Global Science by ICSU World Data System",
    ],
  }, // CARD
];
