import {
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Navbar
} from "@nextui-org/react";
import { FC } from "react";
import { MenuProps } from "./types";

const Menu: FC<MenuProps> = ({
  isMenuOpen,
  menu,
  onClick,
  onMenuOpenChange
}) => {
  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={onMenuOpenChange}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menu.map(({ name, path }) => (
          <NavbarItem key={name}>
            <Link color="foreground" href={path} className="text-xl">
              {name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        {menu.map(({ name, path }) => (
          <NavbarMenuItem key={name}>
            <Link
              color="foreground"
              className="w-full"
              href={path}
              size="lg"
              onClick={onClick}
            >
              {name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Menu;
