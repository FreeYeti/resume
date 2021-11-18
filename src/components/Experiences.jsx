import React from "react";
import Divider from '@mui/material/Divider';
import Typography from "@mui/material/Typography";

import styles from "../styles.less";

const experiences = [
  {
    title: "Software Development Manager",
    company: "Beautiful China Academy of Data Research Co.,Ltd. (Gansu Branch) • 美丽华夏大数据研究院有限公司甘肃分公司",
    location: "Lanzhou, Gansu (China)",
    website: "http://www.bcadr.cn/",
    from: "2021",
    to: "now",
    achievement: [
      "To manage the department of GIS-development",
      "To design and develop softwares which are needed",
    ],
  },
  {
    title: "Senior Director of Software Development",
    company: "Lan Zhou Data Cloud, LLC. • 兰州数云软件科技有限公司",
    location: "Lanzhou, Gansu (China)",
    website: "https://westdc.cn/",
    from: "2019",
    to: "2021",
    achievement: [
      "Management of development team",
      "Built strong customer relationships with major clients",
      "To meet customers' needs, and solved difficult technical problems in projects",
    ],
  },
  {
    title: "WebGIS Architect",
    company: "Lan Zhou Data Cloud, LLC. • 兰州数云软件科技有限公司",
    location: "Lanzhou, Gansu (China)",
    website: "https://westdc.cn/",
    from: "2016",
    to: "2019",
    achievement: [
      "Implemented high availability microservice architecture by Docker and Kubernetes",
      "Designed and developed software product with team",
      "Upgraded technical stack of backend and frontend",
    ],
  },
  {
    title: "Senior Software Engineer",
    company:
      "Cold and Arid Regions Environmental and Engineering Research Institute (CAREERI) • 中国科学院寒区旱区环境与工程研究所",
    location: "Lanzhou, Gansu (China)",
    website: "http://www.nieer.cas.cn/",
    from: "2012",
    to: "2016",
    achievement: [
      "Processed spatial data using GDAL, Raster.io, Grass, Qgis, OGR to help scientists improve efficiency in research",
      "Published map service with Geoserver and Tilemill, visualized spatial data for research and education",
      "Developed over 50% of new features in Cold and Arid Regions Science Data Center",
      "Maintained all deployment on servers of Arid Regions Science Data Center",
    ],
  },
];

export default function Experiences() {
  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom component="div">
        Experiences
      </Typography>
      <Divider />
      {experiences.map((item, index) => (
        <React.Fragment key={"e_" + index}>
          <Typography variant="h5" gutterBottom component="div">
            {item.title}
          </Typography>
          <Typography variant="subtitle2" gutterBottom component="div">
            <a href={item.website}>{item.company}</a>
            <br />
            {item.location} {item.from} - {item.to}
          </Typography>
          {/* <Typography variant="body1" gutterBottom component="div">
            <ul className={styles.unstyledList}>
              {item.achievement.map((content, index) => (
                <li key={index}> - {content}</li>
              ))}
            </ul>
          </Typography> */}
        </React.Fragment>
      ))}
    </React.Fragment>
  );
}
