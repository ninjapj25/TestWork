import React from "react";
import { Nav } from "reactstrap";

import SideNav from "./components/navs/SideNav";
import TopNav from "./components/navs/TopNav";

export default function App() {
  const data = [
    {
      name: "cloud",
      placement: "left",
    },
    {
      name: "favorite",
      placement: "left",
    },
    {
      name: "attachment",
      placement: "left",
    },
    {
      name: "computer",
      placement: "left",
    },
    {
      name: "traffic",
      placement: "left",
    },
    {
      name: "traffic",
      placement: "left",
    },
    {
      name: "traffic",
      placement: "left",
    },
    {
      name: "traffic",
      placement: "left",
    },
    {
      name: "traffic",
      placement: "left",
    },
    {
      name: "traffic",
      placement: "left",
    },
  ];

  return (
    <div>
      <TopNav />
      <Nav vertical={true} className="sideNav">
        {data.map((item, i) => (
          <SideNav key={i} item={item} id={i} />
        ))}
      </Nav>
    </div>
  );
}
