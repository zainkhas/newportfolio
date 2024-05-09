"use client";

import React, { FC, useState } from "react";
import { Navbar as NavbarNextUI } from "@nextui-org/react";
import Menu from "./Menu";
import { NavbarComponentProps } from "./types";

const NavbarComponent: FC<NavbarComponentProps> = ({ menu }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <NavbarNextUI onMenuOpenChange={setIsMenuOpen}>
      <Menu isMenuOpen={isMenuOpen} menu={menu} />
    </NavbarNextUI>
  );
};

export default NavbarComponent;
