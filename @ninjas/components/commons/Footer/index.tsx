import React from "react";
import { FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi";
import {
  DefaultFooterWrapperProps,
  FooterWrapper,
  LeftSide,
  RightSide,
  CentralSide,
} from "./styles/FooterWrapper";

const Footer: React.FC<DefaultFooterWrapperProps> = (props) => {
  return (
    <FooterWrapper {...props}>
      <CentralSide>
        <a href="https://www.alura.com.br/">
          <FiInstagram />
        </a>
        <a href="https://www.alura.com.br/">
          <FiTwitter />
        </a>
        <a href="https://www.alura.com.br/">
          <FiFacebook />
        </a>
      </CentralSide>
    </FooterWrapper>
  );
};

export default Footer;
