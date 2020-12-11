import React, { useState } from "react";
import { Button, Popover, PopoverHeader, NavLink } from "reactstrap";
export default function SideNav({ item, id }) {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const toggle = () => setPopoverOpen(!popoverOpen);
  return (
    <div key={id} className={popoverOpen ? "nav-item border-pink" : "nav-item"}>
      <NavLink id={"Popover-" + id}>
        <i className={popoverOpen ? "material-icons pink" : "material-icons"}>
          {" "}
          {item.name}
        </i>
      </NavLink>

      <Popover
        placement={item.placement}
        isOpen={popoverOpen}
        target={"Popover-" + id}
        toggle={toggle}
      >
        <PopoverHeader>
          <Button color="link">Products</Button>
        </PopoverHeader>
        <PopoverHeader>
          <Button color="link">Linesheets</Button>
        </PopoverHeader>
        <PopoverHeader>
          <Button color="link">Categories</Button>
        </PopoverHeader>
      </Popover>
    </div>
  );
}
