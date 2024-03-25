"use client";

import React, { useState } from "react";
import { Navbar as NavbarNextUI } from "@nextui-org/react";
import Menu from "./Menu";
export const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <NavbarNextUI onMenuOpenChange={setIsMenuOpen}>
      <Menu isMenuOpen={isMenuOpen} />
    </NavbarNextUI>
  );
};
