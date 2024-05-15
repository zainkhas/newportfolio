import { Navbar } from "@/components/Navbar";
import { Menu } from "@/types";
import { Dispatch, SetStateAction } from "react";
export type MenuProps = {
  isMenuOpen: boolean;
  menu: Menu;
  onClick: () => void;
  onMenuOpenChange: Dispatch<SetStateAction<boolean>>;
};

export type NavbarComponentProps = {
  menu: Menu;
};
