import React from "react";
import { FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi";
import Text from "../../foundation/Text";
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
        <Text
          variant="paragraph1"
          tag="h3"
          color="secondary.main"
          textAlign={{
            xs: "center",
            md: "center",
          }}
          fontFamily="Montserrat"
        >
          © 2021 Todos os direitos reservados | Company Name
        </Text>
      </CentralSide>
    </FooterWrapper>
  );
};

export default Footer;
