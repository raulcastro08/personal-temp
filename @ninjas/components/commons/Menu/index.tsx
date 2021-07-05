import React from "react";
import { Logo } from "@theme/Logo";
import Text from "../../foundation/Text";
import { MenuWrapper } from "./styles/MenuWrapper";

type MenuLink = {
  text: string;
  url?: string;
  href?: string;
  scroll?: boolean;
};

const links: MenuLink[] = [
  {
    text: "Home",

    url: "/",
    scroll: true,
  },
  {
    text: "Sobre",
    url: "/sobre",
  },
  {
    text: "Contato",
    url: "/contato",
  },
];

const Menu = () => {
  return (
    <MenuWrapper.Menu>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {links.map((link) => (
          <li key={link.url}>
            <Text variant="smallestException" tag="a" href={link.url}>
              {link.text}
            </Text>
          </li>
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide />
    </MenuWrapper.Menu>
  );
};

export default Menu;
