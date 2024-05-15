"use client";

import React, { FC, useCallback, useState } from "react";
import Menu from "./Menu";
import { NavbarComponentProps } from "./types";

const NavbarComponent: FC<NavbarComponentProps> = ({ menu }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onClick = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <Menu
      isMenuOpen={isMenuOpen}
      menu={menu}
      onClick={onClick}
      onMenuOpenChange={setIsMenuOpen}
    />
  );
};

export default NavbarComponent;
