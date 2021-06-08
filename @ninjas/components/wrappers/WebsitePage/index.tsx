import React from "react";
import FormSignIn from "@patterns/FormSignIn";
import Footer from "../../commons/Footer";
import Menu from "../../commons/Menu";
import Modal from "../../commons/Modal";
import { Box, BoxProps } from "../../foundation/Layout/Box";
import SEO, { SEOProps } from "../../commons/SEO";

type WebsitePageContextProps = {
  toggleModalSignIn?: () => void | null;
};

export const WebsitePageContext = React.createContext<WebsitePageContextProps>({
  toggleModalSignIn: null,
});

export type WebsitePageWrapperProps = {
  seoProps?: SEOProps;
  pageBoxProps?: BoxProps;
  menuProps?: {
    display?: boolean;
  };
};

const WebsitePageWrapper: React.FC<WebsitePageWrapperProps> = ({
  children,
  seoProps,
  pageBoxProps,
  menuProps,
}) => {
  const [isModalOpen, setModalState] = React.useState(false);

  return (
    <WebsitePageContext.Provider
      value={{
        toggleModalSignIn: () => {
          setModalState(!isModalOpen);
        },
      }}
    >
      <SEO {...seoProps} />

      <Box display="flex" flex="1" flexDirection="column" {...pageBoxProps}>
        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setModalState(false);
          }}
        >
          {(modalProps) => <FormSignIn modalProps={modalProps} />}
        </Modal>
        {menuProps?.display && <Menu />}
        {children}
        <Footer />
      </Box>
    </WebsitePageContext.Provider>
  );
};

export default WebsitePageWrapper;
