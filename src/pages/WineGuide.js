import React from "react";
import { Collapse } from "antd";
import { WineGuideWrap } from "../style/WineGuideStyle";
import WineStorage from "../components/wineguide/WineStorage";
import WineTemperature from "../components/wineguide/WineTemperature";
import WineGlass from "../components/wineguide/WineGlass";

const items = [
  {
    key: "1",
    label: "와인 보관법",
    children: <WineStorage />,
  },
  {
    key: "2",
    label: "와인 음용 온도",
    children: <WineTemperature />,
  },
  {
    key: "3",
    label: "글라스 선택법",
    children: <WineGlass />,
  },
];
const WineGuide = () => {
  return (
    <WineGuideWrap>
      <Collapse accordion items={items} defaultActiveKey={["1"]} />
    </WineGuideWrap>
  );
};

export default WineGuide;
