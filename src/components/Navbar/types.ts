import { Navbar } from "@/components/Navbar";
import { Menu } from "@/types/types";
export type MenuProps = {
  isMenuOpen: boolean;
  menu: Menu;
};

export type NavbarComponentProps = {
  menu: Menu;
};
