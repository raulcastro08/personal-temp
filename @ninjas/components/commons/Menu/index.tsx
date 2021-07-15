import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Logo } from "@theme/Logo";
import Text from "../../foundation/Text";
import { Button } from "../Button";
import { MenuWrapper } from "./styles/MenuWrapper";

type MenuLink = {
  text: string;
  url: string;
};

const links: MenuLink[] = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "Contato",
    url: "/contato",
  },
  {
    text: "Sobre",
    url: "/sobre",
  },
];

const Menu = () => {
  return (
    <MenuWrapper.Menu>
      <MenuWrapper.LeftSide>
        <Logo size="large" />
      </MenuWrapper.LeftSide>
      {/* <MenuWrapper.CentralSide>
        {links.map((link) => (
          <li key={link.url}>
            <Text variant="smallestException" tag="a" href={link.url}>
              {link.text}
            </Text>
          </li>
        ))}
      </MenuWrapper.CentralSide> */}
      <MenuWrapper.RightSide>
        {links.map((link) => (
          <li key={link.url}>
            <Text variant="smallestException" tag="a" href={link.url}>
              {link.text}
            </Text>
          </li>
        ))}
      </MenuWrapper.RightSide>
    </MenuWrapper.Menu>
  );
};

export default Menu;
